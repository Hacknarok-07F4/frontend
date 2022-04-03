import './style.scss';

import React from 'react';

import Navbar from '../../components/navbar/navbar';

export default function PageNotFound() {

  const onSubmit = () => {

  };

  return (
    <div className="page_not_found">
      <Navbar />
      <div className="page_container">
        <div className="main">
          <h1>Error 404</h1>
          <h3>Page not found</h3>
        </div>
      </div>
    </div>
  );
}