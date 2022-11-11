import React from 'react'
import Home from '../Componentes/mainpage/Home'
import Shop from '../Componentes/Products/Shop'


const Productos = ({productItems}) => {
    
  return (
    <>
        
        <Shop productItems={productItems}/>
    </>
  )
}

export default Productos