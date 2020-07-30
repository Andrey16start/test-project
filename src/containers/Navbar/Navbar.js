import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import LazyLoadImage from '../../components/LazyLoadImage/LazyLoadImage';


const Navbar = () => {
  const onLogout = () => {
    delete localStorage.isLoggedIn;
    window.location = '/login';
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <LazyLoadImage src='/media/logo.png' />
      </div>

      <ul className="navbar__nav">
        <li className="navbar__nav-item">
          <Link to='/'>
            Главная
          </Link>
        </li>

        <li className="navbar__nav-item">
          <Link to='/profile'>
            Профиль
          </Link>
        </li>

        <li className="navbar__nav-item">
          <Link to='/news'>
            Новости
          </Link>
        </li>
      </ul>

      <button
        className="navbar__sign-out"
        onClick={onLogout}
      >
        Выход
      </button>
    </nav>
  )
}

export default Navbar;