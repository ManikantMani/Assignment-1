import React from 'react';
import "./app.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard  from './pages/menu1/Dashboard';

const App = () => {
  return (
    <div className='app_components'>
      <Navbar />
      <Routes>
      <Route path = "/" element = {<Dashboard />} />
    </Routes>
    </div>
  )
}

export default App;
