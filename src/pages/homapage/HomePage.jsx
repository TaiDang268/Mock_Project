import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';
import { ListProduct, WrapperListProduct } from './HomePage.styled';
import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../redux/apiRequest';
import PaginationBar from '../../components/pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
const HomePage = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const productQuery = useQuery({ queryKey: ['product', params], queryFn: () => getProduct(params) });
  const listProduct = productQuery?.data?.data?.data;
  const perPage = parseInt(productQuery?.data?.data?.per_page);
  const total = parseInt(productQuery?.data?.data?.total);
  console.log(listProduct);
  return (
    <>
      <Header></Header>
      <WrapperListProduct>
        <ListProduct>
          {listProduct?.map((item) => (
            <Product key={item.id} data={item}></Product>
          ))}
        </ListProduct>
      </WrapperListProduct>
      <PaginationBar perPage={perPage} pageSize={total}></PaginationBar>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
