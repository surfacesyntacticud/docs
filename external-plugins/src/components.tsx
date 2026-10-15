import type { VNode } from "preact"

type PageFileData = {
  relativePath?: string
  slug?: string
  frontmatter?: {
    status?: unknown
  }
}

type QuartzComponentProps = {
  fileData: PageFileData
}

type QuartzComponent = ((props: QuartzComponentProps) => VNode | null) & {
  css?: string
}

type QuartzComponentConstructor = (_opts?: undefined) => QuartzComponent

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

export const PageEditComponent = (() => PageEdit) satisfies QuartzComponentConstructor
export const StatusComponent = (() => Status) satisfies QuartzComponentConstructor

export { PageEditComponent as PageEdit, StatusComponent as Status }