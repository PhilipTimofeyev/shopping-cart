import { useState } from 'react'
// import './App.css'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Shop from "./components/Shop";

export const CartContext = createContext()

function App() {
  const [cart, setCart] = useState([])


  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar/>
        <div>
          <h1>Hello</h1>
        </div>
        <Outlet />
      </CartContext.Provider>
    </>
  );
}





export default App
