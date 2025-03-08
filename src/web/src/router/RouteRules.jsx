import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import RouteLazyLoad from '@/router/RouteLazyLoad';

// 路由规则
export const RouteRules = [
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
  },
  {
    path: '/',
    element: RouteLazyLoad(React.lazy(() => import('../layout/main/MainLayout.jsx'))),
    children: [
      {
        path: '/dashboard',
        element: RouteLazyLoad(React.lazy(() => import('../page/dashboad/Dashboard.jsx'))),
      },
      {
        path: '/system',
        children: [
          {
            path: '/system/role',
            element: RouteLazyLoad(React.lazy(() => import('../page/system/role/Role.jsx'))),
          },
          {
            path: '/system/user',
            element: RouteLazyLoad(React.lazy(() => import('../page/system/user/User.jsx'))),
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: RouteLazyLoad(React.lazy(() => import('../layout/error/ErrorLayout.jsx'))),
    children: [
      {
        path: '/error/403',
        element: RouteLazyLoad(React.lazy(() => import('../page/error/403/403.jsx'))),
      },
      {
        path: '/error/404',
        element: RouteLazyLoad(React.lazy(() => import('../page/error/404/404.jsx'))),
      },
      {
        path: '/error/500',
        element: RouteLazyLoad(React.lazy(() => import('../page/error/500/500.jsx'))),
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/error/404" />,
  },
];

// 生成 React-Router 路由
export const GenerateRoutes = () => {
  return useRoutes(RouteRules);
};
