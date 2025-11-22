import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Comissões', href: '#comissoes' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <ShieldCheck className={`h-8 w-8 ${scrolled ? 'text-brand-600' : 'text-white'}`} />
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-brand-900' : 'text-white'}`}>
              VIA ID
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${scrolled ? 'text-gray-600 hover:text-brand-600' : 'text-gray-200 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cadastro"
              className="bg-brand-accent hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Seja Parceiro
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cadastro"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-brand-accent text-white px-4 py-3 rounded-md font-bold"
            >
              Seja Parceiro Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};