import { Button } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 2rem;
  span {
    margin: auto 0;
  }
`;

export const ButonCustom = styled(Button)`
  margin: 0.5rem;
`;
export const FilterPriceDescAsc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

export const FilterTime = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SortAZ = styled.div`
  display: flex;
  flex-direction: column;
`;
