import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import LocalCarWashRoundedIcon from '@material-ui/icons/LocalCarWashRounded';
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.container}>
        <Link to="/services">
          <div className="services">
          <i className="fas fa-wrench" ></i>
            <div> Автосервис</div>
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <Link to="/tireservices">
          <div className="tire-services">
            <i className="fas fa-truck-monster"></i>
            <div>Шиномонтаж</div>
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <Link to="/autoparts">
          <div className="autoparts">
            <i className="fas fa-car-side"></i>
            <div> Автозапчасти</div>
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <Link to="/carwash">
          <div className="car-wash">
          <i className="fas fa-tint"></i>
            <div>Автомойка</div>
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <Link to="/evacuator">
          <div className="evacuator">
          <i className="fas fa-truck-pickup"></i>
            <div>Эвакуатор</div>
          </div>
        </Link>
      </div>
    </div >
  );
}

export default Home;
