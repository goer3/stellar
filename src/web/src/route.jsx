import { App } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { GenerateRoutes } from '@/router/RouteRules';

const Route = () => {
  return (
    <App>
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <GenerateRoutes />
      </BrowserRouter>
    </App>
  )
}

export default Route
