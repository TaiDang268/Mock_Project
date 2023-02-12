import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  border: 0.05rem solid #f3e0e0;
  align-items: center;
  margin: 1rem 0;
  @media (max-width: 768px) {
  }
`;
export const Wrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
export const ProductImg = styled.img`
  width: 8rem;
  height: 8rem;
`;
export const ProductName = styled.div`
  padding-left: 1rem;
  font-weight: 400;
  font-size: 1.6rem;
  @media (max-width: 768px) {
    font-size: 2.2vw;
  }
  @media (max-width: 562px) {
    font-size: 1.4rem;
  }
`;
export const ProductPrice = styled.div`
  width: 15%;
  font-size: 1.8rem;
  font-weight: 700;
  color: #7e7e7e;
`;
export const ProductQuantity = styled.div`
  width: 25%;
  .cartItem-incrDec {
    display: flex;
    align-items: center;
  }
  button {
    margin: 1rem;
    width: 2.2rem;
    height: 2.2rem;
  }
  span {
    font-size: 1.8rem;
    font-weight: 700;
    color: #7e7e7e;
  }
  @media (max-width: 768px) {
    button {
      margin: 0.5rem;
      width: 1.7rem;
      height: 1.7rem;
    }
  }
`;
export const ProductTotal = styled.div`
  width: 15%;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.green};
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ProductRemove = styled.div`
  width: 15%;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 10%;
  }
`;
