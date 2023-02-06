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
import request from '../API';
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
  dispatch(logoutStart());
  try {
    await request.post('logout', {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(logoutSuccess());
    navigate('/login');
  } catch (error) {
    console.log(error);
    dispatch(logoutFailed());
  }
};
