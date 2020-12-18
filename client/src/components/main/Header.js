import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from '../GoogleAuth';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ link, label }) => {
    return (
      <li className='nav-item'>
        <Link className='nav-link' to={link}>
          {label}
        </Link>
      </li>
    );
  };

  const ToggleButton = () => {
    return (
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='navbar-toggler-icon'></span>
      </button>
    );
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Streamer
        </Link>
        <ToggleButton {...isOpen} />
        <div
          className={`${isOpen ? 'show' : 'collapse'} navbar-collapse`}
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <NavItem link='/' label='All Streams' />
            <NavItem link='/streams/new' label='Create Streams' />
          </ul>

          <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
            <GoogleAuth />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
