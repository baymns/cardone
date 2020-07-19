import React from 'react';
import Map from '../Map'
import styles from './service.module.scss';

function Service({ service }) {
  const { name, description, CompanyMetaData, boundedBy } = service;
  const { url, Phones, Hours, Categories } = CompanyMetaData;
  return (
    <div className={styles.service_block}>
      <p>
        <strong>{name}</strong>
      </p>
      <p>
        <span>Адрес: {description}</span>
      </p>
      <p>Время работы: {Hours.text}</p>
      {Phones.map(({ formatted }) => (
        <p key={formatted}>{formatted}</p>
      ))}
      <a href={url}>{url}</a>
      <p>
        Вид услуг:{' '}
        {Categories.map(({ name }) => (
          <small key={name}>{name.toUpperCase()} </small>
        ))}
      </p>
      <Map boundedBy={boundedBy[0].reverse()} description={description} />
    </div>
  );
}

export default Service;
