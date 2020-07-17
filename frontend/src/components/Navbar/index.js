import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>CARDONE</div>
      <div className={styles.burger_menu}>
        <input id="burger" type="checkbox" />

        <label htmlFor="burger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav>
          <div className={styles.links_container}>
            <div><Link to='/'>Войти</Link></div>
            <div><Link to='/'>Зарегистрироваться</Link></div>
            <div><Link to='/'>Вы автосервис?</Link></div>
          </div >
        </nav>

      </div >
    </div >

  );
}

export default Navbar;
