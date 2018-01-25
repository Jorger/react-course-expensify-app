import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Espensify</h1>
        <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
    </header>
);

export default Header;