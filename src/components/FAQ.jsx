import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="faq-question" onClick={onClick}>
                <h3>{question}</h3>
                {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            <div className="faq-answer">
                <p>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How does HFCL's DCI solution support high-capacity and low-latency networks?",
            answer: "HFCL's Data Center Interconnect solutions are designed to enable seamless high-speed connectivity between data centers. With advanced optical fiber cabling, breakout assemblies, and scalable interconnect systems, HFCL ensures high-capacity data transfer, low latency, and reliable network performance for hyperscale cloud operators, telecom providers, and large enterprises."
        },
        {
            question: "What is Data Center Interconnect (DCI) and why is it critical for businesses?",
            answer: "Data Center Interconnect (DCI) connects multiple data centers to enable secure, high-speed, and low-latency data transfer. It ensures business continuity, disaster recovery, and efficient workload management, making it essential for enterprises, cloud operators, and financial institutions operating in a globally distributed network environment."
        },
        {
            question: "Which industries benefit most from DCI solutions?",
            answer: "DCI solutions are vital for hyperscale cloud operators, telecom networks managing 5G core and backhaul traffic, financial institutions requiring secure and low-latency connectivity, and large enterprises with multiple data centers. These industries rely on DCI to optimize bandwidth, improve reliability, and maintain uninterrupted services."
        },
        {
            question: "How do DCI solutions enhance network scalability and reliability?",
            answer: "DCI solutions enable organizations to scale their network infrastructure efficiently while maintaining high performance. By optimizing data flow, reducing latency, and supporting high-density optical connectivity, HFCL's DCI solutions ensure resilient, future-proof networks capable of handling growing workloads and complex cross-border traffic."
        }
    ];

    return (
        <section className="faq-section">
            <div className="section-container">
                <h2 className="faq-title">FAQs</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
