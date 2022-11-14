import React,{useState, useEffect, useRef} from 'react'
import { Link } from "react-router-dom"
import { ReactComponent as Cpu } from '../../icons/cpu.svg';
import { ReactComponent as Motherboard } from '../../icons/tarjeta-madre.svg';
import { ReactComponent as Cooler } from '../../icons/cooler.svg';
import { ReactComponent as Ram } from '../../icons/memoria-ram_adobe_express.svg';
import { ReactComponent as VideoCard } from '../../icons/video card.svg';
import { ReactComponent as Hardisk } from '../../icons/hardisk.svg';
import { ReactComponent as Power } from '../../icons/fuente-de-alimentacion.svg';
import { ReactComponent as Cabinet } from '../../icons/cabinet.svg';
import { ReactComponent as Monitor } from '../../icons/computadora.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';
import { CSSTransition } from 'react-transition-group';



const Navbar = () => {
  return (
    
      <header className='header'>
        <div className='container d_flex'>
          
          <NavbarContent>
            <NavItem name={<Link to='/'>Home</Link>} />
            <NavItem name={<Link to='/productos'>Productos</Link>}>
              <DropdownMenu></DropdownMenu>
            </NavItem>
            <NavItem name={<Link to='/notebooks'>Notebooks</Link>} />
            <NavItem name={<Link to='/perifericos'>Perifericos</Link>} />
            <NavItem name={<Link to='/faq'>FAQ</Link>} />
            
            <NavItem name={<Link to='/contacto'>Contacto</Link>} />
          </NavbarContent>
        </div>
      </header>
    
  )
}

function NavbarContent(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="" onClick={() => setOpen(!open)}>
        {props.name}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>Categorias</DropdownItem>
          <DropdownItem
            leftIcon={<Cpu/>}
            rightIcon={<ChevronIcon />}
            goToMenu="cpu">
            Cpu
          </DropdownItem>
          <DropdownItem
            leftIcon={<Motherboard/>}
            rightIcon={<ChevronIcon />}
            goToMenu="motherboard">
            Motherboard
          </DropdownItem>
          <DropdownItem
            leftIcon={<Cooler/>}
            rightIcon={<ChevronIcon />}
            goToMenu="cooler">
            Cooler
          </DropdownItem>
          <DropdownItem
            leftIcon={<Ram/>}
            rightIcon={<ChevronIcon />}
            goToMenu="ram">
            Momoria Ram
          </DropdownItem>
          <DropdownItem
            leftIcon={<VideoCard/>}
            rightIcon={<ChevronIcon />}
            goToMenu="videocard">
            Placa de Video
          </DropdownItem>
          <DropdownItem
            leftIcon={<Hardisk/>}
            rightIcon={<ChevronIcon />}
            goToMenu="hardisk">
            Almacenamiento
          </DropdownItem>
          <DropdownItem
            leftIcon={<Power/>}
            rightIcon={<ChevronIcon />}
            goToMenu="power">
            Fuentes
          </DropdownItem>
          <DropdownItem
            leftIcon={<Cabinet/>}
            rightIcon={<ChevronIcon />}
            goToMenu="cabinet">
            Gabinetes
          </DropdownItem>
          <DropdownItem
            leftIcon={<Monitor/>}
            rightIcon={<ChevronIcon />}
            goToMenu="monitor">
            Monitores
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'cpu'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Volver</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>AMD</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Intel</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'motherboard'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Motherboards</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Amd4</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Intel 1151</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Navbar