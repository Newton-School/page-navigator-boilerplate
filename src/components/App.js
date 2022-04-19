import React, { useState } from 'react';
import { Route,Routes } from 'react-router';
import { BrowserRouter } from "react-router-dom";

import Home  from './Home'
import Profile from './Profile';
import Contact from './Contact';
const App = () => {


  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </BrowserRouter>

  )
}


export default App;
