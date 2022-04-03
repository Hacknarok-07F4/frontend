import './style.scss';

import React from 'react';

import Navbar from '../../components/navbar/navbar';
import person_2 from '../../images/person_2.jpg';

const UserPropertyRow = ({ property }) => (
  <div className="row">
    <div className="property">{ property.name }</div>
    <div className="value">{ property.value }</div>
  </div>
);

const ItemRowHeader = () => (
  <div className="row_header">
    <div className="name"></div>
    <div className="price"></div>
    <div className="availability"></div>
    <div className="button_col"></div>
  </div>
);

const ItemRow = ({ property }) => (
  <div 
  className={`row_printer ${property.availability ? '' : 'unavailable'}`}>
    <div className="name">{ property.name }</div>
    <div className="price">{ property.price }</div>
    <div className="availability">{ property.availability ? 'Tak' : 'Nie' }</div>
    <div className="button_col">{ property.availability ? <button>Wybierz</button> : ''}</div>
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
              <ItemRowHeader/>
              <ItemRow property={{name: 'Photon Mono X', price: '5,45zł', availability: true}} />
              <ItemRow property={{name: 'Anycubic Mega SE', price: '4,45zł', availability: true}} />
              <ItemRow property={{name: 'Prusa i3 MK3S+', price: '3,45zł', availability: false}} />
            </div>

            {/* Materials */}
            <div className="printers">
              <h1>Materiały</h1>
              <ItemRowHeader/>
              <ItemRow property={{name: 'ABS 1,75mm zielony', price: '2,32zł', availability: true}} />
              <ItemRow property={{name: 'Anycubic Mega SE', price: '4,45zł', availability: true}} />
              <ItemRow property={{name: 'Prusa i3 MK3S+', price: '3,45zł', availability: false}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}