import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul>
            <label>Navigation pages</label>
            <li>
                <Link to="/">Main page</Link>
            </li>
            <li>
                <Link to="/login">Log in page</Link>
            </li>
            <li>
                <Link to="/signup">Sign up page</Link>
            </li>
        </ul>
    );
};

export default NavBar;
