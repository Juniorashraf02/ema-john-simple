import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <div className="nav-body">
                <div>
                    <img  className="logo" src={logo} alt="" />
                </div>
                <div>
                    <a className="link" href="#Home"><p>Home</p></a> 
                    <a className="link" href="#Products"><p>Products</p></a> 
                    <a className="link" href="#Contact-Us"><p>Contact Us</p></a> 
                </div>
            </div>
        </nav>
    );
};

export default Header;