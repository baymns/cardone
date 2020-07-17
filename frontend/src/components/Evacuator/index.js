import React from 'react';
import Header from '../Header';

function Evacuator() {
  return (
    <>
      <form className="evaForm" onSubmit={}>
        <input className="evaInput" placeholder="Как к вам обращаться?"></input>
        <input className="evaInput" placeholder="Телефон для связи"></input>
        <input className="evaInput" placeholder="Марка автомобиля"></input>
        <input className="evaInput" placeholder="Модель автомобиля"></input>
        <button className="evaButton" type="submit">
          Отправить
        </button>
      </form>
    </>
  );
}
