import './style.css'
import App from './App.vue'

import { createSSRApp } from 'vue'

export function createApp() {
  if (import.meta.env.SSR) {
    // ... 仅在服务端执行的逻辑
  }

  return createSSRApp(App)
}