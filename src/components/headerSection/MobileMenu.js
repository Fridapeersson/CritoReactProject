import React from 'react';
import "./MobileMenu.scss";
import { NavLink } from 'react-router-dom';
import { useHeaderContext } from '../../context/HeaderContext';


const MobileMenu = () => {

    const {closeMenu} = useHeaderContext();
    
    const handleClick = () => {
        closeMenu();
    }


  return (
    <nav className="mobileMenu">
        <NavLink to="/" onClick={handleClick}>Home</NavLink>
        <NavLink to="/service" onClick={handleClick}>Service</NavLink>
        <NavLink to="/news" onClick={handleClick}>News</NavLink>
        <NavLink to="/contact" onClick={handleClick}>Contact</NavLink>
    </nav>
  )
}

export default MobileMenu