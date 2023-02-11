import { Radio } from 'antd';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ItemCart from '../../components/itemCart/ItemCart';
import {
  CartTiltes,
  ListItemCart,
  PaymentBtn,
  PaymentContainer,
  PaymentMethod,
  SubTotal,
  Wrapper,
  WrapperBtn,
} from './Cart.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { order } from '../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [valueMethodPayment, setValueMethodPayment] = useState(1);
  const user = useSelector((state) => state.auth.login.currentUser);
  const token = user?.authorisation.token;
  const user_id = user.user.id;
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const onChangeMethodPayment = (e) => {
    setValueMethodPayment(e.target.value);
  };
  const paymentMethod = valueMethodPayment;
  const subTotal = cart.reduce((total, item) => total + item.quantity * parseInt(item.price_new), 0);
  const handleClickPaymentBtn = () => {
    let listProductOrder = [];
    for (let item of cart) {
      let params = { product_id: item.id, quantity: item.quantity };
      listProductOrder = [...listProductOrder, params];
    }
    const formData = {
      user_id: user_id,
      subtotal: subTotal,
      payment_method: paymentMethod,
      obj: listProductOrder,
    };
    order(formData, navigate);
  };
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
      <PaymentContainer>
        <SubTotal>
          <span className="subtotal">Subtotal : </span>
          <span className="money">{subTotal} $</span>
        </SubTotal>
        <PaymentMethod>
          <span>Payment Method</span>
          <Radio.Group onChange={onChangeMethodPayment} value={valueMethodPayment}>
            <Radio value={1}>Credit Card</Radio>
            <Radio value={0}>Cash</Radio>
          </Radio.Group>
        </PaymentMethod>
        <WrapperBtn>
          <PaymentBtn onClick={handleClickPaymentBtn}>
            <span>Payment</span>
          </PaymentBtn>
        </WrapperBtn>
      </PaymentContainer>
      <Footer></Footer>
    </>
  );
};
export default Cart;
