import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './evacuator.module.scss';
import geoFindMe from './addressFinder.js';
import Tick from '../Tick';
import { showTick } from '../../redux/actions/actionCreators';
import { showModal } from '../../redux/actions/actionCreators';
import { addEvacuatorReq } from '../../redux/actions/actionCreators';

function Evacuator() {
  //const res = await geoFindMe();

  console.log('dddddddddddd');
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

    dispatch(showTick());
    setTimeout(() => {
      dispatch(showTick());
      dispatch(showModal());
    }, 1200);

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
        {tickShow && <Tick />}
        <strong>Эвакуатор</strong>
        <div className="form-group">
          <input
            name="username"
            className="evaInput"
            placeholder="Как к вам обращаться?"
            onChange={changed}
            value={reqData.username}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="form-group">
          <input
            name="phone"
            className="evaInput"
            placeholder="Телефон для связи"
            onChange={changed}
            value={reqData.phone}
            type="phone"
            className="form-control"
            id="phone"
          ></input>
        </div>
        <div className="form-group">
          <input
            name="brand"
            className="evaInput"
            placeholder="Марка автомобиля"
            onChange={changed}
            value={reqData.brand}
            type="text"
            className="form-control"
            id="brand"
          ></input>
        </div>
        <div className="form-group">
          <input
            name="model"
            className="evaInput"
            placeholder="Модель автомобиля"
            onChange={changed}
            value={reqData.model}
            type="text"
            className="form-control"
            id="model"
          ></input>
        </div>
        <div className="form-group">
          <input
            name="address"
            className="evaInput"
            placeholder="Адрес"
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
