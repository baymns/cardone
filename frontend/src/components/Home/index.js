import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import styles from './home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../Modal';
import { showModal } from '../../redux/actions/actionCreators';
import Evacuator from '../Evacuator';

function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <div id="services" className={styles.home_container}>
        <div className={styles.container}>
          <Link to="/services">
            <div className="services">
              <i className="fas fa-wrench" ></i>
              <div> Автосервис</div>
            </div>
          </Link>
        </div>
        <div id="tireservices" className={styles.container}>
          <Link to="/tireservices">
            <div className="tire-services">
              <i className="fas fa-truck-monster"></i>
              <div>Шиномонтаж</div>
            </div>
          </Link>
        </div>
        <div id="autoparts" className={styles.container}>
          <Link to="/autoparts">
            <div className="autoparts">
              <i className="fas fa-car-side"></i>
              <div> Автозапчасти</div>
            </div>
          </Link>
        </div>
        <div id="carwash" className={styles.container}>
          <Link to="/carwash">
            <div className="car-wash">
              <i className="fas fa-tint"></i>
              <div>Автомойка</div>
            </div>
          </Link>
        </div>
        <div id="carwash" className={styles.container}>
          <Link to="/autorefuelling">
            <div className="autorefuelling">
            <i className="fas fa-gas-pump"></i>
              <div>Автозаправка</div>
            </div>
          </Link>
        </div>
        <div id="evacuator" className={styles.container} onClick={() => dispatch(showModal('evacuator'))}>
          <div className={styles.evacuator}>
            <div>
              <i className="fas fa-truck-pickup"></i>
              <div>Эвакуатор</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
