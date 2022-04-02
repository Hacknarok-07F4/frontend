import './style.scss';

import React from 'react';

import Navbar from '../../components/navbar/navbar';
import FilterSection from '../../components/filter_section/filter_section';
import PrinterList from '../../components/printer_list/printer_list';

export default function Dashboard() {

  const onSubmit = () => {

  };

  return (
    <div className="">
      <Navbar />
      <div className="">
        <FilterSection />
        <PrinterList />
      </div>
    </div>
  );
}