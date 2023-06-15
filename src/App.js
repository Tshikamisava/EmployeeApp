import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Add from './Pages/user/Add';
import Edit from './Pages/user/Edit';
import Users from './Pages/user/Users';
import Search from './Pages/Search';
import { useState, useEffect } from 'react';
//import React, { Pages } from "react";




function App() {
 

  return (
    <div className="App">
      <Navbar/><br></br>
   
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route  path="/home" exact element={<Home/>} />
        <Route  path="/users/:id" exact element={<Users/>} />
        <Route  path="/add-user" exact element={<Add/>} />
        <Route  path="/edit-user/:id" exact element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;