import './style.scss';

import React from 'react';

import PrinterListElement from '../printer_list_element/printer_list_element';

export default function PrinterList() {
  return (
    <div className="printer_list_container">
        Printer Owner List
        <PrinterListElement />
    </div>
  );
}