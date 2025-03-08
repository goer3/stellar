import { createRoot } from 'react-dom/client';
// antd
import { ConfigProvider } from 'antd';
// 国际化
import zhCN from 'antd/locale/zh_CN';
// 字体
import 'misans/lib/Normal/MiSans-Regular.min.css';
// 全局样式
import '@/assets/css/stellar-antd.less';
import '@/assets/css/stellar.less';
// 入口组件
import App from '@/App.jsx';

createRoot(document.getElementById('root')).render(
  <ConfigProvider 
    locale={zhCN}
    theme={{
      token: {
        fontFamily: 'MiSans, serif', // 文字字体
        fontSize: 13, // 默认字号
        borderRadius: 0, // 圆角
      },
    }}
  >
    <App />
  </ConfigProvider>
);
