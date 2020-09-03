import React,{ useState } from 'react'

import logo from '../../assets/images/logo.svg'
import logo_dark from '../../assets/images/logo_dark.svg'
import git_logo from  "../../assets/images/GIT.png"
import linkedin_logo from  "../../assets/images/IN.png"

import './styles.css'

function Header() {
  let [menu,setMenu] = useState(true)

  return (
        <header className="header">
            <a href="/" className="logo links">
                <h1 className="logo">
                    <img src={menu?logo_dark:logo} onChange={()=>setMenu} alt="dw" />
                </h1>
            </a>
            <div className="social">
                <a href="https://github.com/DWRP" target="_blank" rel="noopener noreferrer" className="links">
                    <img className="github" src={git_logo} alt="github" />
                </a>

                <a href="https://linkedin.com/in/douglaswalas/" target="_blank" rel="noopener noreferrer" className="links">
                    <img className="linkedin" src={linkedin_logo} alt="linkedin" />
                </a>

            </div>
        </header>
  );
}

export default Header