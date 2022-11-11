import React,{useState} from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
              <Link to='/productos'>Productos</Link>
                  <ul>
                    <li>
                      <Link to='/productos'>Productos</Link>
                    </li>
                    <li><a href="#destino1-2">Opción 1.2</a></li>
                    <li><a href="#destino1-3">Opción 1.3</a></li>
                  </ul>
              </li>
              <li>
                <Link to='/perifericos'>Perifericos</Link>
              </li>
              <li>
                <Link to='/notebooks'>Notebooks</Link>
              </li>
              <li>
                <Link to='/faq'>FAQ</Link>
              </li>
              <li>
                <Link to='/contacto'>Contacto</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar