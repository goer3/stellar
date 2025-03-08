import { App } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { GenerateRoutes } from './router/RouteRules';

const Route = () => {
  return (
    <App>
      <BrowserRouter>
        <GenerateRoutes />
      </BrowserRouter>
    </App>
  )
}

export default Route
