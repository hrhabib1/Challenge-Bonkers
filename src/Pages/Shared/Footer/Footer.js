import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <section className='p-10' style= {{
            background : `url(${logo})`,
            backgroundSize: 'cover'
        }}>
            <footer className="footer p-10">
                <div>
                    <span className="footer-title text-primary">SERVICES</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title text-primary">ORAL HEALTH</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title text-primary">OUR ADDRESS</span>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
            </footer>
            <div>
                <p className='text-center mt-10'><small>Copyright © 2022 - All right reserved by ACME Industries Ltd</small></p>
            </div>
        </section>
    );
};

export default Footer;