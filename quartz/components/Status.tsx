import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Status: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const status : string | unknown = fileData.frontmatter?.status

    if (typeof status === "string") {
      return (
        <div>
          <a class="draft_badge">{status}</a>
        </div>
      )
    }
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

export default (() => Status) satisfies QuartzComponentConstructor
