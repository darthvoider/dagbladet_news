import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => {
    return (
        <header className='site-header'>
            <nav className='site-nav'>
                <ul className='site-menu'>
                    <li className='menu-item'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to="listing">Listing</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
