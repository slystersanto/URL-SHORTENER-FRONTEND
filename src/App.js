import './App.css';
import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import ShortenUrl from './Components/ShortenUrl';
import Navbar from './Components/Navbar';
import {Routes,Route} from "react-router-dom";
import UrlChart from './Components/UrlChart';
import UrlTable from './Components/UrlTable';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import RegisterPage from './Components/RegisterPage';
import ResetPasswordSuccess from './Components/ResetPasswordSuccess';
import ResetPassword from "./Components/ResetPassword";


function App() {
  
  const location=useLocation();
  
  const shouldRenderNavbar=location.pathname !== '/';

  

  return (
    <React.Fragment>
      {shouldRenderNavbar && <Navbar/>}
      
      <Routes>
      <Route path={"/"} element={<Login />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/success" element={<ResetPasswordSuccess />} />
        <Route path="/dashboard" element={<UrlChart />} />
        <Route path="/create-url" element={<ShortenUrl />} />
        <Route path="/created-urls" element={<UrlTable />} />
     
      </Routes>
    </React.Fragment>
  );
}

export default App;
