import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './navbar.css'

const Navbar = () => {

    const [cartItems, setCartItems] = useState(420);
    const [iconSize, setIconSize] = useState(getViewportWidth());

    function getViewportWidth() {
        return window.innerWidth * 0.025; // 2.5vw
    }

    useEffect(() => {
        const handleResize = () => {
            setIconSize(getViewportWidth());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className='main-navbar-container'>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <Link to="/">
                        <img src='' alt=''/>
                    </Link>
                    <Link to="/">
                        <p>CELESTIS</p>
                    </Link>
                </div>
                <ul className='navbar-links'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                <div className='navbar-checkout'>
                    <div className='cart-container'>
                        <div className='main-cart-icon'>
                            <div className='cart-icon'>
                                <Link to="/cart"><FaShoppingCart size={iconSize} /></Link>
                            </div>
                            {cartItems > 0 && <span className='cart-count'>{cartItems}</span>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;