import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    error: '',
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [register.fulfilled](state, { payload: { user, token } }) {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = '';
    },
    [logIn.fulfilled](state, { payload: { user, token } }) {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = '';
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = '';
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.error = '';
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = '';
    },
    [refreshUser.rejected]: handleRejected,
    [register.rejected]: handleRejected,
    [logIn.rejected]: handleRejected,
    [logOut.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;