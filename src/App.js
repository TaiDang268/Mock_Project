import './App.css';
import router from './Routers';

import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3bb77e',
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
