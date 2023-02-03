import styled from 'styled-components';
import colors from '../../constants/colors';
import { Button } from 'antd';
export const Wrapper = styled.div`
  width: 80%;
  background-color: #ececec;
  border-radius: 2rem;

  margin: 2rem 0 2rem 2rem;
`;
export const CartTiltes = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  span {
    font-weight: 500;
  }
  .product {
    width: 40%;
  }
  .price {
    width: 15%;
  }
  .quantity {
    width: 15%;
  }
  .total {
    width: 15%;
  }
  .remove {
    width: 15%;
  }
`;
export const ListItemCart = styled.div`
  width: 80%;
  margin: 2rem 0 10rem 2rem;
`;

export const Payment = styled.div`
  width: 20%;
  margin-left: 60%;
  border-radius: 0.5rem;
  border: 0.05rem solid #f3e0e0;
  margin-bottom: 4rem;
`;
export const SubTotal = styled.div`
  padding 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .subtotal{
    font-weight:500;
    color:gray;
  }
  .money{
    font-size:2.5rem;
     font-weight:700;
    color:${colors.green};
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
