import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 全局样式
import '@/assets/css/stellar-antd.less'
import '@/assets/css/stellar.less'

// 组件
import App from '@/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
