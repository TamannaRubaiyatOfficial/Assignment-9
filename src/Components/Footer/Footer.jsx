import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import footerLogo from '../../assets/WarmPaws-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <MainContainer className='bg-base-300 xl:py-[100px] text-white text-[18px] font-medium flex justify-between items-start gap-11'>

                {/* container-1 : logo & about */}
                <div className='w-6/12 space-y-8'>
                    <div className="w-1/2">
                        <img className='w-full' src={footerLogo} alt="Warm Paws White Logo" />
                    </div>
                    <div className="font-normal">
                        <p>
                            Warm Paws is a warm, welcoming space built for everyone who believes pets aren’t just animals—they’re family. We bring together thoughtfully curated pet essentials, expert guidance, and a friendly community experience to make pet parenting easier, happier, and more meaningful.
                            Our goal is simple: to support you in giving your pets the comfort, care, and love they deserve. From everyday tips and product recommendations to reliable resources for healthier, cozier pet lifestyles, Warm Paws is here to walk beside you every step of the way.
                        </p>
                    </div>
                </div>

                {/* container-2 : page links */}
                <div className='w-3/12 capitalize'>
                    <h3 className='font-semibold text-[30px] mb-5'>links</h3>
                    <ul className='space-y-2.5'>
                        <li className='cursor-pointer'>services</li>
                        <li className='cursor-pointer'>Shop</li>
                        <li className='cursor-pointer'>About Us</li>
                        <li className='cursor-pointer'>terms & conditions</li>
                        <li className='cursor-pointer'>privacy policy</li>
                    </ul>
                </div>

                {/* container-3 : social links */}
                <div className='w-3/12 capitalize'>
                    <h3 className='font-semibold text-[30px] mb-5'>contact us</h3>
                    <ul className='space-y-2.5'>
                        <li>
                            <a href="#">
                                email :
                                <span className='lowercase ml-1'>
                                    admin@warmpaws.com
                                </span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Phone : +8801834-######
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Whatsapp : +8801834-######
                            </a>
                        </li>
                    </ul>

                    <ul className='flex justify-start items-center gap-2.5 mt-10'>
                        <li className='cursor-pointer hover:scale-115 text-xl transition-all'><FontAwesomeIcon icon={faFacebook} /></li>
                        <li className='cursor-pointer hover:scale-115 text-xl transition-all'><FontAwesomeIcon icon={faYoutube} /></li>
                        <li className='cursor-pointer hover:scale-115 text-xl transition-all'><FontAwesomeIcon icon={faXTwitter} /></li>
                        <li className='cursor-pointer hover:scale-115 text-xl transition-all'><FontAwesomeIcon icon={faInstagram} /></li>
                    </ul>
                </div>

            </MainContainer>

            <MainContainer className='bg-base-300 xl:py-4 text-white/80 text-[18px] font-light capitalize text-center'>
                <p>Warm Paws © 2025. All Rights Reserved.</p>
            </MainContainer>
        </>
    );
};

export default Footer;