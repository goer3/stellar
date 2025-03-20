import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Logo } from '@/components/Image';

const { Header, Content } = Layout;

const Login = () => {
  const navigate = useNavigate();

  // 请求后台获取登录方式，支持以下几种：
  // 1. 账号（用户名/工号/邮箱/手机号）密码登录
  // 2. 钉钉登录，使用钉钉SSO登录页面，需要从后台拿到登录的跳转页面信息
  // 3. 飞书登录，使用飞书SSO登录页面
  const thirdPartyLoginMethods = {
    dingtalk: {
      name: '钉钉登录',
      url: 'https://login.dingtalk.com/login/index.htm',
      enable: false
    },
    feishu: {
      name: '飞书登录',
      url: 'https://login.feishu.cn/login/index.htm',
      enable: false
    }
  };

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
        <div className="stellar-login-footer">
          <b>👻 STELLAR </b>© 2025 EZOPS.CN. <a href="" target='_blank'><GithubOutlined /> 立即查看项目开发进度.</a>
        </div>
      </Content>
    </Layout>
  );
};

export default Login;
