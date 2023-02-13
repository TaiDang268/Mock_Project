import styled from 'styled-components';
import colors from '../../constants/colors';
import { Button } from 'antd';
import breakPoints from '../../constants/breakPoints';

export const Container = styled.div`
  width: 18%;
  margin: 2rem 1%;
  height: 24vw;
  border-radius: 1.5rem;
  background-color: #f5f5f5;

  border: 0.1rem solid ${colors.text};
  :hover {
    border: 0.1rem solid ${colors.green};
  }
  @media (${breakPoints.laptop}) {
    width: 21%;
    margin: 2rem 2%;
  }
  @media (${breakPoints.tablet}) {
    width: 27%;
    height: 23rem;
    margin: 2rem 3%;
  }
  @media (max-width: 530px) {
    width: 40%;
    margin: 2rem 5%;
    height: 23rem;
  }
  @media (max-width: 320px) {
    width: 80%;
    margin: 2rem 10%;
    height: 23rem;
  }
`;
export const ProductImg = styled.img`
  width: 70%;
  height: 50%;
  margin: auto;
  display: block;
`;
export const ProductCategory = styled.h6`
  padding: 8%;
  font-weight: 400;

  color: ${colors.text};
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (${breakPoints.laptop}) {
    padding: 0 1rem;
  }
  @media (${breakPoints.tablet}) {
  }
`;

export const ProductName = styled.h4`
  padding: 1rem;
  font-weight: 400;
  font-size: 1.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (${breakPoints.tablet}) {
    font-size: 1.3rem;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  @media (${breakPoints.laptop}) {
    padding: 0 1rem;
  }
`;

export const ProductPrice = styled.span`
  display: inline-block;
  font-weight: bold;
  color: #3bb77e;
`;
export const AddBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #def9ec;
  width: 30%;
  height: 2.2vw;
  span {
    font-size: 1.2vw;
  }
  :hover {
    background-color: #3bb77e;
    span {
      color: white;
    }
  }
  @media (${breakPoints.laptop}) {
    width: 40%;
    height: 40%;
  }
  @media (${breakPoints.tablet}) {
    width: 50%;
    height: 50%;
    span {
      font-size: 1.2rem;
    }
  }
`;
