import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [aboutUsOpen, setAboutUsOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [insightsOpen, setInsightsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = (setter) => {
        if (window.innerWidth <= 900) {
            setter(prev => !prev);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-side">
                    {/* <div className="logo"> */}
                    <a href="/">    
                    <svg width="54" height="16" viewBox="0 0 54 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6927 9.19174H3.3809V15.9108H0V0.0880127H3.3809V5.81074H10.6927V0.13098H14.0952V15.9108H10.6927V9.19174Z" fill="#390F8F" />
                        <path d="M18.5353 13.0171V15.955H15.1787V0.110748H26.6883V3.02716H18.5353V6.5854H25.7393V9.65758H18.5353V13.0171Z" fill="#390F8F" />
                        <path d="M34.7317 16C30.3128 16 26.7324 12.4203 26.7324 8C26.7324 3.57973 30.3128 0 34.7317 0C37.7594 0 40.3207 1.67842 41.6688 4.08728C40.3207 4.79355 40.2102 4.86069 38.7085 5.58845C37.9347 4.24035 36.433 3.31386 34.7317 3.31386C32.1462 3.31386 30.0486 5.43538 30.0486 8C30.0486 10.5646 32.1462 12.6835 34.7317 12.6835C36.5004 12.6835 38.0452 11.7328 38.8406 10.2316C40.3423 11.005 40.3881 11.0937 41.8009 11.7355C40.4528 14.2759 37.8457 16 34.7317 16Z" fill="#390F8F" />
                        <path d="M42.5078 15.8449V0.110748H45.9103V12.9258H53.9986V15.8449H42.5078Z" fill="#390F8F" />
                    </svg>
                    </a>
                    {/* </div> */}

                    <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                        <li
                            className="dropdown-trigger"
                            onMouseEnter={() => window.innerWidth > 900 && setAboutUsOpen(true)}
                            onMouseLeave={() => window.innerWidth > 900 && setAboutUsOpen(false)}
                            onClick={() => toggleDropdown(setAboutUsOpen)}
                        >
                            About Us <ChevronDown size={16} />
                            {aboutUsOpen && (
                                <div className="dropdown-menu about-dropdown" onClick={(e) => e.stopPropagation()}>
                                    <ul>
                                        <li >
                                            <a href="https://www.hfcl.com/our-business" rel="noopener noreferrer">Our Businesses</a>
                                        </li>
                                        <li>
                                            <a href="https://www.hfcl.com/operations" rel="noopener noreferrer">Our Facilities</a>
                                        </li>
                                        <li>
                                            <a href="https://www.hfcl.com/management-teams" rel="noopener noreferrer">Leadership Team</a>
                                        </li>
                                        <li>
                                            <a href="https://www.hfcl.com/csr" rel="noopener noreferrer">Corporate Social Responsibility</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className="dropdown-trigger"
                            onMouseEnter={() => window.innerWidth > 900 && setProductsOpen(true)}
                            onMouseLeave={() => window.innerWidth > 900 && setProductsOpen(false)}
                            onClick={() => toggleDropdown(setProductsOpen)}
                        >
                            Products <ChevronDown size={16} />
                            {productsOpen && (
                                <div className="dropdown-menu products-dropdown" onClick={(e) => e.stopPropagation()}>
                                    <div className="dropdown-column">
                                        <ul>
                                            <h4> <a href="https://www.hfcl.com/ofc-landing">Fiber Optics</a></h4>
                                            <li><a href="https://www.hfcl.com/optical-fiber-cable/underground-cables">Optical Fiber Cables</a></li>
                                            <li><a href="https://www.hfcl.com/MicroCableSelector">Microduct Cable Advisor<span className="new-tag">NEW</span></a></li>
                                            <li><a href="https://www.hfcl.com/optical-fiber/flexi-bend">Optical Fiber</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-column">
                                        <ul>
                                            <h4> <a href="https://www.hfcl.com/communicationLanding">Telecommunication</a></h4>
                                            <li><a href="https://www.hfcl.com/telecommunication/unlicensed-band-backhaul-radios">Unlicensed Band Backhaul Radios</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication/wi-fi-access-points">WiFi Access Points</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication/routers">Routers</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication/managed-switches">Managed Switches</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication/antennas">Accessories</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication/network-management-solution">Network Management Solution</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication/5g-product-portfolio-">5G Product Portfolio</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-column">
                                        <ul>
                                            <h4> <a href="https://www.hfcl.com/defence-landing">Defence</a></h4>
                                            <li><a href="https://www.hfcl.com/defence/electronic-fuzes">Electronic Fuzes</a></li>
                                            <li><a href="https://www.hfcl.com/defence/electro-optics">Electro Optics</a></li>
                                            <li><a href="https://www.hfcl.com/defence/high-capacity-radio-relay">High Capacity Radio Relay</a></li>
                                            <li><a href="https://www.hfcl.com/defence/software-defined-radios">Software Defined Radios</a></li>
                                            <li><a href="https://www.hfcl.com/defence/ground-surveillance-radar">Ground Surveillance Radar</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-column">
                                        <ul>
                                            <h4> <a href="https://www.hfcl.com/passive-components-landing">Passive Networking Components</a></h4>
                                            <li><a href="https://www.hfcl.com/passive-networking-components/high-density-cabinets">High Density Cabinets</a></li>
                                            <li><a href="https://www.hfcl.com/passive-networking-components/joint-closures">Joint Closures</a></li>
                                            <li><a href="https://www.hfcl.com/passive-networking-components/optical-splitters">Optical Splitters</a></li>
                                            <li><a href="https://www.hfcl.com/passive-networking-components/aerial-cable-accessories">Aerial Cable Accessories</a></li>
                                            <li><a href="https://www.hfcl.com/passive-networking-components/fiber-optic-cable-assemblies">Fiber Optic Cable Assemblies</a></li>
                                            <li><a href="https://www.hfcl.com/passive-networking-components/copper-cable-assemblies">Copper Cable Assemblies</a></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li>
                            <a href="https://www.hfcl.com/system-integration">Network Solutions</a>
                        </li>
                        <li>
                            <a href="https://www.hfcl.com/company-facts">Investors</a>
                        </li>
                        <li
                            className="dropdown-trigger"
                            onMouseEnter={() => window.innerWidth > 900 && setInsightsOpen(true)}
                            onMouseLeave={() => window.innerWidth > 900 && setInsightsOpen(false)}
                            onClick={() => toggleDropdown(setInsightsOpen)}
                        >
                            Insights <ChevronDown size={16} />
                            {insightsOpen && (
                                <div className="dropdown-menu insights-dropdown" onClick={(e) => e.stopPropagation()}>
                                    <ul>
                                        <li><a href="https://www.hfcl.com/insights">Case Studies</a></li>
                                        <li><a href="https://www.hfcl.com/news">News & Events</a></li>
                                        <li><a href="https://www.hfcl.com/newsletter">Newsletters</a></li>
                                        <li><a href="https://www.hfcl.com/blog/">Blogs</a></li>
                                        <li><a href="https://www.hfcl.com/white-papers/">White Papers</a></li>
                                        <li><a href="https://www.hfcl.com/webinar/">Webinars</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <a href="https://www.hfcl.com/careers">Careers</a>
                        </li>
                        <li>
                            <a href="https://www.hfcl.com/contact-us" rel="noopener noreferrer">Contact Us</a>
                        </li>
                    </ul>


                </div>

                <div className="nav-actions">
                    <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
