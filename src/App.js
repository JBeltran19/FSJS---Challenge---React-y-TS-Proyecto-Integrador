import React, { useState } from "react"
import './App.css';
import Header from './HeaderContent/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Pages from './Pages/Pages';
import Data from './Componentes/ProductXcat/Data';
import Productos from './Pages/Productos';
import Cart from './HeaderContent/cart/Cart';
import ProductoXcategories from './Pages/ProductoXcategories.jsx'
import searchFilter from "./HeaderContent/header/filtroBusquedas";

function App() {
  const {productItems} = Data;
  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
  
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  searchFilter('.card-filter','.box');
  return (
    <>
      <Router>
        <Header CartItem={CartItem}/>
        <Routes>
          <Route exact path='/' element={<Pages productItems={productItems} addToCart={addToCart} />}/>

          <Route path='/productos' element={<Productos productItems={productItems} addToCart={addToCart} />} />

          <Route path='/:navText/:cat/:subCat' element={<ProductoXcategories addToCart={addToCart} />} />

          <Route path='/cart' element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}/>

        </Routes>
        
      </Router>
    </>
  );
}

export default App;
