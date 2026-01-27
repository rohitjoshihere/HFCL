import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Insights.css';
import ScrollReveal from './ScrollReveal';
import WordReveal from './WordReveal';

const Insights = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef(null);

    const slides = [
        {
            title: "U.S. Hyperscale Tech Giant Transforms Expansion with HFCL's Compact IBR Cable.",
            description: "HFCL's 864F IBR Micro Cable increased the network capacity by 2x without new infrastructure. Its compact, efficient design solves space and installation challenges while supporting sustainability goals. The deployment sets a benchmark for high-performance fiber in constrained environment.",
            image: "assets/bg3.jpg",
            alt: "IBR Cable"
        },
        {
            title: "Unleashing the Potential: Intermittent Bonded Ribbon Cable Use Cases in Data Centers",
            description: "Intermittently Bonded Ribbon (IBR) cables offer a range of benefits that make them an excellent choice to support such data center infrastructure growth. In this article, we will explore the various use cases of IBR cables in data centers and shed light on their application strengths and deployment best practices.",
            image: "assets/bg4.jpg",
            alt: "Data center server racks"
        }
    ];

    return (
        <section className="insights">
            <div className="section-container">
                <WordReveal
                    text="Insights"
                    delay={0.2}
                    staggerDelay={0.03}
                />

                <ScrollReveal delay={0.2}>
                    <div className="insights-slider-container">
                        <Swiper
                            modules={[Navigation]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            spaceBetween={20}
                            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                            speed={800}
                            loop={true}
                            className="insights-swiper"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="insights-feature-card">
                                        <div className="insights-content">
                                            <h3>{slide.title}</h3>
                                            <p>{slide.description}</p>
                                            <button onClick={() => window.open("https://www.hfcl.com/insights", '_blank')} className="read-more-btn">
                                                Read Case Study
                                                <div className="icon w-embed">
                                                    <svg width="100%" height="100%" viewBox="18 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path className="button_square" d="M18 4C18 1.79086 19.7909 0 22 0H38C40.2091 0 42 1.79086 42 4V20C42 22.2091 40.2091 24 38 24H22C19.7909 24 18 22.2091 18 20V4Z" fill="#FC5100"></path>
                                                        <path className="button_arrow arrow1" d="M36.6364 12.6364C36.9879 12.2849 36.9879 11.7151 36.6364 11.3636L30.9088 5.63604C30.5574 5.28457 29.9875 5.28457 29.636 5.63604C29.2846 5.98751 29.2846 6.55736 29.636 6.90883L34.7272 12L29.636 17.0912C29.2846 17.4426 29.2846 18.0125 29.636 18.364C29.9875 18.7154 30.5574 18.7154 30.9088 18.364L36.6364 12.6364ZM24 12.9H36V11.1H24V12.9Z" fill="white"></path>
                                                        <path className="button_arrow arrow2" d="M12.6364 12.6364C12.9879 12.2849 12.9879 11.7151 12.6364 11.3636L6.90883 5.63604C6.55736 5.28457 5.98751 5.28457 5.63604 5.63604C5.28457 5.98751 5.28457 6.55736 5.63604 6.90883L10.7272 12L5.63604 17.0912C5.28457 17.4426 5.28457 18.0125 5.63604 18.364C5.98751 18.7154 6.55736 18.7154 6.90883 18.364L12.6364 12.6364ZM0 12.9H12V11.1H0V12.9Z" fill="white"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="insights-image">
                                            <div className="cable-viz-placeholder">
                                                <img src={slide.image} alt={slide.alt} loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                    <div className="insights-nav">
                        <button
                            className="nav-btn"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <span className="nav-page">{currentIndex + 1} / {slides.length}</span>
                        <button
                            className="nav-btn"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Insights;

