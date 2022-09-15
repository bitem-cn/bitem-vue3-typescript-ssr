import { renderToString } from 'vue/server-renderer'

import { createApp } from './main'

const render = async (url: string) => {
  const app = createApp()

  const html = await renderToString(app)
  return html
}
export {
  render
}