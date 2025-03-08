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
// 路由入口组件
import Route from '@/route.jsx';

createRoot(document.getElementById('root')).render(
  <ConfigProvider 
    locale={zhCN}
    theme={{
      token: {
        colorLink: '#003399', // 链接颜色
        colorPrimary: '#001529', // 主色调
        colorPrimaryHover: '#001529', // 主色调 hover
        fontFamily: 'MiSans, serif', // 文字字体
        fontSize: 13, // 默认字号
        borderRadius: 0, // 圆角
        controlHeight: 28, // 控件高度
      },
      components: {
        // 按钮组件
        Button: {
          defaultShadow: 'none', // 默认阴影
          dangerShadow: 'none', // 危险阴影
          primaryShadow: 'none', // 主色调阴影
        },
      }
    }}
  >
    <Route />
  </ConfigProvider>
);
