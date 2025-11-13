import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer/Footer';

const HomeLayout = () => {

    const location = useLocation();

    const hideNavBar = location.pathname === '/login' || location.pathname === '/signup';
    return (
        <>
            {
                !hideNavBar && (
                    <header>
                        <Header></Header>
                    </header>
                )
            }
            <main>
                <section>
                    <Outlet></Outlet>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomeLayout;