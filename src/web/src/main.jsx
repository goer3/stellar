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
        colorPrimary: '#000000E0', // 主色调
        colorPrimaryHover: '#000000E0', // 主色调 hover
        colorLink: '#000000E0',
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
        Menu: {
          horizontalLineHeight: 50, // 水平菜单行高
          collapsedIconSize: 17, // 折叠菜单图标大小
          iconSize: 14, // 菜单图标大小
          iconMarginInlineEnd: 10, // 菜单图标内边距
          fontSize: 13, // 菜单字体大小
          activeBarBorderWidth: 0, // 激活条宽度
          itemBg: 'rgb(247, 248, 250)', // 菜单项背景
          itemHeight: 40, // 菜单项高度
          itemMarginInline: 0, // 菜单项内边距
          itemMarginBlock: 0, // 菜单项外边距
          itemPaddingInline: 15, // 菜单项内边距
          itemSelectedBg: 'rgb(227, 232, 240)', // 菜单项选中背景
          itemHoverBg: 'rgb(227, 232, 240)', // 菜单项 hover 背景
          itemActiveBg: 'rgb(227, 232, 240)', // 菜单项 active 背景
          dropdownWidth: 'auto', // 弹出菜单最小宽度
        }
      }
    }}
  >
    <Route />
  </ConfigProvider>
);
