import styled from 'styled-components';
import colors from '../../constants/colors';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;
export const LoginImg = styled.img`
  width: 40rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LoginForm = styled.div`
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  .login-form-forgot {
    color: ${colors.text};
  }
  .login-form-forgot:hover {
    color: #d4c809;
  }
  .login-form-button {
    background-color: #4d6852;
  }
  .login-form-button:hover {
    background-color: ${colors.green};
  }
  .site-form-item-icon {
    outline: black;
  }
`;
export const LoginText = styled.div`
  span {
    font-weight: bold;
    font-size: 4rem;
  }
`;
export const RegisterText = styled.div`
  display: flex;
  padding-bottom: 2rem;
  p {
    padding-right: 0.5rem;
    color: ${colors.text};
  }
  a {
    color: ${colors.green};
  }
`;
