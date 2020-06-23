import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from "react";
import "./App.css";
import Header from '../components/header'
import Router from './Routes'

export default App => (
  <div className='main'>
    <Header />
    <Router />
  </div>
)