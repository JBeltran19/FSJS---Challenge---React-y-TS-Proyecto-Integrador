import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import productItems from './Data';

const ProductCategories = ({addToCart}) => {
    
    const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const {cat}= useParams();
  const {subCat}=useParams();
const p = productItems.productItems;
  const productCat = p.filter(producto => producto.cat===cat && producto.subCat===subCat);

 
  return (

    <>
      {productCat.map((productItems) => {
        return (
          <div className='box' key={productItems.id}>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{productItems.discount}% Off</span>
                <img src={productItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3 >{productItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${productItems.price}.00 </h4>
                  <button onClick={() => addToCart(productItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ProductCategories