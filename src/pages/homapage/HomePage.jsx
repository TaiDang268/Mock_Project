import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';
import { ListProduct } from './HomePage.styled';
import { useSelector } from 'react-redux';
const HomePage = () => {
  const fake_product = [
    {
      id: 1,
      img: '1',
      category: 'car',
      name: 'Caphe',
      price: '1$',
    },
    {
      id: 2,
      img: '2',
      category: 'car',
      name: 'sdfgdfg',
      price: '2$',
    },
    {
      id: 3,
      img: '3',
      category: 'car',
      name: 'sdfgdfg',
      price: '3$',
    },
    {
      id: 4,
      img: '4',
      category: 'car',
      name: 'sdfgdfg',
      price: '4$',
    },
    {
      id: 5,
      img: '5',
      category: 'car',
      name: 'sdfgdfg',
      price: '5$',
    },
    {
      id: 6,
      img: '6',
      category: 'car',
      name: 'sdfgdfg',
      price: '6$',
    },
    {
      id: 7,
      img: '7',
      category: 'car',
      name: 'sdfgdfg',
      price: '7$',
    },
    {
      id: 8,
      img: '8',
      category: 'car',
      name: 'sdfgdfg',
      price: '8$',
    },
  ];
  // const { cart } = useSelector((item) => item.cart);
  const state = useSelector((item) => item.cart);
  console.log(state);
  return (
    <>
      <Header></Header>
      <ListProduct>
        {fake_product.map((item) => (
          <Product key={item.id} img={item.img} category={item.category} name={item.name} price={item.price}></Product>
        ))}
      </ListProduct>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
