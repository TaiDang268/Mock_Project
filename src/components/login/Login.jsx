import { Checkbox, Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { Container, LoginForm, LoginImg, LoginText, RegisterText } from './Login.styled';
import images from '../../assets/images';

const Login = () => {
  return (
    <Container>
      <LoginImg src={images.Login}></LoginImg>
      <LoginForm>
        <LoginText>
          <span>LOGIN</span>
          <RegisterText>
            <p>Don't have an acount?</p>
            <a href="/">Create here</a>
          </RegisterText>
        </LoginText>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </LoginForm>
    </Container>
  );
};
export default Login;
