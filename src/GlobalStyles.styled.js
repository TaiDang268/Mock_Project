import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0 ;
        padding: 0;
        box-sizing:border-box;
        a{
            text-decoration:none;
        }
    }
    html{
        font-size:62.5%;
    }
    body {
    font-size: 1.5rem; 
    color: black;
   
  }
`;
export const Container = styled.div`
    max-width: 1440px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
`;
