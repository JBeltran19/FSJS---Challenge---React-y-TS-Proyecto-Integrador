import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCategories from './ProductCategories'
import '../Products/Style.css'

const VistaCateg = ({productItems,addToCart}) => {
  const {cat} = useParams();
  return (
    <>
    <section className='shop background'>
      <div className='container d_flex'>

        <div className='contentWidth'>
          <div className='heading'>
              <h2>{cat}</h2>
          </div>
          <div className='product-content  grid1'>
            <ProductCategories productItems={productItems} addToCart={addToCart}/>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default VistaCateg