import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import Shop from '../Pages/Shop/Shop';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
]);

export default router;