import React from 'react'
import Home from '../Componentes/mainpage/Home'
import Shop from '../Componentes/Products/Shop'
import ProductTop from '../Componentes/ProductTop/ProductTop'
import Contact from '../HeaderContent/forms/Contact'

const Pages = ({productItems,addToCart}) => {
    
  return (
    <>
        <Home />
        <ProductTop/>
        <Shop productItems={productItems} addToCart={addToCart}/>
        <Contact/>
    </>
  )
}

export default Pages