import React, { useState } from 'react';

function Evacuator() {
  const [reqData, setReqData] = useState({
    username: '',
    phone: '',
    brand: '',
    model: '',
  });

  function recordUsername(username) {
    setReqData({ username });
  }

  function recordPhone(phone) {
    setReqData({ phone });
  }

  function recordBrandOfAuto(brand) {
    setReqData({ brand });
  }

  function recordModelOfAuto(model) {
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
      <form className="evaForm" onSubmit={chtoto}>
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
        <button className="evaButton" type="submit" onSubmit={sendReq}>
          Отправить
        </button>
      </form>
    </>
  );
}

export default Evacuator;
