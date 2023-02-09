import {
  CartIcon,
  CartItem,
  CompareIcon,
  CompareItem,
  Container,
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
import { CloseOutlined, DownOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import { Tabs } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import request from '../../API';
import { showProfile } from '../../redux/ProfileSlice';
import axios from 'axios';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [clickHidenBar, setClickHidenBar] = useState(true);
  const handleClickHidenBar = () => {
    setClickHidenBar(!clickHidenBar);
    console.log('hi');
  };
  const onTabClick = (key) => {
    switch (key) {
      case '4':
        navigate('/homepage');
        break;
      default:
    }
  };

  const user = useSelector((state) => state.auth.login.currentUser);
  const token = user?.authorisation.token;
  const handleAllCategory = async () => {
    await request
      .get('admin/list-category')
      .then((response) => {
        const data = response.data.data.data;
        const arrCategory = data.reduce((list, item) => list.concat(item.name), []);
        console.log(arrCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowProfile = async () => {
    await request
      .get('profile-user', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        dispatch(showProfile(response.data.profile));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onSearch = async (value) => {
    await axios
      .get(`http://viet.fresher.ameladev.click/api/admin/search/${value}`)
      .then((response) => {
        console.log(response);
        navigate('/homepage');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  const itemsNavigation = [
    {
      key: '4',
      label: `Home`,
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
        <SearchForm placeholder="Search..." onSearch={onSearch}></SearchForm>
        <div className="icon-wrap-all-mobile" onClick={handleClickHidenBar}>
          {clickHidenBar ? (
            <UnorderedListOutlined style={{ fontSize: '40px', color: '#3bb77e' }} />
          ) : (
            <CloseOutlined style={{ fontSize: '40px', color: '#3bb77e' }} />
          )}
        </div>
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
          {user ? (
            <LoginItem>
              <LoginIcon></LoginIcon>
              <Link to="/profile" onClick={handleShowProfile}>
                <span className="logined-name">{user.user.name}</span>
              </Link>
            </LoginItem>
          ) : (
            <LoginItem>
              <LoginIcon></LoginIcon>
              <Link to="/login">Login</Link>
            </LoginItem>
          )}
        </HeaderIcon>
      </HeaderBetween>
      <HeaderBottom>
        <HeaderDropDown>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <Space onClick={handleAllCategory}>
              All Category
              <DownOutlined />
            </Space>
          </Dropdown>
        </HeaderDropDown>
        <HeaderNavigation>
          <Tabs defaultActiveKey="4" items={itemsNavigation} onTabClick={onTabClick} />
        </HeaderNavigation>
      </HeaderBottom>
    </Container>
  );
};
export default Header;
