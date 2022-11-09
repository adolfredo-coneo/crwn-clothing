import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { ShoppingCartContext } from '../../contexts/shopping-cart.context';
import { UserContext } from '../../contexts/user.context';
import { signOutAsync } from '../../utils/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import './navigation-bar.styles.scss';

type Props = {};

const NavigationBar = (props: Props) => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(ShoppingCartContext);

  const logoutHandler = async () => {
    await signOutAsync();
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            Shop
          </Link>
          {currentUser ? (
            <a className="nav-link" onClick={logoutHandler}>
              Log out
            </a>
          ) : (
            <Link className="nav-link" to="auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
