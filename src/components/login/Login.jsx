import { Checkbox, Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { Container, LoginForm, LoginImg, LoginText, RegisterText } from './Login.styled';
import images from '../../assets/images';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const loginUrl = 'http://viet.fresher.ameladev.click/api/login';
  const onFinish = async (values) => {
    const instance = axios.create({ baseURL: loginUrl, timeout: 1000 });
    const loginData = { email: values.username, password: values.password };
    await instance
      .post(loginUrl, loginData)
      .then(function (response) {
        if (!response.data.data) {
          console.log('login failed');
        }
        console.log(response);
        localStorage.setItem('token', response.data.authorisation.token);
        localStorage.setItem('username', response.data.user.name);

        navigate('/homepage');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container>
      <LoginImg src={images.Login}></LoginImg>
      <LoginForm>
        <LoginText>
          <span>LOGIN</span>
          <RegisterText>
            <p>Don't have an acount?</p>
            <a href="/register">Create here</a>
          </RegisterText>
        </LoginText>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
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
