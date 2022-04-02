import './App.css';
 
import Login from './pages/login/login';
import Register from './pages/register/register';
import Dashboard from './pages/dashboard/dashboard';
import PrinterOwnerProfile from './pages/printer_owner_profile/printer_owner_profile';
import PageNotFound from './pages/page_not_found/page_not_found';
import PrinterPanel from './pages/printer_panel/printer_panel';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/printerOwnerProfile" element={<PrinterOwnerProfile />} />
        <Route path="/printerPanel" element={<PrinterPanel />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}