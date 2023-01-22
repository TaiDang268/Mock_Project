import images from '../../assets/images';
import {
  AppStoreImg,
  CHPlayImg,
  Container,
  FooterColumnCenter,
  FooterColumnEnd,
  FooterColumnStart,
  GateWayImg,
  LogoShop,
  Title,
  WraperText,
  WrapperText,
} from './Footer.styled';

const Footer = () => {
  const arrCompany = ['About Us', 'Delivery Information', 'Contact Us', 'Support Center', 'Careers', 'Privacy Policy'];
  const arrAccount = ['Sign In', 'View Cart', 'My Wishlish', 'Track My OrderTracking ', 'Help', 'Shipping Details'];
  const arrCorporate = [
    'Become a Vendors',
    'Affiliate Program',
    'Farm Business',
    'Farm Careers',
    'Our Suppliers',
    'Promotion',
  ];
  const arrInformation = [
    'Milk & Flavoured Milk',
    'Butter and Margarine',
    'Eggs Substitutes',
    'Marmalades',
    'Sour Cream and Dips',
    'Tea & Kombucha',
  ];

  return (
    <Container>
      <FooterColumnStart>
        <LogoShop src={images.LogoShop}></LogoShop>
        <WrapperText>
          <ul>
            <li>
              <strong>Address : </strong>
              <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
            </li>
            <li>
              <strong>Call Us : </strong>
              <span>(+91) - 540-025-124553</span>
            </li>

            <li>
              <strong>Email : </strong>
              <span>sale@Nest.com</span>
            </li>

            <li>
              <strong>Hours : </strong>
              <span>10:00 - 18:00, Mon - Sat</span>
            </li>
          </ul>
        </WrapperText>
      </FooterColumnStart>
      <FooterColumnCenter>
        <Title>Company</Title>
        {arrCompany.map((item, index) => (
          <WraperText href="/" key={index}>
            {item}
          </WraperText>
        ))}
      </FooterColumnCenter>
      <FooterColumnCenter>
        <Title>Account</Title>
        {arrAccount.map((item, index) => (
          <WraperText href="/" key={index}>
            {item}
          </WraperText>
        ))}
      </FooterColumnCenter>
      <FooterColumnCenter>
        <Title>Corporate</Title>
        {arrCorporate.map((item, index) => (
          <WraperText href="/" key={index}>
            {item}
          </WraperText>
        ))}
      </FooterColumnCenter>
      <FooterColumnCenter>
        <Title>Information</Title>
        {arrInformation.map((item, index) => (
          <WraperText href="/" key={index}>
            {item}
          </WraperText>
        ))}
      </FooterColumnCenter>
      <FooterColumnEnd>
        <Title>App & Payment</Title>
        <p>From App Store or Google Play</p>
        <AppStoreImg src={images.AppStore}></AppStoreImg>
        <CHPlayImg src={images.CHPlay}></CHPlayImg>
        <p>Secured Payment Gateways</p>
        <GateWayImg src={images.GateWay}></GateWayImg>
      </FooterColumnEnd>
    </Container>
  );
};
export default Footer;
