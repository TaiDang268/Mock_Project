import {
  CartIcon,
  CartItem,
  CompareIcon,
  CompareItem,
  Container,
  DropDown,
  HeaderBetween,
  HeaderBottom,
  HeaderDropDown,
  HeaderIcon,
  HeaderNavigation,
  HeaderTop,
  LoginIcon,
  LoginItem,
  LogoShop,
  SearchForm,
  TextLeft,
  TextRight,
  WishListIcon,
  WishListItem,
} from './Header.styled';
import images from '../../assets/images';
import { SettingOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  function getItem(label, key, icon, children, type) {
    return {
      key,
      // icon,
      children,
      label,
      type,
    };
  }
  const itemsDropDown = [
    getItem('All Category', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];
  const itemsNavigation = [
    {
      key: '4',
      label: `Home`,
      // children: `Content of Tab Pane 1`,
    },
    {
      key: '5',
      label: `About`,
    },
    {
      key: '6',
      label: `Shop`,
    },
    {
      key: '7',
      label: `Vendors`,
    },
    {
      key: '8',
      label: `Mega Menu`,
    },
    {
      key: '9',
      label: `Blogs`,
    },
    {
      key: '10',
      label: `Contact`,
    },
  ];
  return (
    <Container>
      <HeaderTop>
        <TextLeft>
          <a href="/">About Us</a>
          <a href="/"> My Acount</a>
          <a href="/">Wish List</a>
          <a href="/">OrderTracking</a>
        </TextLeft>
        <TextRight>
          <p>Need help? Call Us:+ 1800 900</p>
        </TextRight>
      </HeaderTop>
      <HeaderBetween>
        <LogoShop src={images.LogoShop}></LogoShop>
        <SearchForm placeholder="Search..."></SearchForm>
        <HeaderIcon>
          <CompareItem>
            <CompareIcon></CompareIcon>
            <a href="/">Compare</a>
          </CompareItem>
          <WishListItem>
            <WishListIcon></WishListIcon>
            <a href="/">Wishlist</a>
          </WishListItem>
          <CartItem>
            <CartIcon></CartIcon>
            <Link to="/cart">Cart</Link>
          </CartItem>

          {token ? (
            <LoginItem>
              <LoginIcon></LoginIcon>
              <a href="/profile">{username}</a>
            </LoginItem>
          ) : (
            <LoginItem>
              <LoginIcon></LoginIcon>
              <a href="/login">Login</a>
            </LoginItem>
          )}
        </HeaderIcon>
      </HeaderBetween>
      <HeaderBottom>
        <HeaderDropDown>
          <DropDown
            forceSubMenuRender
            mode="horizontal"
            style={{
              width: 256,
            }}
            items={itemsDropDown}
          ></DropDown>
        </HeaderDropDown>
        <HeaderNavigation>
          <Tabs defaultActiveKey="1" items={itemsNavigation} />
        </HeaderNavigation>
      </HeaderBottom>
    </Container>
  );
};
export default Header;
