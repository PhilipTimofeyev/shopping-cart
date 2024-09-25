import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Shop from "./components/Shop";

export const CartContext = createContext()

function App() {
  const [cart, setCart] = useState({})

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar/>
        <Outlet />
      </CartContext.Provider>
    </div>
  );
}





export default App
