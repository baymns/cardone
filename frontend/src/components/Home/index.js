import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.container}>
        <Link to="/services">
          <div className="services">
            <p>Автосервис</p>
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <Link to="/tireservices">
          <div className="tire-services">
            <p>Шиномонтаж</p>
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <Link to="/autoparts">
          <div className="autoparts">
            <p>Автозапчасти</p>
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <Link to="/carwash">
          <div className="car-wash">
            <p>Автомойка</p>
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <Link to="/evacuator">
          <div className="evacuator">
            <p>Эвакуатор</p>
          </div>
        </Link>
      </div>
    </div >
  );
}

export default Home;
