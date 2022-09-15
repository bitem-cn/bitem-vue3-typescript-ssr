import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import express from "express"
import { createServer as createViteServer } from "vite"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()

  // 以中间件模式创建 Vite 应用
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom"
  })

  // 使用 vite 的 Connect 实例作为中间件
  app.use(vite.middlewares)

  app.use("/", async (req, res, next) => {
    const url = req.originalUrl

    try {
      // 1. 读取 index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, "index.html"),
        "utf-8"
      )

      // 2. 应用 Vite HTML 转换
      template = await vite.transformIndexHtml(url, template)

      // 3. 加载服务器入口
      const { render } = await vite.ssrLoadModule("/src/entry-server.ts")

      // 4. 渲染应用的 HTML
      const appHtml = await render(url)

      // 5. 注入渲染后的应用程序 HTML 到模板中。
      const html = template.replace("<!--ssr-outlet-->", appHtml)

      // 6. 返回渲染后的 HTML。
      res.status(200).set({ "Content-Type": "text/html" }).end(html)
    } catch (e) {
      // 捕获到错误，让 Vite 来修复堆栈
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })


  app.listen(5173, () => {
    console.log("SSR 渲染服务器启动成功 => http://localhost:5173/")
  })
}

createServer()