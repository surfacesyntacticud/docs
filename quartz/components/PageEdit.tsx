import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const PageEdit: QuartzComponent = ({ fileData }: QuartzComponentProps) => {

  if (fileData.relativePath) {
    const edit_url = `https://github.com/surfacesyntacticud/pebbles/edit/main/content/${fileData.relativePath}`
      return (
        <div style="text-align: end;">
          <a class="orange-badge" href={edit_url}>Edit this page</a>
        </div>
      )
    } else if (fileData.slug) {
      const folder = fileData.slug.split('/').slice(0,-1).join('/')
      const folder_url = `https://github.com/surfacesyntacticud/pebbles/edit/main/content/${folder}`
      return (
        <div style="text-align: end;">
          <a class="orange-badge" href={folder_url}>Create a file <code>index.md</code> here</a>
        </div>
      )
    }
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

export default (() => PageEdit) satisfies QuartzComponentConstructor
