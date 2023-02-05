import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage';
import HomePage from './pages/homaPage/HomePage';
import RegisterPage from './pages/registerPage/RegisterPage';
import Cart from './pages/cartPage/Cart';
import ProfilePage from './pages/profilePage/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/homepage',
    element: <HomePage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);
export default router;
