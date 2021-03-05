import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg.svg';

const Header = () => (
    <div className="header">
        <Link className='logo-container' to='/'>
        <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/contact' className='option'>Contact</Link>
        </div>
    </div>
)

export default Header;