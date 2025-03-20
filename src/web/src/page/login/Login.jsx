import { useNavigate } from 'react-router-dom';

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
      enable: false,
    },
    feishu: {
      name: '飞书登录',
      url: 'https://login.feishu.cn/login/index.htm',
      enable: false,
    },
  };

  return (
    <div>
      <h1>登录</h1>
    </div>
  );
};

export default Login;
