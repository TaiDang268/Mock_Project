import styled from 'styled-components';
import colors from '../../constants/colors';
export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  border-top: 1px solid #ececec;
`;
export const FooterColumnStart = styled.div`
  width: 20%;
  @media (max-width: 832px) {
    display: none;
  }
  @media (max-width: 510px) {
    display: block;
    width: 45%;
  }
`;
export const LogoShop = styled.img`
  width: 18rem;
  height: 10rem;
  justify-content: center;
  align-items: center;
`;
export const WrapperText = styled.div`
  padding-left: 2rem;
  ul {
    list-style: none;
  }
  li {
    margin-top: 1rem;
  }
`;
export const Title = styled.h2`
  font-weight: 500;
  padding-bottom: 1rem;
`;
export const WraperText = styled.a`
  padding-top: 1rem;
  :hover {
    transition-duration: 0.2s;
    color: ${colors.green};
  }
`;

export const FooterColumnCenter = styled.div`
  width: 15%;
  padding-left: 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 832px) {
    width: 25%;
  }
  @media (max-width: 510px) {
    display: none;
  }
`;

export const FooterColumnEnd = styled.div`
  width: 20%;

  padding: 2rem 2rem 0 2rem;
  p {
    padding: 1rem 0;
  }
  @media (max-width: 832px) {
    display: none;
  }
  @media (max-width: 510px) {
    display: block;
    width: 45%;
  }
`;
export const AppStoreImg = styled.img`
  width: 40%;
  :hover {
    cursor: pointer;
  }
`;
export const CHPlayImg = styled.img`
  width: 40%;
  :hover {
    cursor: pointer;
  }
`;
export const GateWayImg = styled.img`
  width: 90%;
`;
