import { useState } from 'react'
import Home from './Home.jsx'
import Properties from './Properties.jsx'
import Plots from './Plots.jsx'
import Feedback from './Feedback.jsx'
import Contact from './Contact.jsx'
import './App.css'

function Landingpage() {
  return (
    <div>
        <Home />
     <Properties/>
     <Contact/>
    </div>
  )
}

export default Landingpage