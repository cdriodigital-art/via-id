import React from 'react';
import { ShieldCheck, Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-gray-300 py-12 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-8 w-8 text-white" />
              <span className="font-bold text-xl text-white">VIA ID</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Especialistas em Certificação Digital. Conectando pessoas e empresas com segurança e agilidade em todo o Brasil.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#comissoes" className="hover:text-white transition-colors">Tabela de Comissões</a></li>
              <li><a href="#simulador" className="hover:text-white transition-colors">Simulador de Lucro</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:parceria@viaid.com.br" className="hover:text-white">parceria@viaid.com.br</a>
              </li>
              {/* Social Icons Mockup */}
              <li className="flex gap-4 mt-4">
                <a href="#" className="hover:text-white"><Instagram size={20} /></a>
                <a href="#" className="hover:text-white"><Facebook size={20} /></a>
                <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} VIA ID Certificação Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};