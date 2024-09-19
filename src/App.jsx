// import { useState } from 'react'
// import './App.css'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Shop from "./components/Shop";

function App() {
  return (
    <>
    <Navbar/>
      <div>
        <h1>Hello</h1>
      </div>
      <Outlet />
    </>
  );
}


export default App
