/**
 * Author:刘敏
 * Date:2022-09-15
 * Description:客户端入口文件
 */
import { createWebHistory } from 'vue-router'

import createApp from './main'
import createRouter from "./router"

const app = createApp()
const router = createRouter(createWebHistory())

app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})