import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { RootState } from '../store';
import { TypeUserReq, TypeUserResp } from '../../@types';

axios.defaults.baseURL = 'https://todos-backend-pqko.onrender.com/';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk<
  TypeUserResp,
  TypeUserReq,
  { rejectValue: string }
>('auth/register', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('api/auth/signup', credentials);
    setAuthHeader(res.data.token);
    toast.success('Successful Sign up');
    return res.data;
  } catch (error) {
    toast.error('Sign up failed');
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const logIn = createAsyncThunk<
  TypeUserResp,
  TypeUserReq,
  { rejectValue: string }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('api/auth/signin', credentials);
    setAuthHeader(res.data.token);
    toast.success('Successful Log in');
    return res.data;
  } catch (error) {
    toast.error('Log in failed');
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('api/auth/signout');
    clearAuthHeader();
    toast.success('Successful Log out');
  } catch (error) {
    toast.error('Log out failed');
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const refreshUser = createAsyncThunk<
  TypeUserResp,
  null,
  { state: RootState }
>('auth/refresh', async (_, thunkAPI) => {
  const state: RootState = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const res = await axios.post('api/auth/me');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
