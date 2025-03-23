import { Suspense } from 'react';
import { Spin } from 'antd';

// 路由加载动画
const RouteLoading = () => {
  return (
    <div className="stellar-loading">
      <Spin size="large" />
    </div>
  );
};

// 惰性加载，避免路由加载的时候所有页面都会被加载
const RouteLazyLoad = (Component) => (
  <Suspense fallback={<RouteLoading />}>
    <Component />
  </Suspense>
);

export default RouteLazyLoad;
