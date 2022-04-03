import './style.scss';

import React from 'react';

import Navbar from '../../components/navbar/navbar';
import OwnerCard from '../../components/owner_card/owner_card';

export default function Dashboard() {

  const onSubmit = () => {

  };

  return (
    <div className="dashboard_container">
      <Navbar />
      <div className="page_container">
        <div className="main">
          <div className="filters_container">
            <div className="input_container">
              Lokalizacja
              <div className="buttons">
                <input type="text" max={16}></input>
                <button>Szukaj</button>
              </div>
            </div>

            <div className="input_container">
              Nazwa
              <div className="buttons">
                <input type="text" max={16}></input>
                <button>Szukaj</button>
              </div>
            </div>

            <div className="input_container">
              Materiał
              <div className="buttons">
                <input type="text" max={16}></input>
                <button>Szukaj</button>
              </div>
            </div>

          </div>

          <div className="owners_container">
            <OwnerCard />
            <OwnerCard />
            <OwnerCard />
            <OwnerCard />
            <OwnerCard />
            <OwnerCard />
            <OwnerCard />
            <OwnerCard />
          </div>
        </div>
      </div>
    </div>
  );
}