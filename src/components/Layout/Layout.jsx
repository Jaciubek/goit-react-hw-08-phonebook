import { Outlet, NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';
import { Suspense } from 'react';
import styled from 'styled-components';
import styles from './Layout.module.css';

const StyledLink = styled(NavLink)`
  position: relative;
  color: white;
  text-decoration: none;
  font-weight: 600;
  margin-left: 15px;
  line-height: 1.5;
  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    content: '';
  }
  &:hover {
    &::after {
      background-color: red;
    }
  }
  &.active {
    color: red;
  }
`;

const Layout = () => {
  const { layout__wrapper, layout__header, layout__nav, layout__link, layout__links, layout__main } = styles;

  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <div className={layout__wrapper}>
        <header className={layout__header}>
          <nav className={layout__nav}>
            <Link className={layout__link} to="/">
              Phonebook
            </Link>
            {isLoggedIn ? (
              <div className={layout__links}>
                <p>{ `Welcome ${user.name}`}</p>
                <button type="button" onClick={() => dispatch(logOut())}>
                  Logout
                </button>
              </div>
            ) : (
              <div className={layout__links}>
                <StyledLink to="/login">Log in</StyledLink>
                <StyledLink to="/register">Sign up</StyledLink>
              </div>
            )}
          </nav>
        </header>
        <main className={layout__main}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Layout;
