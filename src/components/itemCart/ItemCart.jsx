import { DeleteOutlined } from '@ant-design/icons';
import images from '../../assets/images';
import {
  Container,
  ProductImg,
  ProductName,
  ProductPrice,
  ProductQuantity,
  ProductRemove,
  ProductTotal,
  Wrapper,
} from './ItemCart.styled';

const ItemCart = (item) => {
  //   const Item = [
  //     {
  //       id: 1,
  //       img: '1',
  //       name: 'ca phe',
  //       price: '100',
  //       quantity: '1',
  //     },
  //   ];
  return (
    <>
      <Container>
        <Wrapper>
          <ProductImg src={images.Login}></ProductImg>
          <ProductName>{item.name}</ProductName>
        </Wrapper>
        <ProductPrice>{item.price}</ProductPrice>
        <ProductQuantity>
          <input type="text" />
        </ProductQuantity>
        <ProductTotal>{item.price}</ProductTotal>
        <ProductRemove>
          <DeleteOutlined />
        </ProductRemove>
      </Container>
    </>
  );
};
export default ItemCart;
