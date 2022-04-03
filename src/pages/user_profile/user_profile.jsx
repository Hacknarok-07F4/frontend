import './style.scss';

import React from 'react';

import { Link } from "react-router-dom"
import Navbar from '../../components/navbar/navbar';
import person_2 from '../../images/person_2.jpg';

const UserPropertyRow = ({ property }) => (
  <div className="row">
    <div className="property">{ property.name }</div>
    <div className="value">{ property.value }</div>
  </div>
);

const  PrinterRowHeader = () => (
  <div className="row_header">
    <div className="name">Nazwa</div>
    <div className="price">Cena za godzinę</div>
    <div className="availability">Dostępność</div>
    <div className="button_col"></div>
  </div>
);

const PrinterRow = ({ property }) => (
  <div 
  className={`row_printer ${property.availability ? '' : 'unavailable'}`}>
    <div className="name">{ property.name }</div>
    <div className="price">{ property.price }</div>
    <div className="availability">{ property.availability ? 'Tak' : 'Nie' }</div>
    <div className="button_col">{ property.availability ? <Link to="/printerPanel">Wybierz</Link> : ''}</div>
  </div>
);

const  MaterialRowHeader = () => (
  <div className="row_header">
    <div className="name">Nazwa</div>
    <div className="price">Cena za 100g</div>
    <div className="availability">Dostępność</div>
  </div>
);

const MaterialRow = ({ property }) => (
  <div 
  className='row_material'>
    <div className="name">{ property.name }</div>
    <div className="price">{ property.price }</div>
    <div className="availability">{ property.availability }kg</div>
  </div>
);


export default function UserProfile() {

  const onSubmit = () => {

  };

  return (
    <div className="user_profile_container">
      <Navbar />
      <div className="page_container">
        <div className="main">
          <div className="left_panel">
            <div className="background"></div>
            <div className="divider">
              <img src={person_2}/>
            </div>
            <div className="description">
              <h1>Jan Kowalski</h1>
              <UserPropertyRow property={{name: 'Adres', value: 'Podole 60, Kraków'}}/>
              <UserPropertyRow property={{name: 'Email', value: 'jan@kowalski.pl'}}/>
              <UserPropertyRow property={{name: 'Telefon', value: '+48 890 567 123'}}/>
              <UserPropertyRow property={{name: 'Ocena', value: '4.67/5 (29)'}}/>
              <UserPropertyRow property={{name: 'Bio', value: 'Jeśli chcecie jakiś dobry wydruk to walcie śmiało kurde ten'}}/>
            </div>
          </div>

          <div className="right_panel">
            {/* Printers */}
            <div className="printers">
              <h1>Drukarki</h1>
              <PrinterRowHeader/>
              <PrinterRow property={{name: 'Photon Mono X', price: '5,45zł', availability: true}} />
              <PrinterRow property={{name: 'Anycubic Mega SE', price: '4,45zł', availability: true}} />
              <PrinterRow property={{name: 'Prusa i3 MK3S+', price: '3,45zł', availability: false}} />
            </div>

            {/* Materials */}
            <div className="materials">
              <h1>Materiały</h1>
              <MaterialRowHeader/>
              <MaterialRow property={{name: 'ABS 1,75mm zielony', price: '7,32zł', availability: '0,67'}} />
              <MaterialRow property={{name: 'ABS 1.75mm czerwony', price: '8,50zł', availability: '0,88'}} />
              <MaterialRow property={{name: 'ABS 1.75mm niebieski', price: '9,45zł', availability: '0,43'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}