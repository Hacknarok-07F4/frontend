import './style.scss';
import logo from '../../images/icon.png'
import person from '../../images/person_64x64.jpg'
import { Link } from "react-router-dom"

import React from 'react';

export default function Navbar() {
  const isLogged = false;

  return (
    <div className="navbar_container">
      <div className='logo_container'>
        <img src={logo}/>
        <Link to="/dashboard">NearbyPrinter</Link>
      </div>
      <div className="button_container">

      </div>
      <div className="gap"></div>
      {
       isLogged ?
        <div className='login_container'>
          <button>Register</button>
        </div>
        :
        <div className='login_container'>
          <button>Logout</button>
          <img src={person} />
        </div>
      }
    </div>
  );
}