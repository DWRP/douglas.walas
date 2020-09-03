import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'
interface menu{
    page?: string
}
function Menu<menu>({page="home"}) {
  return (
    <nav className="menu">
        <Link to="/" className={`menu_item home ${page === "home"?"select":""}`}>
            HOME
        </Link>
        <Link to="/projects" className={`menu_item ${page === "project"?"select":""}`}>
            PROJECTS
        </Link>
        <Link to="/contact" className={`menu_item contact ${page === "contact"?"select":""}`}>
            CONTACT
        </Link>
    </nav>

  );
}

export default Menu;
