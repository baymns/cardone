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
  function changed({ target: { value, name } }) {
    setReqData({ ...reqData, [name]: value });
    console.log(reqData);
  }
  return (
    <>
      <form className="evaForm" onSubmit={sendReq}>
        <input
          name="username"
          className="evaInput"
          placeholder="Как к вам обращаться?"
          onChange={changed}
          value={reqData.username}
        ></input>
        <input
          name="phone"
          className="evaInput"
          placeholder="Телефон для связи"
          onChange={changed}
          value={reqData.phone}
        ></input>
        <input
          name="brand"
          className="evaInput"
          placeholder="Марка автомобиля"
          onChange={changed}
          value={reqData.brand}
        ></input>
        <input
          name="model"
          className="evaInput"
          placeholder="Модель автомобиля"
          onChange={changed}
          value={reqData.model}
        ></input>
        <button className="evaButton" type="submit">
          Отправить
        </button>
      </form>
    </>
  );
}

export default Evacuator;
