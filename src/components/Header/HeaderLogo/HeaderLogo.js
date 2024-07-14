// checked
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './HeaderLogoImage/logo.png';

export default function HeaderLogo() {
  return (
    <div className='navLogo'>
      <Link to="/" aria-label="Home">
        <img src={logo} alt="club logo" />
      </Link>
    </div>
  );
}
