import styled from 'styled-components';
import colors from '../../constants/colors';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;
export const Wrapper = styled.div`
  h1 {
    padding: 0.5 rem;
  }
  p {
    padding: 1rem 0;
  }
  a {
    color: ${colors.green};
  }
`;
