import './style.scss';

import print_1 from '../../images/print_1.jpg'
import person_2 from '../../images/person_2.jpg'
import { Link } from "react-router-dom"

import React, { useState } from 'react';

const PropertyRowHeader = ({ property }) => (
    <div className="row_header">
        <div className="name">{ property.title }</div>
        <div className="pricing">{ property.description }</div>
    </div>
);

const PropertyRow = ({ property }) => (
    <div className="row">
        <div className="name">{ property.name }</div>
        <div className="pricing">{ property.price }</div>
    </div>
);

export default function OwnerCard({property}) {
    console.log(property);
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
        <PropertyRowHeader property={{title: property.brand, description: 'cena za godzinę'}}/>
        <PropertyRow property={{name: 'Photon Mono X', price: '5,45zł' }}/>
        <PropertyRow property={{name: 'Anycubic Mega SE', price: '4,45zł' }}/>
      </div>

      <div className="category">
        <PropertyRowHeader property={{title: "Materiały", description: 'cena za 100g'}}/>
        <PropertyRow property={{name: 'ABS 1,75mm zielony', price: '7,32zł' }}/>
        <PropertyRow property={{name: 'PLA 1,75mm niebieski', price: '9,45zł' }}/>
      </div>
    </div>
    <Link to="/userProfile">Szczegóły</Link>
  </div>

  );
}