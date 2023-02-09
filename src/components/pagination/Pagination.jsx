import { Pagination } from 'antd';
import { Container } from './Pagination.styled';
import { useState } from 'react';
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
const PaginationBar = ({ perPage, pageSize }) => {
  const [current, setCurrent] = useState();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const onChange = (values) => {
    setCurrent(values);
    navigate({ pathname, search: createSearchParams({ ...params, page: values.toString() }).toString() });
  };
  return (
    <Container>
      <Pagination
        defaultCurrent={1}
        total={pageSize}
        pageSize={perPage}
        current={current}
        onChange={onChange}
      ></Pagination>
    </Container>
  );
};
export default PaginationBar;
