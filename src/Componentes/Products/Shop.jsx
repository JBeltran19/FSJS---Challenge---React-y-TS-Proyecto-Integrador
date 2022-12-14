import React from 'react'
import Productos from './Productos'
import './Style.css'

const Shop = ({productItems,addToCart}) => {
    
  return (
    <>
    <section className='shop background'>
      <div className='container d_flex'>

        <div className='contentWidth'>
          <div className='heading'>
              <h2>Productos</h2>
          </div>
          <div className='product-content  grid1'>
            <Productos productItems={productItems} addToCart={addToCart}/>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Shop