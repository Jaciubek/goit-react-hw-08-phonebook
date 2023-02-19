import { useSelector } from 'react-redux';
import {selectUser, selectIsLoggedIn, selectIsRefreshing, selectAuthError } from '../redux/auth/authSelectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
    error: useSelector(selectAuthError),
  };
};
