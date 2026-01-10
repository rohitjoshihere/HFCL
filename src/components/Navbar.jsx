import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-side">
                    {/* <div className="logo"> */}
                    <svg width="54" height="16" viewBox="0 0 54 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6927 9.19174H3.3809V15.9108H0V0.0880127H3.3809V5.81074H10.6927V0.13098H14.0952V15.9108H10.6927V9.19174Z" fill="#390F8F" />
                        <path d="M18.5353 13.0171V15.955H15.1787V0.110748H26.6883V3.02716H18.5353V6.5854H25.7393V9.65758H18.5353V13.0171Z" fill="#390F8F" />
                        <path d="M34.7317 16C30.3128 16 26.7324 12.4203 26.7324 8C26.7324 3.57973 30.3128 0 34.7317 0C37.7594 0 40.3207 1.67842 41.6688 4.08728C40.3207 4.79355 40.2102 4.86069 38.7085 5.58845C37.9347 4.24035 36.433 3.31386 34.7317 3.31386C32.1462 3.31386 30.0486 5.43538 30.0486 8C30.0486 10.5646 32.1462 12.6835 34.7317 12.6835C36.5004 12.6835 38.0452 11.7328 38.8406 10.2316C40.3423 11.005 40.3881 11.0937 41.8009 11.7355C40.4528 14.2759 37.8457 16 34.7317 16Z" fill="#390F8F" />
                        <path d="M42.5078 15.8449V0.110748H45.9103V12.9258H53.9986V15.8449H42.5078Z" fill="#390F8F" />
                    </svg>
                    {/* </div> */}

                    <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                        <li>
                            Products <ChevronDown size={16} />
                        </li>
                        <li>
                            Solutions <ChevronDown size={16} />
                        </li>
                        <li>
                            Insights <ChevronDown size={16} />
                        </li>
                        <li>
                            Company <ChevronDown size={16} />
                        </li>
                    </ul>
                </div>

                <div className="nav-actions">
                    <Search size={20} className="search-icon" />
                    <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
