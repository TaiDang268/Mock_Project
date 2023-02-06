import styled from 'styled-components';
import colors from '../../constants/colors';
import { Button } from 'antd';

export const Container = styled.div`
  margin: 2rem;
  width: 15%;
  height: 30rem;
  border-radius: 1.5rem;
  background-color: #f5f5f5;

  border: 0.1rem solid ${colors.text};
  :hover {
    border: 0.1rem solid ${colors.green};
  }
`;
export const ProductImg = styled.img`
  padding: 1rem 0;
  width: 70%;
  height: 60%;
  margin: auto;
  display: block;
`;
export const ProductCategory = styled.span`
  padding: 2rem;
  color: ${colors.text};
  font-size: 1.4rem;
`;

export const ProductName = styled.h4`
  padding: 1rem 2rem;
  font-weight: 500;
  font-size: 2rem;
`;
export const Wrapper = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
  color: #3bb77e;
`;
export const AddBtn = styled(Button)`
  background-color: #def9ec;

  :hover {
    background-color: #3bb77e;
    span {
      color: white;
    }
  }
`;
