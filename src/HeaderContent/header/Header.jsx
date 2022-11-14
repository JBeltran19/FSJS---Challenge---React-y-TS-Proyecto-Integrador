import React from 'react'

import "./Header.css"
import Navbar from './Navbar'
import Search from './Search'

const Header = ({ CartItem }) => {
  return (
    <>
        <Search CartItem={CartItem}/>
        <Navbar />
        
    </>
  )
}

export default Header