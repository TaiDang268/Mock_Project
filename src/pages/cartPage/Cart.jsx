import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ItemCart from '../../components/itemCart/ItemCart';
import { CartTiltes, ListItemCart, Payment, PaymentBtn, SubTotal, Wrapper } from './Cart.styled';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <Header></Header>
      <Wrapper>
        <CartTiltes>
          <span className="product">Product</span>
          <span className="price">Unit Price</span>
          <span className="quantity">Quantity</span>
          <span className="total">Total</span>
          <span className="remove">Remove</span>
        </CartTiltes>
      </Wrapper>
      <ListItemCart>
        {cart?.map((item, index) => (
          <ItemCart key={index} item={item}></ItemCart>
        ))}
      </ListItemCart>
      <Payment>
        <SubTotal>
          <span className="subtotal">Subtotal</span>
          <span className="money">
            {cart.reduce((total, item) => total + item.quantity * parseInt(item.price), 0)} $
          </span>
        </SubTotal>
        <PaymentBtn>
          <span>Payment</span>
        </PaymentBtn>
      </Payment>
      <Footer></Footer>
    </>
  );
};
export default Cart;
