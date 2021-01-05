import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return <nav>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/button">Button</Link>
        <span> | </span>
        <Link to="/alert">Alert</Link>
        <span> | </span>
        <Link to="/menu">Menu</Link>
        <span> | </span>
        <Link to="/tabs">Tabs</Link>
        <span> | </span>
        <Link to="/icon">Icon</Link>
        <span> | </span>
        <Link to="/transition">Transition</Link>
        <span> | </span>
    </nav>
}

export default Nav;