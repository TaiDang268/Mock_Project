import { Button, Form, Input } from 'antd';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Content } from './Profile.styled';

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.login.currentUser);
  const token = user?.authorisation.token;
  const profile = useSelector((state) => state.profile.userProfile);


  const genderUser = (gender) => {
    return gender === 1 ? 'Nam' : 'Nữ';
  };
  const handleLogout = () => {
    logOut(dispatch, navigate, token);
  };
  const handelUpdate = () => {};
  return (
    <>
      <Header></Header>
      <Content>
        <Form
          form={form}
          name="update"
          // onFinish={onFinish}
          initialValues={{
            email: [user.user.email],
            name: [user.user.name],
            phone: [profile.phone],
            address: [profile.address],
            gender: [genderUser(profile.gender)],
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
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <Input
              style={{
                width: '100%',
              }}
            />
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
