import { Outlet, NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { IoIosLogOut } from 'react-icons/io';
import { useAuth } from 'hooks';
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
  line-height: 1.25;
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
  const { layout__wrapper, layout__header, layout__nav, layout__link, layout__links, layout__main, layout__btn } = styles;

  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <div className={layout__wrapper}>
        <header className={layout__header}>
          <nav className={layout__nav}>
            <Link className={layout__link} to="/">
              Home
            </Link>
            {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
            {isLoggedIn ? (
              <IconContext.Provider value={{ size: '25px' }}>
                <div className={layout__links}>
                  <button
                    className={layout__btn}
                    type="button"
                    onClick={() => dispatch(logOut())}
                  >
                    <IoIosLogOut />
                  </button>
                </div>
              </IconContext.Provider>
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