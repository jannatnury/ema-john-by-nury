import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/products">Products</a>
                <a href="/Orders">Orders</a>
                <a href="/cart">Cart</a>
            </div>
        </nav>
    );
};

export default Header;