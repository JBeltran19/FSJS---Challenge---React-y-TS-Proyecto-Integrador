import React from 'react'
import VistaCateg from '../Componentes/ProductXcat/VistaCateg';

const ProductoXcategories = ({productItems,addToCart}) => {
  return (
    <>
    <VistaCateg productItems={productItems} addToCart={addToCart}/>
    </>
    
  )
}

export default ProductoXcategories