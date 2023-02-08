import { DeleteOutlined } from '@ant-design/icons';
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
import { useDispatch } from 'react-redux';
import { decrementQuantity, deleteCart, incrementQuantity } from '../../redux/CartSlice';

const ItemCart = (item) => {
  const dispatch = useDispatch();
  const handleDeteleItem = (id) => {
    dispatch(deleteCart(id));
  };
  return (
    <>
      <Container>
        <Wrapper>
          <ProductImg src={item.item.img}></ProductImg>
          <ProductName>{item.item.name}</ProductName>
        </Wrapper>
        <ProductPrice>{item.item.price} $</ProductPrice>
        <ProductQuantity>
          <div className="cartItem-incrDec">
            <button onClick={() => dispatch(decrementQuantity(item.item.id))}>-</button>
            <span>{item.item.quantity}</span>
            <button onClick={() => dispatch(incrementQuantity(item.item.id))}>+</button>
          </div>
        </ProductQuantity>
        <ProductTotal>{item.item.price * item.item.quantity} $</ProductTotal>
        <ProductRemove>
          <DeleteOutlined onClick={() => handleDeteleItem(item.item.id)} />
        </ProductRemove>
      </Container>
    </>
  );
};
export default ItemCart;
