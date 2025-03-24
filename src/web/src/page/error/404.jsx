import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Error404Img } from '@/components/Image';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Error404 = () => {
  const navigate = useNavigate();

  return <>
    <div className="stellar-error-404">
      <div className="stellar-error-title">404</div>
      <div className="stellar-error-img">
        <img src={Error404Img} alt="404" />
      </div>
      <div className="stellar-error-back">
        <Button type="primary" icon={<ArrowLeftOutlined />} onClick={() => navigate('/')}>返回首页</Button>
      </div>
    </div>
  </>;
};

export default Error404;


