import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { Error403Img } from '@/components/Image';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Error403 = () => {
  const navigate = useNavigate();

  return <>
    <div className="stellar-error-403">
      <div className="stellar-error-title">403</div>
      <div className="stellar-error-img">
        <img src={Error403Img} alt="403" />
      </div>
      <div className="stellar-error-back">
        <Button type="primary" icon={<ArrowLeftOutlined />} onClick={() => navigate('/')}>返回首页</Button>
      </div>
    </div>
  </>;
};

export default Error403;


