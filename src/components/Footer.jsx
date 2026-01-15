import React from 'react';
import { Linkedin, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-new">
            <div className="footer-main">
                <div className="footer-container">
                    <div className="footer-grid">
                        {/* Useful Links Section */}
                        <div className="footer-section">
                            <h3>Useful Links</h3>
                            <div className="useful-links-grid">
                                <div className="links-col">
                                    <a href="#">&gt; About us</a>
                                    <a href="#">&gt; Products</a>
                                    <a href="#">&gt; Investors</a>
                                    <a href="#">&gt; E-waste Management</a>
                                    <a href="#">&gt; Public Notice</a>
                                </div>
                                <div className="links-col">
                                    <a href="#">&gt; News</a>
                                    <a href="#">&gt; Network Solutions</a>
                                    <a href="#">&gt; Join Us</a>
                                    <a href="#">&gt; Privacy Policy</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Us Section */}
                        <div className="footer-section">
                            <h3>Contact Us</h3>
                            <div className="contact-info">
                                <p>8, Commercial Complex, Masjid Moth, Greater Kailash-II, New Delhi-110048, India</p>
                                <p>Email: info@hfcl.com</p>
                                <p>Tel : +91-11-35209400/9500</p>
                                <p>Fax : +91-11-35209525</p>
                            </div>
                            <div className="social-links">
                                <a href="#" className="social-icon"><Linkedin size={18} /></a>
                                <a href="#" className="social-icon"><Instagram size={18} /></a>
                                <a href="#" className="social-icon"><Facebook size={18} /></a>
                                <a href="#" className="social-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="#" className="social-icon"><Youtube size={18} /></a>
                            </div>
                            <div className="linkedin-badge">
                                <div className="badge-header">
                                    <Linkedin size={14} fill="white" />
                                    <span>Follow</span>
                                </div>
                                <div className="badge-count">134,136</div>
                            </div>
                        </div>

                        {/* Find Us Section */}
                        <div className="footer-section">
                            <h3>Find Us</h3>
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6434446654005!2d77.23466107632669!3d28.55044438780718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ad598198f1%3A0x60064f27303f830c!2sHFCL%20Limited!5e0!3m2!1sen!2sin!4v1705330000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="180"
                                    style={{ border: 0, borderRadius: '4px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-bar">
                <p>&copy; Copyright 2024 HFCL - All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
