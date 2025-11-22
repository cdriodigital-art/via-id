import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-900 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-600 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-900 to-transparent z-10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-accent opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-800 border border-brand-600 mb-6">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider mr-2">Novo</span>
              <span className="text-gray-300 text-sm">Programa de Parceria 2025 Aberto</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Transforme sua rede de contatos em <span className="text-brand-accent">Lucro Recorrente</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Indique ou venda Certificados Digitais eCPF e eCNPJ com a VIA ID. 
              Sem burocracia, comissões mensais e flexibilidade total de preço.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="#cadastro" 
                className="inline-flex items-center justify-center bg-brand-accent hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all text-lg"
              >
                Quero ser Parceiro
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#simulador" 
                className="inline-flex items-center justify-center bg-brand-800 hover:bg-brand-700 border border-brand-600 text-white font-semibold py-4 px-8 rounded-xl transition-all"
              >
                Simular Lucros
              </a>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-brand-accent mr-2" />
                <span>Atendimento 100% Online</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-brand-accent mr-2" />
                <span>Pagamento Mensal</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-brand-accent mr-2" />
                <span>Sem Burocracia</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
             {/* Abstract Representation of Profit/Dashboard */}
             <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 -right-4 bg-brand-accent text-white px-4 py-2 rounded-lg shadow-lg font-bold z-20">
                  Comissão + 100% do Excedente
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <div className="h-4 w-24 bg-gray-600 rounded"></div>
                    <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="h-32 bg-gray-700/50 rounded-lg flex items-end justify-around p-4 pb-0">
                    <div className="w-12 h-16 bg-brand-600/50 rounded-t"></div>
                    <div className="w-12 h-24 bg-brand-600/70 rounded-t"></div>
                    <div className="w-12 h-20 bg-brand-600/60 rounded-t"></div>
                    <div className="w-12 h-32 bg-brand-accent rounded-t shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                  </div>
                  <div className="flex justify-between text-white pt-2">
                    <span className="text-sm text-gray-400">Receita Total</span>
                    <span className="text-xl font-bold text-brand-accent">R$ 4.250,00</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};