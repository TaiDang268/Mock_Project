import styled from 'styled-components';
import colors from '../../constants/colors';
import { Button } from 'antd';
import breakPoints from '../../constants/breakPoints';
export const Wrapper = styled.div`
  width: 100%;

  margin: 2rem 0;
`;
export const CartTiltes = styled.div`
  width: 80%;
  background-color: #ececec;
  border-radius: 2rem;
  margin: 0 auto;
  display: flex;
  padding: 1rem;
  span {
    font-weight: 400;
    font-size: 1.8rem;
  }

  .product {
    width: 35%;
  }
  .price {
    width: 15%;
  }
  .quantity {
    width: 20%;
  }
  .total {
    width: 15%;
    padding-left: 2rem;
  }
  .remove {
    width: 10%;
  }
  @media (${breakPoints.tablet}) {
    width: 95%;
    span {
      font-size: 1.6rem;
    }
    .product {
      width: 50%;
    }
    .price {
      width: 15%;
    }
    .quantity {
      width: 25%;
    }
    .total {
      display: none;
    }
    .remove {
      width: 10%;
    }
  }
  @media (max-width: 543px) {
    display: none;
  }
`;
export const ListItemCart = styled.div`
  width: 80%;
  margin: 2rem auto;
  @media (${breakPoints.tablet}) {
    width: 95%;
  }
`;

export const PaymentContainer = styled.div`
  width: 40rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  border: 0.05rem solid #f3e0e0;
  margin-bottom: 4rem;
  @media (max-width: 438px) {
    width: 90%;
  }
`;
export const SubTotal = styled.div`
  padding 1rem 2rem;
  display: flex;
  align-items: center;
  .subtotal{
    font-weight:500;
    color:gray;
    padding-right:2rem;
  }
  .money{
    font-size:2.5rem;
     font-weight:700;
    color:${colors.green};
  }
 
`;
export const WrapperBtn = styled.div`
  margin: 1rem 70%;
  @media (max-width: 440px) {
    margin: 1rem 40%;
  }
`;
export const PaymentMethod = styled.div`
  span {
    margin-left: 2rem;
    color: ${colors.text};
  }
`;
export const PaymentBtn = styled(Button)`
  background-color: ${colors.green};
  color: white;
  span {
    color: white;
    font-weight: 500;
  }
`;
