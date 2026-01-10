import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Advantage from './components/Advantage';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import Agility from './components/Agility';
import Insights from './components/Insights';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Advantage />
        <Features />
        <Portfolio />
        <HowItWorks />
        <Agility />
        <Insights />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
