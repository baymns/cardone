import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">CARDONE</div>
      <div className="burger-menu">
        <input id="burger" type="checkbox" />

        <label for="burger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav>
          <ul>
            <div><Link to='/'>Войти</Link></div>
            <div><Link to='/'>Зарегистрироваться</Link></div>
            <div><Link to='/'>Вы автосервис?</Link></div>
          </ul>
        </nav>

      </div >
    </div >

  );
}

export default Navbar;
