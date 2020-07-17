import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.home_container}>
      <Link to="/services">
        <div className={styles.container}>
          <div className="services">
            <p>Автосервис</p>
          </div>
        </div>
      </Link>
      <Link to="/tireservices">
        <div className={styles.container}>
          <div className="tire-services">
            <p>Шиномонтаж</p>
          </div>
        </div>
      </Link>
      <Link to="/autoparts">
        <div className={styles.container}>
          <div className="autoparts">
            <p>Автозапчасти</p>
          </div>
        </div>
      </Link>
      <Link to="/carwash">
        <div className={styles.container}>
          <div className="car-wash">
            <p>Автомойка</p>
          </div>
        </div>
      </Link>
      <Link to="/evacuator">
        <div className={styles.container}>
          <div className="evacuator">
            <p>Эвакуатор</p>
          </div>
        </div>
      </Link>
    </div >
  );
}

export default Home;
