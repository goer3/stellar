import { Suspense } from 'react';

// 惰性加载，避免路由加载的时候所有页面都会被加载
const RouteLazyLoad = (Component) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

export default RouteLazyLoad;
