import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Process } from './components/Process';
import { Commissions } from './components/Commissions';
import { ProfitSimulator } from './components/ProfitSimulator';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Process />
        <Commissions />
        <ProfitSimulator />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;