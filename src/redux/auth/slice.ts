import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

type AuthState = {
  user: { name: string; email: string; id: string };
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
};

const initialState: AuthState = {
  user: { name: '', email: '', id: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const handlePending = (state: AuthState) => {
  state.isLoading = true;
};

const handleRejected = (state: AuthState, payload: any) => {
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  selectors: {
    isLoading: state => state.isLoading,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectUser: state => state.user,
    selectIsRefreshing: state => state.isRefreshing,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.user.name,
          email: action.payload.user.email,
          id: action.payload.user.id,
        };
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '', id: '' };
        state.token = '';
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { isLoading, selectIsLoggedIn, selectUser, selectIsRefreshing } =
  authSlice.selectors;
