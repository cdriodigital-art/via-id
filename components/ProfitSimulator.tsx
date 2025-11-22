import React, { useState } from 'react';
import { PRICES, COMMISSION_DATA } from '../types';

export const ProfitSimulator: React.FC = () => {
  const [salePriceCPF, setSalePriceCPF] = useState(220);
  const [salePriceCNPJ, setSalePriceCNPJ] = useState(350);
  const [volume, setVolume] = useState(20); // Default level 2/3 logic

  // Helper to find commission based on volume slider
  const getCommission = (vol: number) => {
    const level = COMMISSION_DATA.find(l => {
        if (l.range.includes('+')) return true;
        const [min, max] = l.range.split('–').map(s => parseInt(s.trim()));
        return vol >= min && vol <= max;
    }) || COMMISSION_DATA[COMMISSION_DATA.length - 1];
    return level;
  };

  const currentCommission = getCommission(volume);
  
  // Profit Logic: (Sale Price - Base Price) + Commission
  const profitPerCPF = (salePriceCPF - PRICES.eCPF) + currentCommission.cpfCommission;
  const profitPerCNPJ = (salePriceCNPJ - PRICES.eCNPJ) + currentCommission.cnpjCommission;
  
  // Assuming a mix of 50% CPF and 50% CNPJ for total simulation
  const totalProfit = Math.floor((profitPerCPF * (volume / 2)) + (profitPerCNPJ * (volume / 2)));

  return (
    <section id="simulador" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-600 text-sm font-bold uppercase tracking-wide mb-4">
            Poder da Precificação
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Quanto você quer ganhar?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Na VIA ID, você define o preço de venda. Veja como seu lucro pode triplicar ajustando o valor final.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-8 bg-brand-900 text-white">
             <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <p className="text-brand-accent font-bold uppercase tracking-wide text-sm">Lucro Estimado Mensal</p>
                    <div className="text-5xl font-bold mt-2">R$ {totalProfit.toLocaleString('pt-BR')}</div>
                    <p className="text-gray-400 text-sm mt-2">Com base em {volume} vendas/mês (50% CPF / 50% CNPJ)</p>
                </div>
                <div className="text-right hidden md:block">
                    <p className="text-sm text-gray-300">Nível Alcançado</p>
                    <div className="text-2xl font-bold text-white">Nível {currentCommission.level}</div>
                </div>
             </div>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-12">
            
            {/* Controls */}
            <div className="space-y-8">
              
              {/* Volume Slider */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Vendas por Mês</span>
                  <span className="font-bold text-brand-600">{volume} certificados</span>
                </label>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  step="5"
                  value={volume} 
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Iniciante</span>
                    <span>Expert</span>
                </div>
              </div>

              {/* Price CPF Slider */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Preço de Venda eCPF A1</span>
                  <span className="font-bold text-brand-600">R$ {salePriceCPF}</span>
                </label>
                <input 
                  type="range" 
                  min={PRICES.eCPF} 
                  max="350" 
                  step="5"
                  value={salePriceCPF} 
                  onChange={(e) => setSalePriceCPF(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Base: R$ {PRICES.eCPF}</span>
                    <span>Margem Extra: R$ {salePriceCPF - PRICES.eCPF}</span>
                </div>
              </div>

              {/* Price CNPJ Slider */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Preço de Venda eCNPJ A1</span>
                  <span className="font-bold text-brand-600">R$ {salePriceCNPJ}</span>
                </label>
                <input 
                  type="range" 
                  min={PRICES.eCNPJ} 
                  max="500" 
                  step="5"
                  value={salePriceCNPJ} 
                  onChange={(e) => setSalePriceCNPJ(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Base: R$ {PRICES.eCNPJ}</span>
                    <span>Margem Extra: R$ {salePriceCNPJ - PRICES.eCNPJ}</span>
                </div>
              </div>

            </div>

            {/* Breakdown */}
            <div className="bg-gray-50 rounded-xl p-6 space-y-6">
               <h3 className="font-bold text-gray-900">Detalhamento do Lucro Unitário</h3>
               
               {/* CPF Card */}
               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-800">eCPF A1</span>
                    <span className="text-green-600 font-bold text-lg">+ R$ {profitPerCPF}</span>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div className="flex justify-between">
                        <span>Diferença de Preço:</span>
                        <span>R$ {salePriceCPF - PRICES.eCPF}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Comissão Nível {currentCommission.level}:</span>
                        <span>R$ {currentCommission.cpfCommission}</span>
                    </div>
                  </div>
               </div>

               {/* CNPJ Card */}
               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-800">eCNPJ A1</span>
                    <span className="text-green-600 font-bold text-lg">+ R$ {profitPerCNPJ}</span>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div className="flex justify-between">
                        <span>Diferença de Preço:</span>
                        <span>R$ {salePriceCNPJ - PRICES.eCNPJ}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Comissão Nível {currentCommission.level}:</span>
                        <span>R$ {currentCommission.cnpjCommission}</span>
                    </div>
                  </div>
               </div>
               
               <div className="mt-4 text-center">
                  <a href="#cadastro" className="block w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-colors shadow-md">
                    Começar a Lucrar
                  </a>
               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};