import { loginFailed, loginStart, loginSuccess, logoutSuccess, registerStart, registerSuccess } from './AuthSlice';
import request from '../API';
import { resetCart } from './CartSlice';
import { showProfile } from './ProfileSlice';
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await request.post('login', user);
    dispatch(loginSuccess(res.data));
    navigate('/homepage');
  } catch (err) {
    dispatch(loginFailed());
  }
};
export const registerUser = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const response = await request.post('register', user);
    dispatch(registerSuccess());
    return response.status;
  } catch (err) {
    console.log(err);
  }
};
export const logOut = async (dispatch, navigate, token) => {
  try {
    await request.post(
      'logout',
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    dispatch(logoutSuccess());
    dispatch(resetCart());
    navigate('/login');
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = async (userUpdate, token) => {
  try {
    const response = await request.put('update-profile', userUpdate, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.status;
  } catch (error) {
    console.log(error);
  }
};
export const show = async (dispatch, token) => {
  try {
    await request.get('profile-user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(showProfile());
  } catch (error) {
    console.log(error);
  }
};
export const getProduct = async (params) => {
  try {
    const data = await request.get(`admin/all-product`, { params: params });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const order = async (formData) => {
  try {
    const config = { headers: { 'Content-Type': `application/json` } };
    const response = await request.post('order', JSON.stringify(formData), config);
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};
