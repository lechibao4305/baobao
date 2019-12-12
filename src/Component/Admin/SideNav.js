import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideNav.css'
import { Link } from 'react-router-dom'

export default props => {
    return (

        <Menu>
            <a className="menu-item" href="/">
                ManagerProduct
      </a>

            <a className="menu-item" href="/laravel">
                Laravel
      </a>

            <a className="menu-item" href="/angular">
                Angular
      </a>

            <a className="menu-item" href="/react">
                React
      </a>

            <a className="menu-item" href="/vue">
                Vue
      </a>

            <Link onClick={() => (localStorage.removeItem("token"))} to="/login">Logout</Link>
        </Menu>
    );
};