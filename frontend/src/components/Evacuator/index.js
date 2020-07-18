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

  function recordUsername(event) {
    setReqData({ ...reqData, username: event.target.value });
  }

  function recordPhone(event) {
    setReqData({ ...reqData, phone: event.target.value });
  }

  function recordBrandOfAuto(event) {
    setReqData({ ...reqData, brand: event.target.value });
  }

  function recordModelOfAuto(event) {
    setReqData({ ...reqData, model: event.target.value });
  }

  async function sendReq(event) {
    event.preventDefault();
    console.log(reqData);

    const response = await fetch('/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqData),
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
          className="evaInput"
          name="username"
          placeholder="Как к вам обращаться?"
          onChange={recordUsername}
        ></input>
        <input
          className="evaInput"
          name="phone"
          placeholder="Телефон для связи"
          onChange={recordPhone}
        ></input>
        <input
          className="evaInput"
          name="brandOfAuto"
          placeholder="Марка автомобиля"
          onChange={recordBrandOfAuto}
        ></input>
        <input
          className="evaInput"
          name="modelOfAuto"
          placeholder="Модель автомобиля"
          onChange={recordModelOfAuto}
        ></input>
        <button className="evaButton" type="submit">
          Отправить
        </button>
      </form>
    </>
  );
}

export default Evacuator;
