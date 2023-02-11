import { AddBtn, Container, ProductCategory, ProductImg, ProductName, ProductPrice, Wrapper } from './Product.styled';
import { useDispatch } from 'react-redux';
import { AddCart } from '../../redux/CartSlice';
const Product = (dataItem) => {
  const dispatch = useDispatch();
  console.log(dataItem);
  return (
    <Container>
      <ProductImg src={dataItem.data.images[0].link}></ProductImg>
      <ProductCategory>Thời trang mùa đông</ProductCategory>
      <ProductName>{dataItem.data.name}</ProductName>
      <Wrapper>
        <ProductPrice>{dataItem.data.price_new} $</ProductPrice>
        <AddBtn onClick={() => dispatch(AddCart(dataItem.data))}>
          <span>Add</span>
        </AddBtn>
      </Wrapper>
    </Container>
  );
};
export default Product;
