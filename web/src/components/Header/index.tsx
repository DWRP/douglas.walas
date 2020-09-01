import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

import './styles.css'

function Header() {
  let [menu,setMenu] = useState(false)

  return (
    <header className="header">
        <img
            src={logo}
            alt="Douglas Walas logotype"
            className="logo"
        />
        <button 
          className="menu-button show"
          onClick={()=>{setMenu(!menu)}}
        >MENU</button>

        <div className="links">
            <Link 
              to="/" 
              className={menu?`link`:"link hidden"}
              onClick={()=>{setMenu(!menu)}}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={menu?`link`:"link hidden"}
              onClick={()=>{setMenu(!menu)}}
            >
                Services
              </Link>
            <Link
              to="/projects" 
              className={menu?`link`:"link hidden"}
              onClick={()=>{setMenu(!menu)}}
            >
                Projects
              </Link>
            <Link
              to="/about" 
              className={menu?`link`:"link hidden"}
              onClick={()=>{setMenu(!menu)}}
            >
                About me
            </Link>
        </div>
    </header>
  );
}

export default Header