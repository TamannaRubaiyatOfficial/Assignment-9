import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import MainContainer from '../../Components/MainContainer/MainContainer';
import siteLogo from '../../assets/warmpaws.png'
import loginBgPattern from '../../assets/login-bg-pattern.png'
import loginBg from '../../assets/login-img.png'
import { auth } from '../../Firebase/firebase.config';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {

    const navigate = useNavigate();

    // form states
    const [password, setPassword] = useState("");
    const [passwordMsz, setPasswordMsz] = useState("");
    const [passwordColor, setPasswordColor] = useState("text-red-500");
    const [firebaseErr, setFirebaseErr] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // live password validation
    const handlePasswordValidation = (value) => {
        setPassword(value);

        // regex patterns
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (passwordRegex.test(value)) {
            setPasswordMsz("Password is valid ✓");
            setPasswordColor("text-green-600");
        } else {
            setPasswordMsz(
                "Password must be at least 6 characters and include uppercase and lowercase letters."
            );
            setPasswordColor("text-red-500");
        }
    }

    // handle login
    const handleSignIn = (event) => {
        event.preventDefault();
        // console.log("sign in button clicked");
        setFirebaseErr('');

        // get values from the form
        const email = event.target.email.value;

        // final strong validation before signup
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setPasswordMsz(
                `Password must be at least 6 characters and include uppercase and lowercase letters.`
            );
            setPasswordColor("text-red-500");
            return;
        }

        toast.promise(
            signInWithEmailAndPassword(auth, email, password),
            {
                loading: "Singing in your cozy account...",
                success: "Welcome back! Your paws are all cozy again 🐾🧡🧡",
                error: "Oops! Couldn't sign in 😢. Try Again !!",
            }
        )
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                // navigate to home page
                navigate('/');

                // clear form after successful submission
                event.target.reset();
                setPasswordMsz("");
                setPassword("");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`Error code: ${errorCode} \nError msz: ${errorMessage}`);

                // show toast/error message
                setFirebaseErr(errorMessage);
            });
    }

    // Google sign in
    const handleGoogleSignIn = () => {
        console.log("button clicked");

        // import google provider
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log("Google user: ", user);

                // navigate to desired page
                navigate('/');

                // toast success msz
                toast.success('Welcome back! Your paws are all cozy again 🐾🧡🧡');
            })
            .catch(error => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(`error code: ${errorCode} \nerror msz: ${errorMessage} \nemail: ${email} \ncredential: ${credential}`);

                // toast error msz
                if (errorCode) {
                    toast.error(`⚠️ ${errorCode}`)
                }
                else if (email) {
                    toast.error(`⚠️ Email Issues ${email}`)
                }
                else {
                    toast.error(`⚠️ ${errorMessage}`)
                }
            });
    }

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
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">

                                <input
                                    type="email"
                                    name='email'
                                    className='login-input shadow-input'
                                    placeholder="enter your Email"
                                />

                                <div className='relative'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name='password'
                                        value={password}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setPassword(value);
                                            handlePasswordValidation(value);
                                        }}
                                        className='signup-input shadow-input'
                                        placeholder="enter your Password"
                                    />

                                    <span onClick={() => setShowPassword(!showPassword)} className='absolute right-[5%] top-1/2 cursor-pointer text-primary'>{showPassword ? <Eye /> : <EyeOff />}</span>
                                </div>

                                <p className={`text-[16px] ${passwordColor} mt-1`}>{passwordMsz}</p>

                                {/* firebase error msz */}
                                {firebaseErr && (
                                    <p className='text-[16px] mt-1 text-red-500'>
                                        {firebaseErr}
                                    </p>
                                )}

                                <p className='text-black text-[16px] mt-5 font-regular capitalize'>Forgot password?</p>

                                <button
                                    className="p-3.5 capitalize text-[18px] font-semibold text-white bg-primary cursor-pointer my-[40px_20px]"
                                >
                                    sign in
                                </button>

                                {/* divider */}
                                <div className="form-divider mb-5 flex justify-center items-center gap-2">
                                    <div className='h-px w-16 bg-accent/70'></div>
                                    <span className='text-[15px] text-accent font-normal capitalize'>or</span>
                                    <div className='h-px w-16 bg-accent/70'></div>
                                </div>

                                {/* google sign in button */}
                                <button
                                    type='button'
                                    onClick={handleGoogleSignIn}
                                    className="p-3.5 capitalize text-[18px] font-semibold bg-white text-black border box-border border-[#e5e5e5] hover:shadow-xl/5 flex justify-center items-center gap-2.5 mb-5 cursor-pointer"
                                >
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