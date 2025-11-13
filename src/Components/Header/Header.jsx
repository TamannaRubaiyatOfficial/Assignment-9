import React from 'react';
import headerLogo from '../../assets/warmpaws.png'
import { NavLink } from 'react-router';
import './Header.css'
import NavLinks from '../Navlinks/Navlinks';
import MainContainer from '../MainContainer/MainContainer';


const Header = () => {

    const headerMenuLinks = <>
        <li>
            <NavLinks to='/'>home</NavLinks>
        </li>
        <li>
            <NavLinks to='/services'>
                services
            </NavLinks>
        </li>
        <li>
            <NavLinks to='/shop'>
                shop
            </NavLinks>
        </li>
        <li>
            <NavLinks to='/about'>
                about us
            </NavLinks>
        </li>
        <li>
            <NavLinks to='/contact'>
                contact us
            </NavLinks>
        </li>
    </>

        return (
            <>
                <MainContainer className="drawer xl:py-[50px] bg-base-200">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">

                        {/* Navbar */}
                        <div className="navbar justify-between w-full">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-6 w-6 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </label>
                            </div>

                            {/* header logo */}
                            <div className="w-2/12">
                                <NavLink to='/'>
                                    <img className='w-full cursor-pointer' src={headerLogo} alt="Header logo" />
                                </NavLink>
                            </div>

                            {/* header menu */}
                            <div className="hidden flex-none lg:block w-8/12">
                                <ul className="flex justify-center items-center gap-8">
                                    {/* Navbar menu content here */}
                                    {headerMenuLinks}
                                </ul>
                            </div>

                            {/* login/signup button */}
                            <div className='w-2/12'>
                                <NavLink to='/login'>
                                    <button className='w-full bg-primary text-white uppercase font-semibold py-2.5 cursor-pointer'>
                                        sign in
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>


                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </MainContainer>
            </>
        );
    };

    export default Header;