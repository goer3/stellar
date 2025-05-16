import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Logo } from '@/components/Image';
import { FooterComponent } from '@/components/Component';

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
        <FooterComponent />
      </Content>
    </Layout>
  );
};

export default ErrorLayout;


