import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader.js"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
