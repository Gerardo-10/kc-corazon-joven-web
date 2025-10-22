import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { WhatIDo } from './components/WhatIDo';
import { Contact } from './components/Contact';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Hero onNavigate={handleNavigate} />;
      case 'about':
        return <AboutMe />;
      case 'what-i-do':
        return <WhatIDo />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      
      <main className="min-h-screen">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}
