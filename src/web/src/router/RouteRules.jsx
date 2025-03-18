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
    element: RouteLazyLoad(React.lazy(() => import('@/layout/Main'))),
    children: [
      {
        path: '/dashboard',
        element: RouteLazyLoad(React.lazy(() => import('@/page/dashboad/Dashboard'))),
      },
      {
        path: '/system',
        children: [
          {
            path: '/system/role',
            element: RouteLazyLoad(React.lazy(() => import('@/page/system/Role'))),
          },
          {
            path: '/system/user',
            element: RouteLazyLoad(React.lazy(() => import('@/page/system/User'))),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: RouteLazyLoad(React.lazy(() => import('@/page/login/Login'))),
  },
  {
    path: '/login/dingtalk-auth',
    element: RouteLazyLoad(React.lazy(() => import('@/page/login/DingtalkLogin'))),
  },
  {
    path: '/login/feishu-auth',
    element: RouteLazyLoad(React.lazy(() => import('@/page/login/FeishuLogin'))),
  },
  {
    path: '/',
    element: RouteLazyLoad(React.lazy(() => import('@/layout/Error'))),
    children: [
      {
        path: '/error/403',
        element: RouteLazyLoad(React.lazy(() => import('@/page/error/403'))),
      },
      {
        path: '/error/404',
        element: RouteLazyLoad(React.lazy(() => import('@/page/error/404'))),
      },
      {
        path: '/error/500',
        element: RouteLazyLoad(React.lazy(() => import('@/page/error/500'))),
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
