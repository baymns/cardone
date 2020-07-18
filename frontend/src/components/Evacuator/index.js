import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addEvacuatorReq } from '../../redux/actions/actionCreators';

function Evacuator() {
  const [reqData, setReqData] = useState({
    username: '',
    phone: '',
    brand: '',
    model: '',
  });

  const dispatch = useDispatch();

  function recordUsername(username) {
    setReqData({ username });
  }

  function recordPhone(phone) {
    setReqData({ phone });
  }

  function recordBrand(brand) {
    setReqData({ brand });
  }

  function recordModel(model) {
    setReqData({ model });
  }

  async function sendReq(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    });
    const result = await response.json();
    dispatch(addEvacuatorReq(reqData));
    setReqData({
      username: '',
      phone: '',
      brand: '',
      model: '',
    });
  }
  return (
    <>
      <form className="evaForm" onSubmit={sendReq}>
        <input
          name="username"
          className="evaInput"
          placeholder="Как к вам обращаться?"
          onChange={recordUsername}
        ></input>
        <input
          name="phone"
          className="evaInput"
          placeholder="Телефон для связи"
          onChange={recordPhone}
        ></input>
        <input
          name="brand"
          className="evaInput"
          placeholder="Марка автомобиля"
          onChange={recordBrand}
        ></input>
        <input
          name="model"
          className="evaInput"
          placeholder="Модель автомобиля"
          onChange={recordModel}
        ></input>
        <button className="evaButton" type="submit">
          Отправить
        </button>
      </form>
    </>
  );
}

export default Evacuator;
