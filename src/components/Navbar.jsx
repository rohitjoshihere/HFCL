import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [aboutUsOpen, setAboutUsOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [insightsOpen, setInsightsOpen] = useState(false);

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
                    <svg width="54" height="16" viewBox="0 0 54 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6927 9.19174H3.3809V15.9108H0V0.0880127H3.3809V5.81074H10.6927V0.13098H14.0952V15.9108H10.6927V9.19174Z" fill="#390F8F" />
                        <path d="M18.5353 13.0171V15.955H15.1787V0.110748H26.6883V3.02716H18.5353V6.5854H25.7393V9.65758H18.5353V13.0171Z" fill="#390F8F" />
                        <path d="M34.7317 16C30.3128 16 26.7324 12.4203 26.7324 8C26.7324 3.57973 30.3128 0 34.7317 0C37.7594 0 40.3207 1.67842 41.6688 4.08728C40.3207 4.79355 40.2102 4.86069 38.7085 5.58845C37.9347 4.24035 36.433 3.31386 34.7317 3.31386C32.1462 3.31386 30.0486 5.43538 30.0486 8C30.0486 10.5646 32.1462 12.6835 34.7317 12.6835C36.5004 12.6835 38.0452 11.7328 38.8406 10.2316C40.3423 11.005 40.3881 11.0937 41.8009 11.7355C40.4528 14.2759 37.8457 16 34.7317 16Z" fill="#390F8F" />
                        <path d="M42.5078 15.8449V0.110748H45.9103V12.9258H53.9986V15.8449H42.5078Z" fill="#390F8F" />
                    </svg>
                    {/* </div> */}

                    <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                        <li
                            className="dropdown-trigger"
                            onMouseEnter={() => setAboutUsOpen(true)}
                            onMouseLeave={() => setAboutUsOpen(false)}
                            onClick={() => toggleDropdown(setAboutUsOpen)}
                        >
                            About Us <ChevronDown size={16} />
                            {aboutUsOpen && (
                                <div className="dropdown-menu about-dropdown">
                                    <ul>
                                        <li>
                                            <a href="https://www.hfcl.com/our-business" target="_blank" rel="noopener noreferrer">Our Businesses</a>
                                        </li>
                                        <li>
                                            <a href="https://www.hfcl.com/operations" target="_blank" rel="noopener noreferrer">Our Facilities</a>
                                        </li>
                                        <li>
                                            <a href="https://www.hfcl.com/management-teams" target="_blank" rel="noopener noreferrer">Leadership Team</a>
                                        </li>
                                        <li>
                                            <a href="https://www.hfcl.com/csr" target="_blank" rel="noopener noreferrer">Corporate Social Responsibility</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className="dropdown-trigger"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                            onClick={() => toggleDropdown(setProductsOpen)}
                        >
                            Products <ChevronDown size={16} />
                            {productsOpen && (
                                <div className="dropdown-menu products-dropdown">
                                    <div className="dropdown-column">
                                        <h4>Fiber Optics</h4>
                                        <ul>
                                            <li><a href="https://www.hfcl.com/optical-fiber-cable/underground-cables">Optical Fiber Cables</a></li>
                                            <li><a href="https://www.hfcl.com/optical-fiber-cable/microduct-cable">Microduct Cable</a></li>
                                            <li><a href="https://www.hfcl.com/optical-fiber-cable/advisor">Advisor <span className="new-tag">NEW</span></a></li>
                                            <li><a href="https://www.hfcl.com/optical-fiber-cable">Optical Fiber</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-column">
                                        <h4>Telecommunication</h4>
                                        <ul>
                                            <li><a href="https://www.hfcl.com/telecommunication">Unlicensed Band Backhaul</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication">Radios</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication">WiFi Access Points</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication">Routers</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication">Managed Switches</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication">Accessories</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication">Network Management Solution</a></li>
                                            <li><a href="https://www.hfcl.com/telecommunication">5G Product Portfolio</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-column">
                                        <h4>Defence</h4>
                                        <ul>
                                            <li><a href="https://www.hfcl.com/defence">Electronic Fuzes</a></li>
                                            <li><a href="https://www.hfcl.com/defence">Electro Optics</a></li>
                                            <li><a href="https://www.hfcl.com/defence">High Capacity Radio Relay</a></li>
                                            <li><a href="https://www.hfcl.com/defence">Software Defined Radios</a></li>
                                            <li><a href="https://www.hfcl.com/defence">Ground Surveillance Radar</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-column">
                                        <h4>Passive Networking Components</h4>
                                        <ul>
                                            <li><a href="https://www.hfcl.com/passive-networking-components/high-density-cabinets">High Density Cabinets</a></li>
                                            <li><a href="https://www.hfcl.com/passive-networking-components">Joint Closures</a></li>
                                            <li><a href="https://www.hfcl.com/passive-networking-components">Optical Splitters</a></li>
                                            <li><a href="https://www.hfcl.com/passive-networking-components">Aerial Cable Accessories</a></li>
                                            <li><a href="https://www.hfcl.com/passive-networking-components/fiber-optic-cable-assemblies">Fiber Optic Cable Assemblies</a></li>
                                            <li><a href="https://www.hfcl.com/passive-networking-components/copper-cable-assemblies">Copper Cable Assemblies</a></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li>
                            <a target="_blank" href="https://www.hfcl.com/system-integration">Network Solutions</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.hfcl.com/company-facts">Investors</a>
                        </li>
                        <li
                            className="dropdown-trigger"
                            onMouseEnter={() => setInsightsOpen(true)}
                            onMouseLeave={() => setInsightsOpen(false)}
                            onClick={() => toggleDropdown(setInsightsOpen)}
                        >
                            Insights <ChevronDown size={16} />
                            {insightsOpen && (
                                <div className="dropdown-menu insights-dropdown">
                                    <ul>
                                        <li><a href="https://www.hfcl.com/insights/case-studies">Case Studies</a></li>
                                        <li><a href="https://www.hfcl.com/insights/news-events">News & Events</a></li>
                                        <li><a href="https://www.hfcl.com/insights/newsletters">Newsletters</a></li>
                                        <li><a href="https://www.hfcl.com/insights/blogs">Blogs</a></li>
                                        <li><a href="https://www.hfcl.com/insights/white-papers">White Papers</a></li>
                                        <li><a href="https://www.hfcl.com/insights/webinars">Webinars</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <a target="_blank" href="https://www.hfcl.com/careers">Careers</a>
                        </li>
                        <li>
                            <a href="https://www.hfcl.com/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</a>
                        </li>
                    </ul>


                </div>

                <div className="nav-actions">
                    <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>
                <span className='nav-search-icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.319 15.9075C19.7628 12.769 19.542 8.22834 16.6569 5.34316C13.5327 2.21896 8.46734 2.21896 5.34315 5.34316C2.21895 8.46735 2.21895 13.5327 5.34315 16.6569C8.22833 19.542 12.769 19.7628 15.9075 17.319C15.921 17.3343 15.9351 17.3493 15.9497 17.364L20.1924 21.6066C20.5829 21.9971 21.2161 21.9971 21.6066 21.6066C21.9971 21.2161 21.9971 20.5829 21.6066 20.1924L17.364 15.9498C17.3493 15.9351 17.3343 15.921 17.319 15.9075ZM15.2426 6.75737C17.5858 9.10052 17.5858 12.8995 15.2426 15.2427C12.8995 17.5858 9.1005 17.5858 6.75736 15.2427C4.41421 12.8995 4.41421 9.10052 6.75736 6.75737C9.1005 4.41423 12.8995 4.41423 15.2426 6.75737Z" fill="#141414" />
                    </svg>
                </span>

            </div>
        </nav>
    );
};

export default Navbar;
