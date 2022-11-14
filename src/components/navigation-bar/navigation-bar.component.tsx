import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { ShoppingCartContext } from '../../contexts/shopping-cart.context';
import { UserContext } from '../../contexts/user.context';
import { signOutAsync } from '../../utils/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import {
  NavigationBarContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from './navigation-bar.styles';

type Props = {};

const NavigationBar = (props: Props) => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(ShoppingCartContext);

  const logoutHandler = async () => {
    await signOutAsync();
  };

  return (
    <>
      <NavigationBarContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={logoutHandler}>
              Log out
            </NavLink>
          ) : (
            <NavLink to="auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationBarContainer>
      <Outlet />
    </>
  );
};

export default NavigationBar;
