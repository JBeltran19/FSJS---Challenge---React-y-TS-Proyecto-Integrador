import React from 'react'
import Shop from '../Componentes/Products/Shop'


const Productos = ({productItems,addToCart}) => {
    
  return (
    <>
        
        <Shop productItems={productItems} addToCart={addToCart}/>
    </>
  )
}

export default Productos