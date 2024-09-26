import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import { createContext } from 'react';

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
