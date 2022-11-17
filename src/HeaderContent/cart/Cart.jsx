import React from 'react'
import './style.css'

const Cart = ({ CartItem, addToCart, decreaseQty}) => {
    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0);
  return (
    <>
      <section className='cart-items'>
        <div className='containerZ d_flex'>
          <h3 className='titleCart'>Carrito de Compras</h3>
          <div className='container-cart'>
          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No hay productos cargados</h1>}

          
            {CartItem.map((item) => {
              

              return (
                
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      <span>${item.price}</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <h2>
                      <span>{item.qty}</span>
                    </h2>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <div className=' d_flex mobile'>
              <h4> Total : </h4>
              <h3>${totalPrice}</h3>
            </div>
          </div>
          </div>
          <div className='buttonShop'>
          <p className="block">
                <button>
                    Finalizar Compra
                </button>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart