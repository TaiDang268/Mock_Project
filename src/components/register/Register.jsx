import { Container, Wrapper } from './Register.styled';
import { Button, Form, Input, Radio } from 'antd';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/apiRequest';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      address: values.address,
      gender: values.gender,
    };
    registerUser(newUser, dispatch, navigate);
  };
  // const registerUrl = 'http://viet.fresher.ameladev.click/api/register';
  // const onFinish = async (values) => {
  //   const instance = axios.create({ baseURL: registerUrl, timeout: 1000 });
  //   const registerData = { name: values.name, email: values.email, password: values.password };
  //   // console.log(registerData);
  //   await instance
  //     .post(registerUrl, registerData)

  //     .then(function (response) {
  //       if (!response.data.user.token) {
  //         console.log('register failed');
  //       }
  //       console.log(response);
  //       localStorage.setItem('token', response.data.authorisation.token);
  //       navigate('/homepage');
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  return (
    <Container>
      <Wrapper>
        <h1>Create an Account</h1>
        <p>
          Already have an account?
          <a href="/login"> Log in</a>
        </p>
        <Form
          //   {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone "
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              //   addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address "
            rules={[
              {
                required: true,
                message: 'Please input your address!',
              },
            ]}
          >
            <Input
              //   addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: 'Please select gender!',
              },
            ]}
          >
            <Radio.Group
            //  onChange={onChange} value={value}
            >
              <Radio value={1}>Nam</Radio>
              <Radio value={0}>Nữ</Radio>
            </Radio.Group>
          </Form.Item>
          {/* <Form.Item label="Birthday">
            <DatePicker />
          </Form.Item> */}
          <Form.Item
          //   {...tailFormItemLayout}
          >
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Register;
