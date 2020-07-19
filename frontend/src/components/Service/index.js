import React from 'react';
import Map from '../Map'
import styles from './service.module.scss';
import { useState } from 'react';

function Service({ service }) {
  const { name, description, CompanyMetaData, boundedBy } = service;
  const { url, Phones, Hours, Categories } = CompanyMetaData;
  const [visibility, setVisibility] = useState(false);
  return (
    <div className={styles.service_block}>
      <p><strong>{name}</strong></p>
      <p><span>Адрес: {description}</span></p>
      {Hours && <p>Время работы: {Hours.text}</p>}
      <p>Тел: {Phones.map(({ formatted }) => (
        <span key={formatted}>{formatted}, </span>
      ))}</p>
      Сайт организации: <a href={url}>{url}</a>
      <p>
        Вид услуг:{' '}
        {Categories.map(({ name }) => (
          <span key={name}>{name.toUpperCase()} </span>
        ))}
      </p>
      
      <button type="button" className={styles.show_map_btn} onClick={() => setVisibility(!visibility)}>Показать на карте</button>
      {visibility && <Map  description={description} />}
    </div>
  );
}

export default Service;
