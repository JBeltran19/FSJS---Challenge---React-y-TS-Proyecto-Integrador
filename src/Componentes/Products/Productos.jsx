import React,{useState} from 'react'

const Productos = ({productItems}) => {
    
    const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const prod= productItems.productItems;

  return (
    <>
      {prod.map((productItems) => {
        return (
          <div className='box'>
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
                  
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Productos