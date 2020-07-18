import React from 'react';
//import Map from '../Map'

function Service({ service }) {
  const { name, description, CompanyMetaData, boundedBy } = service;
  const { url, Phones, Hours, Categories } = CompanyMetaData;
  return (
    <div>
      <strong>{name}</strong>
      <span>{description}</span>
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
      {/* <Map boundedBy={boundedBy[0].reverse()} /> */}
    </div>
  );
}

export default Service;
