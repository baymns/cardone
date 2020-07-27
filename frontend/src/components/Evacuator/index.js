import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './evacuator.module.scss';
import geoFindMe from './addressFinder.js';
import Tick from '../Tick';
import { showTick } from '../../redux/actions/actionCreators';
import { showModal } from '../../redux/actions/actionCreators';
import { addEvacuatorReq } from '../../redux/actions/actionCreators';

function Evacuator() {
  const [reqData, setReqData] = useState({
    username: '',
    phone: '',
    brand: '',
    model: '',
    address: '',
  });
  const dispatch = useDispatch();

  const tickShow = useSelector((state) => state.tick.tick);

  useEffect(() => {
    geoFindMe().then((data) => setReqData({ ...reqData, address: data }));
  }, []);

  async function sendReq(event) {
    event.preventDefault();
    dispatch(showModal());

    // dispatch(showTick());
    // setTimeout(() => {
    //   dispatch(showTick());
    //   dispatch(showModal());
    // }, 1200);

    const response = await fetch('/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqData),
    });
    dispatch(addEvacuatorReq(reqData));
    setReqData({
      username: '',
      phone: '',
      brand: '',
      model: '',
      address: '',
    });
  }
  function changed({ target: { value, name } }) {
    setReqData({ ...reqData, [name]: value });
  }
  return (
    <>
      <form className={styles.evaForm} onSubmit={sendReq}>
        {/* {tickShow && <Tick />} */}
        <h3>Заполните заявку</h3>
        <div className="form-group">
          <label htmlFor="username">Как к вам обращаться</label>

          <input
            name="username"
            className="evaInput"
            // placeholder="Как к вам обращаться?"
            onChange={changed}
            value={reqData.username}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Телефон для связи</label>

          <input
            name="phone"
            className="evaInput"
            onChange={changed}
            value={reqData.phone}
            type="phone"
            className="form-control"
            id="phone"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="brand">Марка автомобиля</label>

          <input
            name="brand"
            className="evaInput"
            onChange={changed}
            value={reqData.brand}
            type="text"
            className="form-control"
            id="brand"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="model">Модель автомобиля</label>

          <input
            name="model"
            className="evaInput"
            onChange={changed}
            value={reqData.model}
            type="text"
            className="form-control"
            id="model"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="address">Адрес</label>
          <input
            name="address"
            // className="evaInput"
            onChange={changed}
            value={reqData.address}
            type="text"
            className="form-control"
            id="address"
          ></input>
        </div>
        <button type="submit" className="evaButton" className="btn btn-primary">
          Отправить
        </button>
      </form>
    </>
  );
}

export default Evacuator;
