import React from 'react';
import { NavLink } from 'react-router';
import siteLogo from '../../assets/warmpaws.png'
import loginBgPattern from '../../assets/login-bg-pattern.png'
import signupBg from '../../assets/signup-img.png'

const Signup = () => {
    return (
        <>
            <section className='flex justify-center items-center gap-6'>

                {/* login form */}
                <div className="login-form w-5/12 xl:pl-[150px]">
                    {/* Logo */}
                    <div className="login-logo w-5/12 mx-auto">
                        <NavLink to='/'>
                            <img src={siteLogo} alt="Warm Paws Logo" />
                        </NavLink>
                    </div>
                    {/* Heading */}
                    <div className="login-heading text-center">
                        <h4 className='heading-font text-secondary text-[40px] capitalize leading-10 mt-[30px]'>
                            create an account !!
                            <br />
                            <span className='text-primary-content'>pet lovers</span>
                        </h4>
                        <h2 className='capitalize text-[55px] text-accent font-bold mb-2.5'>sign up</h2>
                    </div>
                    {/* Form */}
                    <div>
                        <form>
                            <fieldset className="fieldset">

                                <input type="text" className='signup-input shadow-input' placeholder="enter your full name" />

                                <input type="email" className='signup-input shadow-input' placeholder="enter your email" />

                                <input type='image' className='signup-input shadow-input' placeholder="enter your photo url" />

                                <input type="password" className='signup-input shadow-input' placeholder="enter your Password" />

                                <button className="p-3.5 capitalize text-[18px] font-semibold text-white bg-primary cursor-pointer my-[40px_20px]">register now</button>

                                <p className='text-[15px] font-regular capitalize text-accent text-center'>
                                    already have an account?
                                    <NavLink to='/login' className='font-medium text-primary cursor-pointer ml-1'>
                                        log in now
                                    </NavLink>
                                </p>
                            </fieldset>
                        </form>
                    </div>
                </div>

                {/* bg styles */}
                <div style={{ backgroundImage: `url(${loginBgPattern})` }} className="login-bg w-7/12 bg-cover bg-center bg-base-200 xl:p-[100px] ">
                    <img src={signupBg} alt="Login image" />
                </div>
            </section>
        </>
    );
};

export default Signup;