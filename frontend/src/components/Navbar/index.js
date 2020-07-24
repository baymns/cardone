import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
import { useSelector } from 'react-redux';
import Footer from '../Footer';
import Newfooter from '../F/index';
import { Modal } from '../Modal';

function Navbar() {
  const user = useSelector((state) => state.user);
  const [completed, setCompleted] = useState(false)
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}>CARDONE</div>
      </Link>
      <div className={styles.burger_menu}>
        <input id="burger" type="checkbox" onChange={() => setCompleted(!completed)} checked={completed} />
        <label htmlFor="burger" >
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
                  <Link to="/signin"><i className="fas fa-sign-in-alt"></i> Войти</Link>
                </div>
                <div>
                  <Link to="/signup"><i className="fas fa-door-open"></i> Зарегистрироваться</Link>
                </div>
                <div style={{marginBottom: 25}}>
                  <Link to="/cooperation"><i className="fas fa-warehouse"></i> Вы автосервис?</Link>
                </div>
                {/* <div className={styles.footer_wrapper}> */}
                  <Newfooter />
                {/* </div> */}
              </>
            ) : (
                <>
                  <div>
                    <Link to="/profile"><i className="fas fa-user-circle"></i> Профиль</Link>
                  </div>
                  <div style={{marginBottom: 35}}>
                    <Link to="/logout"><i className="fas fa-sign-out-alt"></i> Выйти</Link>
                  </div>
                  {/* <div className={styles.footer_wrapper}> */}
                  <Newfooter />
                {/* </div> */}
                </>
              )}
            <span className={styles.footer_line}></span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
