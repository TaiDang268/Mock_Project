import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';
import { ListProduct } from './HomePage.styled';
import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../redux/apiRequest';
import PaginationBar from '../../components/pagination/Pagination';
const HomePage = () => {
  const productQuery = useQuery({ queryKey: ['product'], queryFn: () => getProduct() });
  const listProduct = productQuery?.data?.data?.data;
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
      <PaginationBar></PaginationBar>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
