import React from 'react';
import styles from './createService.module.scss';

function FormCreateService(props) {
  return (
    <form className={styles.form}>
      <label htmlFor="companyName">Название компании:</label>
      <input name="companyName" type="text" />

      <label htmlFor="workingTime">Время работы:</label>
      <input name="workingTime" />

      <label htmlFor="service" type="text">
        Услуги:
      </label>
      <input name="service" />

      <label htmlFor="adress">Адрес</label>
      <input name="adress" />

      <label htmlFor="phone" type="tel">
        Телефон компании
      </label>
      <input name="phone" />

      <label htmlFor="url" type="url">
        URL-адрес
      </label>
      <input name="url" />

      <label htmlFor="email" type="email">
        Email
      </label>
      <input name="email" />
      <button>SEND</button>
    </form>
  );
}

export default FormCreateService;
