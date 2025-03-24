import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { Error500Img } from '@/components/Image';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Error500 = () => {
  const navigate = useNavigate();

  return <>
    <div className="stellar-error-500">
      <div className="stellar-error-title">500</div>
      <div className="stellar-error-img">
        <img src={Error500Img} alt="500" />
      </div>
      <div className="stellar-error-back">
        <Button type="primary" icon={<ArrowLeftOutlined />} onClick={() => navigate('/')}>返回首页</Button>
      </div>
    </div>
  </>;
};

export default Error500;


