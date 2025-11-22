import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="cadastro" className="py-20 bg-brand-accent text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Pronto para começar a lucrar?
        </h2>
        <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
          Junte-se a centenas de parceiros que já transformaram sua rede de contatos em uma fonte de renda recorrente e segura.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto text-left">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Solicite contato de um consultor</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="Seu nome" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="(00) 00000-0000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="seu@email.com" />
            </div>
            <button type="submit" className="w-full bg-brand-900 hover:bg-brand-800 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center">
              Quero ser Parceiro <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Ao enviar, você concorda com nossa política de privacidade. Entraremos em contato em até 24h úteis.
          </p>
        </div>
      </div>
    </section>
  );
};