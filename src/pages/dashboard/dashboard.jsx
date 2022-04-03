import './style.scss';

import React, { useState } from 'react';

import Navbar from '../../components/navbar/navbar';
import OwnerCard from '../../components/owner_card/owner_card';

export default function Dashboard() {

    const [data, setData] = useState(null);
  async function componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/printers/1');
      const printer= await res.json();
      setData(printer.brand);
      console.log(data);
      return printer;
    } catch (e) {
      console.log(e);
    }
  }
  componentDidMount();


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
            <OwnerCard property={data}/>
            <OwnerCard property={{brand: 'cos'}}/>
            <OwnerCard property={{brand: 'cos'}}/>
            <OwnerCard property={{brand: 'cos'}}/>
            <OwnerCard property={{brand: 'cos'}}/>
            <OwnerCard property={{brand: 'cos'}}/>
            <OwnerCard property={{brand: 'cos'}}/>
            <OwnerCard property={{brand: 'cos'}}/>
          </div>
        </div>
      </div>
    </div>
  );
}