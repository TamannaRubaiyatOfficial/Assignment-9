import React from 'react';
import { NavLink } from 'react-router';
import MainContainer from '../../Components/MainContainer/MainContainer';
import siteLogo from '../../assets/warmpaws.png'
import loginBgPattern from '../../assets/login-bg-pattern.png'
import loginBg from '../../assets/login-img.png'

const Login = () => {
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
                            welcome back !!
                            <br />
                            <span className='text-primary-content'>pet lovers</span>
                        </h4>
                        <h2 className='capitalize text-[55px] text-accent font-bold mb-2.5'>log in</h2>
                    </div>

                    {/* Form */}
                    <div>
                        <form>
                            <fieldset className="fieldset">

                                <input type="email" className='login-input shadow-input' placeholder="enter your Email" />

                                <input type="password" className='login-input shadow-input' placeholder="enter your Password" />

                                <p className='text-black text-[16px] mt-5 font-regular capitalize'>Forgot password?</p>

                                <button className="p-3.5 capitalize text-[18px] font-semibold text-white bg-primary cursor-pointer my-[40px_20px]">sign in</button>

                                {/* divider */}
                                <div className="form-divider mb-5 flex justify-center items-center gap-2">
                                    <div className='h-px w-16 bg-accent/70'></div>
                                    <span className='text-[15px] text-accent font-normal capitalize'>or</span>
                                    <div className='h-px w-16 bg-accent/70'></div>
                                </div>

                                {/* google sign in button */}
                                <button className="p-3.5 capitalize text-[18px] font-semibold bg-white text-black border box-border border-[#e5e5e5] flex justify-center items-center gap-2.5 mb-5 cursor-pointer">
                                    <svg aria-label="Google logo" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>

                                    Sign in with Google
                                </button>

                                {/* link to sign up page */}
                                <p className='text-[15px] font-regular capitalize text-accent text-center'>
                                    not registered yet?
                                    <NavLink to='/signup' className='font-medium text-primary cursor-pointer ml-1'>
                                        sign up now
                                    </NavLink>
                                </p>
                            </fieldset>
                        </form>
                    </div>
                </div>

                {/* bg styles */}
                <div style={{ backgroundImage: `url(${loginBgPattern})` }} className="login-bg w-7/12 bg-cover bg-center bg-base-200 xl:p-[100px] ">
                    <img src={loginBg} alt="Login image" />
                </div>
            </section>
        </>
    );
};

export default Login;