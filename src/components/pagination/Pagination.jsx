import { Pagination } from 'antd';
import { Container } from './Pagination.styled';
const PaginationBar = () => {
  return (
    <Container>
      <Pagination defaultCurrent={1} total={50}></Pagination>
    </Container>
  );
};
export default PaginationBar;
