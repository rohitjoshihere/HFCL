import React from 'react';
import { Linkedin, Instagram, Facebook, Youtube, Twitter, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-v2">
            <div className="section-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">HFCL</div>
                        <h2>Over 35 years meeting the world's networking challenges head on</h2>

                        <div className="social-links-area">
                            <p>Connect with us on Socials</p>
                            <div className="social-icons">
                                <a href="#"><Linkedin size={20} /></a>
                                <a href="#"><Instagram size={20} /></a>
                                <a href="#"><Facebook size={20} /></a>
                                <a href="#"><Youtube size={20} /></a>
                                <a href="#"><Twitter size={20} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-column">
                            <h4>Products</h4>
                            <div className="footer-sub-grid">
                                <div>
                                    <h5>Fiber optics <ArrowRight size={14} /></h5>
                                    <a href="#">Optical Fiber Cables</a>
                                    <a href="#">Optical Fiber</a>
                                </div>
                                <div>
                                    <h5>Access <ArrowRight size={14} /></h5>
                                    <a href="#">Unlicensed Band Backhaul Radios</a>
                                    <a href="#">WiFi Access Points</a>
                                    <a href="#">Routers</a>
                                    <a href="#">Managed Switches</a>
                                    <a href="#">Antennas</a>
                                </div>
                                <div>
                                    <h5>5G <ArrowRight size={14} /></h5>
                                    <a href="#">RAN</a>
                                    <a href="#">Transport</a>
                                    <a href="#">Last Mile</a>
                                    <a href="#">5G Lab as a service</a>
                                    <a href="#">Private 5G Network</a>
                                    <a href="#">5G Integration Services</a>
                                </div>
                                <div>
                                    <h5>Interconnect Solutions <ArrowRight size={14} /></h5>
                                    <a href="#">High Density Cabinets</a>
                                    <a href="#">Joint Closures</a>
                                    <a href="#">Optical Splitters</a>
                                    <a href="#">Aerial Cable Accessories</a>
                                    <a href="#">Fiber Optic Cable Assemblies</a>
                                    <a href="#">Copper Cable Assemblies</a>
                                </div>
                                <div>
                                    <h5>Defense <ArrowRight size={14} /></h5>
                                    <a href="#">Electronic Fuzes</a>
                                    <a href="#">Electro Optics</a>
                                    <a href="#">Software Defined Radios</a>
                                    <a href="#">High Capacity Radios</a>
                                    <a href="#">Ground-Surveillance Radar</a>
                                </div>
                            </div>
                            <a href="#" className="all-products">All products (A-Z) <ArrowRight size={14} /></a>
                        </div>

                        <div className="footer-column">
                            <h4>Solutions</h4>
                            <div className="footer-link-group">
                                <h5>Telecom providers <ArrowRight size={14} /></h5>
                                <a href="#">Backhaul Solutions</a>
                                <a href="#">FTTx Solutions</a>
                                <a href="#">Access & Aggregation</a>
                                <a href="#">Last Mile Solutions</a>
                                <a href="#">Unified Cloud Management</a>
                            </div>
                            <div className="footer-link-group">
                                <h5>Government & Public sector <ArrowRight size={14} /></h5>
                                <a href="#">Rural Broadband</a>
                                <a href="#">Railway Communications</a>
                                <a href="#">Defense Communications</a>
                            </div>
                            <div className="footer-link-group">
                                <h5>Enterprises <ArrowRight size={14} /></h5>
                                <a href="#">Industry 4.0</a>
                                <a href="#">Access Network</a>
                                <a href="#">Datacenter Interconnect</a>
                                <a href="#">Wireless Connectivity</a>
                            </div>
                        </div>

                        <div className="footer-column">
                            <h4>Company</h4>
                            <a href="#">About us <ArrowRight size={14} /></a>
                            <a href="#">Careers <ArrowRight size={14} /></a>
                            <a href="#">Investor relations <ArrowRight size={14} /></a>
                            <div className="misc-links">
                                <a href="#">Social Responsibility</a>
                                <a href="#">Events</a>
                                <a href="#">Partners</a>
                                <a href="#">Leadership</a>
                                <a href="#">Contact</a>
                            </div>

                            <h4 style={{ marginTop: '4rem' }}>Insights</h4>
                            <a href="#">All Insights <ArrowRight size={14} /></a>
                            <div className="misc-links">
                                <a href="#">Blogs</a>
                                <a href="#">News</a>
                                <a href="#">Case Studies</a>
                                <a href="#">White Papers</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>HFCL © 2024 All rights reserved</p>
                    <div className="legal-links">
                        <a href="#">E-Waste Management</a>
                        <a href="#">Public Notice</a>
                        <a href="#">Privacy policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
