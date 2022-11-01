import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <h1 className="header__title">
        <Link to='/' >e-commercer</Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink to='/login' className="header__link">
              login
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to='/purchases' className="header__link">
              Purchases
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to='/cart' className="header__link">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header