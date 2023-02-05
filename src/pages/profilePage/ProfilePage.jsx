import { Button, Form, Input, Radio } from 'antd';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { logOut } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Content } from './Profile.styled';
import axios from 'axios';

const ProfilePage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.login.currentUser);
  const token = user?.authorisation.token;
  const userProfile = async () => {
    try {
      await axios.get('http://viet.fresher.ameladev.click/api/profile-user', {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogout = () => {
    // axios.post('http://viet.fresher.ameladev.click/api/logout', {
    //   headers: { Authorization: `Bearer ${token}` },
    // });
    logOut(dispatch, navigate, token);
  };
  const handelUpdate = () => {
    const res = axios.get('http://viet.fresher.ameladev.click/api/profile-user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
  };
  return (
    <>
      <Header></Header>
      <Content>
        <Form
          form={form}
          name="update"
          // onFinish={onFinish}
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
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="name" label="Name" tooltip="What do you want others to call you?">
            <Input />
          </Form.Item>

          <Form.Item name="phone" label="Phone ">
            <Input
              //   addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Form.Item name="address" label="Address ">
            <Input
              //   addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <Radio.Group>
              <Radio value={1}>Nam</Radio>
              <Radio value={0}>Nữ</Radio>
            </Radio.Group>
          </Form.Item>
          <div className="wrapper-btn">
            <Form.Item>
              <Button type="primary" style={{ background: '#dc373f' }} onClick={handleLogout}>
                <span className="logout-btn">Logout</span>
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={handelUpdate}>
                Update
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Content>
      <Footer></Footer>
    </>
  );
};
export default ProfilePage;
