import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = ({ to, className, children }) => {
    return (
        <>
            <NavLink to={to} className={`${({ isActive }) => isActive ? "active" : ""} capitalize text-[18px] font-medium text-primary headerMenu ${className}`}>
                {children}
            </NavLink>
        </>
    );
};

export default NavLinks;