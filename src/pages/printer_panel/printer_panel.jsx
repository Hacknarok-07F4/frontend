import './style.scss';

import person from '../../images/person.jpg';
import file from '../../images/file.png'

import dpd_logo from '../../images/dpd_logo.png'
import inpost_logo from '../../images/inpost_logo.png'
import poczta_polska_logo from '../../images/poczta_polska.png'
import osobisty from '../../images/osobisty.png'

import blik_logo from '../../images/blik_logo.png'
import eplatnosci_logo from '../../images/eplatnosci_logo.png'
import paypal_logo from '../../images/paypal_logo.png'
import przelewy_logo from '../../images/przelewy_logo.png'

import Navbar from '../../components/navbar/navbar'
import Calendar from '../../components/calendar/calendar';

import React, { useState } from 'react';

export default function PrinterPanel() {
  const printerName = "ANYCUBIC Photon Mono X";
  const ownerName = "Pablo Escobar";
  const material = "ABS 1.75mm Zielony";
  const deliveryDate = "03.04.2022 12:30";
  const deliveryType = "Paczkomaty 24h";
  const paymentType = "Blik";
  const files = "wieża.stl";
  const price = "56,40zł";

  const [isDetails, setDetails] = useState(true);


  const onSubmit = () => {

  };

  const onSwitch = (mode) => {
    setDetails(mode)
    console.log(isDetails)
  }

  return (
    <div className='printer_panel_container'>
        <Navbar />
        <div className='main'>
          <div className="left_panel">
            <h1>{ printerName }</h1>
            <div className="owner_preview">
              <img src={person} />
              <h3>{ ownerName }</h3>
            </div>
            <div className="property_container">
              <h4>Materiał</h4>
              <h3>{ material }</h3>
            </div>
            <div className="property_container">
              <h4>Termin dostawy</h4>
              <h3>{ deliveryDate }</h3>
            </div>
            <div className="property_container">
              <h4>Sposób dostawy</h4>
              <h3>{ deliveryType }</h3>
            </div>
            <div className="property_container">
              <h4>Forma płatnośći</h4>
              <h3>{ paymentType }</h3>
            </div>
            <div className="property_container">
              <h4>Pliki</h4>
              <h3>{ files }</h3>
            </div>
            <div className="gap"></div>
            <button className='submitOrder'>Zamów ({price})</button>
          </div>
          <div className="right_panel">
            <div className="switch_page">
              <button 
                className={`${isDetails ? 'active' : ''}`}
                onClick={() => onSwitch(true)}
                >Szczegóły zamówienia</button>
              <button
                className={`${!isDetails ? 'active' : ''}`}
                onClick={() => onSwitch(false)}
                >Dostawa i płatność</button>
            </div>
            { isDetails ?
            <div className="details_container">
              {/* Wybierz materiał */}
              <div className="property_container">
                <h4>Wybierz materiał</h4>
                <div className="element_container">
                  <div className="material_container">
                    <div className="color bg_green"></div>
                    <div className="description">
                      <h3>ABS 1.75 Zielony</h3>
                      <h3>0.67kg</h3>
                    </div>
                  </div>

                  <div className="material_container">
                    <div className="color bg_red"></div>
                    <div className="description">
                      <h3>ABS 1.75 Czerwony</h3>
                      <h3>0.88kg</h3>
                    </div>
                  </div>

                  <div className="material_container">
                    <div className="color bg_blue"></div>
                    <div className="description">
                      <h3>ABS 1.75 Niebieski</h3>
                      <h3>0.43kg</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wybierz termin */}
              <div className="property_container">
                <h4>Wybierz termin</h4>
                <div className="element_container">
                  <div className="calendar_container">
                    <Calendar />
                  </div>
                  <div className="time_container">
                    <h4>Godzina odbioru</h4>
                    <input type="time" id="appt" name="appt"
                      min="09:00" max="18:00" required></input>
                  </div>
                </div>
              </div>

              {/* Wybierz pliki */}
              <div className="property_container">
                <h4>Wybierz pliki</h4>
                <div className="dropwdown_area">
                  <div className="file_container">
                    <img src={file} />
                    <h5>{ files }</h5>
                  </div>
                </div>
              </div>

            </div>
            :
            <div className="delivery_container">
              {/* Wybierz sposób dostawy */}
              <div className="property_container">
                <h4>Wybierz sposób dostawy</h4>
                <div className="element_container">

                  <div className="method_container">
                    <img src={ dpd_logo }/>
                    <div className="description">
                      <h3>Kurier DPD</h3>
                      <h3>12,25zł</h3>
                    </div>
                  </div>

                  <div className="method_container">
                    <img src={ inpost_logo }/>
                    <div className="description active">
                      <h3>Paczkomaty 24h</h3>
                      <h3>9,99zł</h3>
                    </div>
                  </div>

                  <div className="method_container">
                    <img src={ poczta_polska_logo }/>
                    <div className="description">
                      <h3>Poczta Polska</h3>
                      <h3>12,45zł</h3>
                    </div>
                  </div>

                  <div className="method_container">
                    <img src={ osobisty }/>
                    <div className="description">
                      <h3>Odbiór osobisty</h3>
                      <h3>0,00zł</h3>
                    </div>
                  </div>


                </div>
              </div>

              <div className="gap"></div>

              {/* Wybierz sposób płatności */}
              <div className="property_container">
                <h4>Wybierz formę płatności</h4>
                <div className="element_container">

                  <div className="method_container">
                    <img src={ blik_logo }/>
                    <div className="description active">
                      <h3>Kurier DPD</h3>
                    </div>
                  </div>

                  <div className="method_container">
                    <img src={ eplatnosci_logo }/>
                    <div className="description">
                      <h3>Paczkomaty 24h</h3>
                    </div>
                  </div>

                  <div className="method_container">
                    <img src={ paypal_logo }/>
                    <div className="description">
                      <h3>Poczta Polska</h3>
                    </div>
                  </div>

                  <div className="method_container">
                    <img src={ przelewy_logo }/>
                    <div className="description">
                      <h3>Odbiór osobisty</h3>
                    </div>
                  </div>


                </div>
              </div>

            </div>
            }
          </div>
        </div>
    </div>
  );
}