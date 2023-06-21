import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='app'>
            <header>
                react router dom app <a href="https://github.com/coding-tea" target='_blank' >@codingTea <i class="bi bi-github"></i></a>
            </header>
            <div className="menu">
                <Link to='/' >home</Link>
                <Link to='/page1' >page1</Link>
                <Link to='/page2' >page2</Link>
                <Link to='/page3' >page3</Link>
            </div>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    );
}

export default Menu;
