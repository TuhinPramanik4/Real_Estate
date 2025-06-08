import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React,useState } from 'react'
import BuyProperties from './Buy.jsx'
import RentProperties from './Rent.jsx'
import PlotProperties from './Plots.jsx';
import PgProperties from './Pg.jsx';
import Landingpage from './Landingpage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/rent" element={<RentProperties />} />
        <Route path="/pg" element={<PgProperties />} />
        <Route path="/buy" element={<BuyProperties />} />
        <Route path="/plot" element={<PlotProperties />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
