import React from 'react'
import { Link } from "react-router-dom"
import logo from '../../HeaderContent/logo.jpg'
const Search = ({CartItem}) => {
  return (
    <>
    <section className='search'>
      <div className='container c_flex'>
      <div className='logo width '>
            <img src={logo} alt='' />
          </div>
        <div className='search-box f_flex'>
       
          <i className='fa fa-search'></i>
          <input type='search' placeholder='Buscar...' className='card-filter' />
          
        </div>

        <div className='icon f_flex width'>
          <i className='fa fa-user icon-circle'></i>
          <div className='cart'>
            <Link to='/cart'>
              <i className='fa fa-shopping-bag icon-circle'></i>
              <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
         
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Search