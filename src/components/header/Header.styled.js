import styled from 'styled-components';
import { Input, Menu } from 'antd';
import colors from '../../constants/colors';
import { HeartOutlined, ShoppingCartOutlined, UserOutlined, TransactionOutlined } from '@ant-design/icons';
const { Search } = Input;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderTop = styled.div`
  height: 6rem;
  border-bottom: 1px solid #ececec;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TextLeft = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-weight: 400;
  color: #7e7e7e;

  a {
    padding: 0 0 0 1.5rem;
    color: #7e7e7e;
  }
  a:hover {
    color: ${colors.green};
  }
`;
export const TextRight = styled.div`
  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: #7e7e7e;
    padding-right: 1.5rem;
  }
`;
export const HeaderBetween = styled.div`
  height: 12rem;
  border-bottom: 1px solid #ececec;
  display: flex;
  flex-direction: row;
  .icon-wrap-all-mobile {
    display: none;
  }
  @media (max-width: 1024px) {
    .icon-wrap-all-mobile {
      display: block;
      margin: auto;
    }
  }
`;
export const LogoShop = styled.img`
  width: 18rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const SearchForm = styled(Search)`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10rem;
  @media (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
    padding: 0;
  }
  .ant-input {
    height: 5rem;
    border: 1px solid ${colors.green} !important;
  }
  .ant-btn {
    height: 5rem;
    width: 5rem;
    border: 1px solid ${colors.green} !important;
  }
  .ant-input-search-button {
    color: ${colors.green} !important;
  }
`;

export const HeaderIcon = styled.div`
  width: 40%;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 1.7rem;
  a {
    color: black;
  }
  a:hover {
    color: ${colors.green};
  }

  @media (max-width: 1024px) {
    display: ${((props) => props.isClicked) ? 'flex' : 'none'};
    padding-left: 1rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 15rem;
    right: -17rem;
    width: 30rem;
    background-color: gray;
    border-radius: 1rem;
  }
`;

export const CompareItem = styled.div`
  padding-right: 2rem;
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;
export const CompareIcon = styled(TransactionOutlined)`
  padding-right: 1rem;
`;
export const WishListItem = styled.div`
  padding-right: 2rem;
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;
export const WishListIcon = styled(HeartOutlined)`
  padding-right: 1rem;
`;

export const CartItem = styled.div`
  padding-right: 2rem;
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;
export const CartIcon = styled(ShoppingCartOutlined)`
  padding-right: 1rem;
`;

export const LoginItem = styled.div`
  .logined-name {
    color: ${colors.green};
  }
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;
export const LoginIcon = styled(UserOutlined)`
  padding: 1rem;
  @media (max-width: 768px);
   {
    padding: 0;
    padding-right: 1rem;
  }
`;

export const HeaderBottom = styled.div`
  margin: 0 5%;
  height: 10rem;
  border-bottom: 1px solid #ececec;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
  }
`;
export const HeaderDropDown = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-space {
    margin 0 auto;
    padding-left:2rem;
    display: flex:
    justify-content:center;
    border-radius: 1rem;
    width: 14rem;
    height: 5rem;
    background-color: ${colors.green};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DropDown = styled(Menu)`
  border-radius: 0.5rem;
  background-color: #3bb77e;
`;
export const HeaderNavigation = styled.div`
  width: 80%;
  padding-left: 1rem;
  margin: auto 0;
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${colors.green};
    font-weight: 400;
  }
  .ant-tabs-tab:hover {
    color: ${colors.green} !important;
  }
  @media (max-width: 768px) {
    padding: 0;
    margin: 0 auto;
  }
`;
