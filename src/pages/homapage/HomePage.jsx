import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';
import { ListProduct } from './HomePage.styled';
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
  return (
    <>
      <Header></Header>
      <ListProduct>
        {listProduct?.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            img={item.images[0].link}
            category={item.categories.name}
            name={item.name}
            price={item.price_new}
          ></Product>
        ))}
      </ListProduct>
      <PaginationBar perPage={perPage} pageSize={total}></PaginationBar>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
