import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation-bar.styles.scss';

type Props = {};

const NavigationBar = (props: Props) => {
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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
