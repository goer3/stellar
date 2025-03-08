import { Outlet } from 'react-router-dom';

const ErrorLayout = () => {
  return (
    <div>
      <h1>ERROR</h1>
      <Outlet />
    </div>
  );
};

export default ErrorLayout;


