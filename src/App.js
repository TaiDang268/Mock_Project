import './App.css';
import HomePage from './pages/homapage/HomePage';
import Login from './pages/login/LoginPage';

import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3bb77e',
        },
      }}
    >
      
      <HomePage></HomePage>;
    </ConfigProvider>
  );
}

export default App;
