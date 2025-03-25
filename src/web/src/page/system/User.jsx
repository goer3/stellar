import { Helmet } from 'react-helmet';
import { TitleSuffix } from '@/components/Text';

// 页面基础配置
const config = {
  title: '用户管理',
  headerTitle: '用户管理 / USER MANAGEMENT.',
};

// 页面顶部说明
const PageDescription = () => {
  return (
    <div>
    </div>
  );
};

const User = () => {
  return (
    <>
      <Helmet>
        <title>{config.title + TitleSuffix}</title>
      </Helmet>
      {/* 页面头部介绍 */}
      <div className="stellar-page-header">
        <div className="stellar-page-title">{config.headerTitle}</div>
        <div className="stellar-page-desc">
          <PageDescription />
        </div>
      </div>
    </>
  );
};

export default User;
