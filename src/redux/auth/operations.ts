import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

axios.defaults.baseURL = 'https://todos-backend-pqko.onrender.com/';

// Utility to add JWT
const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */

type TypeUserResp = {
  token: string;
  user: {
    email: string;
    id: string;
    name: string;
  };
};
type TypeUserReq = {
  email: string;
  name?: string;
  password: string;
};
export const register = createAsyncThunk<
  TypeUserResp,
  TypeUserReq,
  { rejectValue: string }
>('auth/register', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('api/auth/signup', credentials);
    // After successful registration, add the token to the HTTP header
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk<
  TypeUserResp,
  TypeUserReq,
  { rejectValue: string }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('api/auth/signin', credentials);
    // After successful login, add the token to the HTTP header
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('api/auth/signout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const refreshUser = createAsyncThunk<
  TypeUserResp,
  null,
  { state: RootState }
>('auth/refresh', async (_, thunkAPI) => {
  // Reading the token from the state via getState()
  const state: RootState = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    // If there is no token, exit without performing any request
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    // If there is a token, add it to the HTTP header and perform the request
    setAuthHeader(persistedToken);
    const res = await axios.post('api/auth/me');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
