import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='app'>
            <div className="menu">
                <Link to='/pages1' >page1</Link>
                <Link to='/pages2' >page2</Link>
                <Link to='/pages3' >page3</Link>
            </div>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    );
}

export default Menu;
