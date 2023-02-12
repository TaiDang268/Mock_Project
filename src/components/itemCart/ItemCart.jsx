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
          <ProductImg src={item.item.images[0].link}></ProductImg>
          <ProductName>{item.item.name}</ProductName>
        </Wrapper>
        <ProductPrice>{item.item.price_new} $</ProductPrice>
        <ProductQuantity>
          <div className="cartItem-incrDec">
            <button className="increase" onClick={() => dispatch(decrementQuantity(item.item.id))}>
              -
            </button>
            <span>{item.item.quantity}</span>
            <button className="decrease" onClick={() => dispatch(incrementQuantity(item.item.id))}>
              +
            </button>
          </div>
        </ProductQuantity>
        <ProductTotal>{item.item.price_new * item.item.quantity} $</ProductTotal>
        <ProductRemove>
          <DeleteOutlined style={{ color: 'red' }} onClick={() => handleDeteleItem(item.item.id)} />
        </ProductRemove>
      </Container>
    </>
  );
};
export default ItemCart;
