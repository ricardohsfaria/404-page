import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div className="header-container">
        <div><h3 className="error-logo">404</h3></div>
        <div className="menu-container">
            <div className="menu-item"><h3 className="menu-text">Home</h3></div>
            <div className="menu-item"><h3 className="menu-text">News</h3></div>
            <div className="menu-item"><h3 className="menu-text">Contact</h3></div>
        </div>
        <div className="bars-container">
        <FontAwesomeIcon icon={ faBars } className="bars-icon" />
        </div>
    </div>
  )
}
