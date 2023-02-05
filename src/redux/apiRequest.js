import axios from 'axios';
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from './AuthSlice';
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://viet.fresher.ameladev.click/api/login', user);
    dispatch(loginSuccess(res.data));
    navigate('/homepage');
  } catch (err) {
    dispatch(loginFailed());
  }
};
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post('http://viet.fresher.ameladev.click/api/register', user);
    dispatch(registerSuccess());
    navigate('/login');
  } catch (err) {
    dispatch(registerFailed());
  }
};
export const logOut = async (dispatch, navigate, token) => {
  dispatch(logoutStart());
  try {
    await axios.post('http://viet.fresher.ameladev.click/api/logout', {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(logoutSuccess());
    navigate('/login');
  } catch (error) {
    console.log(error);
    dispatch(logoutFailed());
  }
};

