import type { VNode } from "preact"

type PageFileData = {
  relativePath?: string
  slug?: string
  frontmatter?: {
    status?: unknown
    type?: unknown
    request?: unknown
    scope?: {
      lang?: unknown
      schema?: unknown
    }
  }
}

type QuartzComponentProps = {
  fileData: PageFileData
}

type QuartzComponent = ((props: QuartzComponentProps) => VNode | null) & {
  css?: string
}

type QuartzComponentConstructor = (_opts?: undefined) => QuartzComponent

type Treebank = {
  id: string
  schema: string
  lang: string
  audio?: boolean
}

type Scope = {
  langs: string[]
  schemas: string[]
}

const sud: Treebank[] = []
let tbs = require("../../data/mSUD_2.18.json") as Treebank[]
sud.push(...tbs)
tbs = require("../../data/pSUD_2.18.json") as Treebank[]
sud.push(...tbs)
tbs = require("../../data/SUD_2.18_native.json") as Treebank[]
sud.push(...tbs)
tbs = require("../../data/SUD_2.18_converted.json") as Treebank[]
sud.push(...tbs)

function grewMatchPath(treebank: string, request: string): string {
  request = request.replace(/\n/g, "%0A")
  request = request.replace(/\+/g, "%2B")
  return `https://universal.grew.fr?corpus=${treebank}&request=${request}`
}

function buildScope(frontmatter: PageFileData["frontmatter"]): Scope {
  const langs: string[] = []
  const schemas: string[] = []
  const lang = frontmatter?.scope?.lang

  if (typeof lang === "string") {
    langs.push(lang)
  } else if (Array.isArray(lang)) {
    langs.push(...lang.filter((value): value is string => typeof value === "string"))
  }

  const schema = frontmatter?.scope?.schema
  if (typeof schema === "string") {
    schemas.push(schema)
  } else if (Array.isArray(schema)) {
    schemas.push(...schema.filter((value): value is string => typeof value === "string"))
  }

  return { langs, schemas }
}

function scopeToStrings(scope: Scope): string[] {
  const parts: string[] = []

  if (scope.langs.length > 0) {
    parts.push(`Language${scope.langs.length === 1 ? "" : "s"}: ${scope.langs.join(", ")}`)
  }

  if (scope.schemas.length > 0) {
    parts.push(`Schema${scope.schemas.length === 1 ? "" : "s"}: ${scope.schemas.join(", ")}`)
  }

  return parts
}

function filterScope(scope: Scope): Treebank[] {
  return sud.filter((treebank) => {
    const languageMatches = scope.langs.length === 0 || scope.langs.includes(treebank.lang)
    const schemaMatches = scope.schemas.length === 0 || scope.schemas.includes(treebank.schema)
    return languageMatches && schemaMatches
  })
}

const PageEdit: QuartzComponent = ({ fileData }) => {
  if (fileData.relativePath) {
    const editUrl = `https://github.com/surfacesyntacticud/pebbles/edit/main/content/${fileData.relativePath}`
    return (
      <div style="text-align: end;">
        <a class="orange-badge" href={editUrl}>Edit this page</a>
      </div>
    )
  }

  if (fileData.slug) {
    const folder = fileData.slug.split("/").slice(0, -1).join("/")
    const folderUrl = `https://github.com/surfacesyntacticud/pebbles/edit/main/content/${folder}`
    return (
      <div style="text-align: end;">
        <a class="orange-badge" href={folderUrl}>Create a file <code>index.md</code> here</a>
      </div>
    )
  }

  return null
}

PageEdit.css = `
.orange-badge {
  background-color: #dc9230;
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
  color: black;
}
`

const Status: QuartzComponent = ({ fileData }) => {
  const status = fileData.frontmatter?.status

  if (typeof status === "string") {
    return (
      <div>
        <a class="draft_badge">{status}</a>
      </div>
    )
  }

  return null
}

Status.css = `
.draft_badge {
  background-color: #ed751f;
  display: block;
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
  color: black;
}
`

const Request: QuartzComponent = ({ fileData }) => {
  const type = fileData.frontmatter?.type
  if (type !== "valid" && type !== "doc") {
    return null
  }

  const request = fileData.frontmatter?.request
  const scope = buildScope(fileData.frontmatter)

  let badge = ""
  switch (type) {
    case "valid":
      badge = "Validation Pebble"
      break
    case "doc":
      badge = "Documentation Pebble"
      break
  }

  if (typeof request !== "string") {
    return (
      <div>
        <span class="warning-msg">Invalid pebble: No request found in frontmatter</span>
      </div>
    )
  }

  const filteredTreebanks = filterScope(scope)

  return (
    <div>
      <h3 class="badge">{badge}</h3>
      <ul>
        {scopeToStrings(scope).map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <pre>
        <code class="language-grew">{request}</code>
      </pre>
      <br />
      {filteredTreebanks.length} treebank{filteredTreebanks.length > 1 ? "s" : ""}
      <br />
      <br />
      {filteredTreebanks.length > 5 ? (
        <select
          class="tb-dropdown"
          defaultValue=""
          {...({ onchange: "if(this.value) window.open(this.value,'_blank')" } as Record<string, string>)}
        >
          <option value="" disabled>
            Select treebank...
          </option>
          {filteredTreebanks.map((treebank) => (
            <option key={treebank.id} value={grewMatchPath(treebank.id, request)}>
              {treebank.id}
            </option>
          ))}
        </select>
      ) : (
        filteredTreebanks.map((treebank) => (
          <span key={treebank.id}>
            <a class="tb" target="_blank" rel="noreferrer" href={grewMatchPath(treebank.id, request)}>
              {treebank.id}
            </a>
          </span>
        ))
      )}
      <hr />
    </div>
  )
}

Request.css = `
.language-grew {
  display: block;
}
.warning-msg {
  margin: 2rem 0 0 0;
  color: #f00;
  font-size: x-large;
}
.badge {
  background-color: #6ab2b5;
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
}
.tb {
  background-color: #5d916a;
  font-size: x-small;
  margin: 5px;
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
}
`
const SudLogo: QuartzComponent = ({ fileData }) => {
  const slug = fileData.slug ?? ""
  const segments = slug.split("/").filter(Boolean)
  const rootPath = segments.slice(0, -1).map(() => "..").join("/") || "."

  return (
    <div class="sud-logo-container">
      <a href="https://surfacesyntacticud.org" aria-label="SUD Documentation">
        <img
          src={`${rootPath}/static/images/sud.svg`}
          alt="SUD"
          class="sud-logo"
        />
      </a>
    </div>
  )
}

SudLogo.css = `
.sud-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sud-logo {
  display: block;
  width: 84px;
  height: 84px;
  object-fit: contain;
}`

export const PageEditComponent = (() => PageEdit) satisfies QuartzComponentConstructor
export const StatusComponent = (() => Status) satisfies QuartzComponentConstructor
export const RequestComponent = (() => Request) satisfies QuartzComponentConstructor
export const SudLogoComponent = (() => SudLogo) satisfies QuartzComponentConstructor

export { PageEditComponent as PageEdit, RequestComponent as Request, StatusComponent as Status, SudLogoComponent as SudLogo }