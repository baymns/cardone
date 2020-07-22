import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
import { useSelector } from 'react-redux';
import Footer from '../Footer'
import { Modal } from '../Modal';

function Navbar() {
  const user = useSelector((state) => state.user);
  const [completed,setCompleted] = useState(false)
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}>CARDONE</div>
      </Link>
      <div className={styles.burger_menu}>
        <input id="burger" type="checkbox" checked={completed} />

        <label htmlFor="burger" onClick={() => setCompleted(!completed)}>
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav>
          <div
            className={styles.links_container}
            onClick={() => setCompleted(!completed)}
          >
            {!user.id ? (
              <>
                <div>
                  <Link to="/signin">Войти</Link>
                </div>
                <div>
                  <Link to="/signup">Зарегистрироваться</Link>
                </div>
                <div>
                  <Link to="/cooperation">Вы автосервис?</Link>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link to="/profile">Профиль</Link>
                </div>
                <div>
                  <Link to="/recommendations">Рекомендации</Link>
                </div>
                <div>
                  <Link to="/logout">Выйти</Link>
                </div>
              </>
            )}
            <span className={styles.footer_line}></span>
            <Footer />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
