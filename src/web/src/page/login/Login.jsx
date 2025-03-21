import { useNavigate } from 'react-router-dom';
import { Layout, Divider, Form, Input, Button, Checkbox } from 'antd';
import { GithubOutlined, UserOutlined, KeyOutlined, InsuranceOutlined } from '@ant-design/icons';
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

  // 登录处理
  const loginHandler = (values) => {
    console.log(values);
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
        <div className="stellar-login-box">
          <div className="stellar-login-title">登录 / Sign in</div>
          <Divider className="stellar-login-welcome">欢迎回来</Divider>
          <div className="stellar-login-form">
            <Form
              name="login"
              onFinish={loginHandler}>
              <Form.Item
                name="account"
                rules={[
                  {
                    min: 4,
                    max: 30,
                    message: '账户长度范围为 4-30 个字符'
                  },
                  {
                    required: true,
                    message: '请输入您的工号 / 手机号 / Email'
                  }
                ]}>
                <Input autoComplete="off" prefix={<UserOutlined />} placeholder="工号 / 手机号 / Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    min: 8,
                    max: 30,
                    message: '密码长度范围为 8-30 个字符'
                  },
                  {
                    required: true,
                    message: '请输入您的密码'
                  }
                ]}>
                <Input.Password autoComplete="off" prefix={<KeyOutlined />} type="password" placeholder="密码" />
              </Form.Item>
              {/*手机令牌方式*/}
              <Form.Item
                name="code"
                rules={[
                  {
                    min: 4,
                    max: 4,
                    message: '手机令牌验证码应该是 4 个数字'
                  },
                  {
                    required: true,
                    message: '请输入您的验证码'
                  }
                ]}
                className='stellar-login-lastitem'>
                <Input autoComplete="off" prefix={<InsuranceOutlined />} placeholder="手机令牌验证码" />
              </Form.Item>
              <Form.Item className='stellar-login-forget'>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox/>
                </Form.Item>
                <span style={{marginLeft: '5px'}}>记住密码 | 忘记密码？<a href="">找回密码</a></span>
              </Form.Item>
              <Form.Item style={{ margin: 0 }}>
                <Button block type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
              <Divider>或者使用其它方式直接登录</Divider>
              <Button block className='stellar-login-dingtalk'>切换钉钉登录</Button>
              <Button block className='stellar-login-feishu'>切换飞书登录</Button>
            </Form>
          </div>
        </div>
        <div className="stellar-login-footer">
          <b>👻 STELLAR </b>© 2025 EZOPS.CN. <a href="" target='_blank'><GithubOutlined /> 立即查看项目开发进度.</a>
        </div>
      </Content>
    </Layout>
  );
};

export default Login;
