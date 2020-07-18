import React from 'react';

function Service({ service }) {
  const { name, description, CompanyMetaData } = service;
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
      <p>Вид услуг: {Categories.map(({name})=><small key={name}>{name.toUpperCase()} </small>)}</p>
    </div>
  );
}

export default Service;
