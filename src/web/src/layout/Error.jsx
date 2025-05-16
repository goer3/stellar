import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Logo } from '@/components/Image';

const { Header, Content } = Layout;

const ErrorLayout = () => {
  return (
    <Layout className="stellar-login">
      <Header className="stellar-login-header">
        <div className="stellar-login-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className='stellar-login-menu'>
          <a href="" target='_blank'>
            <GithubOutlined />
          </a>
        </div>
      </Header>
      <Content className="stellar-login-content">
        <div className="stellar-error">
          <Outlet />
        </div>
        <div className="stellar-login-footer">
          <b><GithubOutlined /> STELLAR </b>© 2025 EZOPS.CN. <a href="https://github.com/goer3/stellar" target='_blank'>立即查看项目开发进度.</a>
        </div>
      </Content>
    </Layout>
  );
};

export default ErrorLayout;


