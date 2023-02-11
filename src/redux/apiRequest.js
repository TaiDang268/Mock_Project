import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from './AuthSlice';
import request from '../API';
import { resetCart } from './CartSlice';
import { showProfile } from './ProfileSlice';
import axios from 'axios';
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
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await request.post('register', user);
    dispatch(registerSuccess());
    navigate('/login');
  } catch (err) {
    dispatch(registerFailed());
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
  await request
    .put('update-profile', userUpdate, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((respone) => {
      console.log(respone);
    })
    .catch((error) => {
      console.log(error);
    });
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
  const data = await request
    .get(`admin/all-product`, { params: params })
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};
export const order = async (formData, navigate) => {
  const config = { headers: { 'Content-Type': `application/json` } };
  await axios
    .post('http://172.16.21.143/api/order', JSON.stringify(formData), config)
    .then((res) => {
      navigate('/homepage');
    })
    .catch((error) => {
      console.log(error);
    });
};
