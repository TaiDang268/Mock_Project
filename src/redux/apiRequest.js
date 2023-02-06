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
export const show = async ( dispatch, token) => {
  try {
    await request.get('profile-user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(showProfile())
  } catch (error) {
    console.log(error);
  }
};
