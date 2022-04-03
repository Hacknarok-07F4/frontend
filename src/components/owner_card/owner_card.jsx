import './style.scss';

import print_1 from '../../images/print_1.jpg'
import person_2 from '../../images/person_2.jpg'

import React, { useState } from 'react';

const PropertyRowHeader = ({ title }) => (
    <div className="row_header">
        <div className="name">{title}</div>
        <div className="pricing">cena za godzinę</div>
    </div>
);

const PropertyRow = ({ property }) => (
    <div className="row">
        <div className="name">{ property.name }</div>
        <div className="pricing">{ property.price }</div>
    </div>
);

export default function OwnerCard() {
  const onSubmit = () => {

  };

  return (
    <div className="owner_card">
    <img src={print_1} />
    <div className="description">
      <div className="owner">
        <img src={person_2} />
        <h1>Jan Kowalski</h1>
      </div>
      <div className="category">
        <PropertyRowHeader title="Drukarki" />
        <PropertyRow property={{name: 'Photon Mono X', price: '5,45zł' }}/>
        <PropertyRow property={{name: 'Anycubic Mega SE', price: '4,45zł' }}/>
      </div>

      <div className="category">
        <PropertyRowHeader title="Materialy" />
        <PropertyRow property={{name: 'ABS 1,75mm zielony', price: '2,32zł' }}/>
        <PropertyRow property={{name: 'PLA 1,75mm niebieski', price: '3,45zł' }}/>
      </div>
    </div>
    <button> Szczegóły </button>
  </div>

  );
}