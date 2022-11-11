import React from 'react'
import Home from '../Componentes/mainpage/Home'
import Shop from '../Componentes/Products/Shop'
import ProductTop from '../Componentes/ProductTop/ProductTop'

const Pages = ({productItems}) => {
    
  return (
    <>
        <Home/>
        <ProductTop/>
        <Shop productItems={productItems}/>
    </>
  )
}

export default Pages