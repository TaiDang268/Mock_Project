import images from '../../assets/images';
import { AddBtn, Container, ProductCategory, ProductImg, ProductName, ProductPrice, Wrapper } from './Product.styled';
import { useDispatch } from 'react-redux';
import { AddCart } from '../../redux/CartSlice';
const Product = (item) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <ProductImg src={images.Login}></ProductImg>
      <ProductCategory>{item.category}</ProductCategory>
      <ProductName>{item.name}</ProductName>
      <Wrapper>
        <ProductPrice>{item.price}</ProductPrice>
        <AddBtn onClick={() => dispatch(AddCart(item))}>
          <span>Add</span>
        </AddBtn>
      </Wrapper>
    </Container>
  );
};
export default Product;
