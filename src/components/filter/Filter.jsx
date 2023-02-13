import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ButonCustom, Container, FilterPriceDescAsc, FilterTime, SortAZ } from './Filter.styled';

const Filter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const handleDes = () => {
    navigate({ pathname, search: createSearchParams({ ...params, price: 'desc' }).toString() });
  };
  const handleAsc = () => {
    navigate({ pathname, search: createSearchParams({ ...params, price: 'asc' }).toString() });
  };
  const handleNewest = () => {
    navigate({ pathname, search: createSearchParams({ ...params, time: 'newest' }).toString() });
  };
  const handleOldest = () => {
    navigate({ pathname, search: createSearchParams({ ...params, time: 'oldest' }).toString() });
  };
  const handleAZ = () => {
    navigate({ pathname, search: createSearchParams({ ...params, sort: 'az' }).toString() });
  };
  const handleZA = () => {
    navigate({ pathname, search: createSearchParams({ ...params, sort: 'za' }).toString() });
  };
  return (
    <>
      <Container>
        <span>Filter</span>
        <FilterPriceDescAsc>
          <ButonCustom onClick={handleDes}>Descent</ButonCustom>
          <ButonCustom onClick={handleAsc}>Ascent</ButonCustom>
        </FilterPriceDescAsc>
        <FilterTime>
          <ButonCustom onClick={handleNewest}>Newest</ButonCustom>
          <ButonCustom onClick={handleOldest}>Oldest</ButonCustom>
        </FilterTime>
        <SortAZ>
          <ButonCustom onClick={handleAZ}>A-Z</ButonCustom>
          <ButonCustom onClick={handleZA}>Z-A</ButonCustom>
        </SortAZ>
      </Container>
    </>
  );
};
export default Filter;
