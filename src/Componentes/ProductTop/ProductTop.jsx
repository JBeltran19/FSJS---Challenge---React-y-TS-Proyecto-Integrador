import React from 'react'
import ProductCard from './ProductCard'
import './Style.css'

const ProductTop = () => {
  return (
    <>
      <section className='background NewArrivals'>
      <div className="contentWidth">
        <div className='container'>
          <div className='heading'>
              <h2>Top 10</h2>
          </div>
          <ProductCard />
          </div> 
        </div>
      </section>
    </>
  )
}

export default ProductTop