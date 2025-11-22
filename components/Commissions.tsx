import React from 'react';
import { COMMISSION_DATA, PRICES } from '../types';
import { Check, Star } from 'lucide-react';

export const Commissions: React.FC = () => {
  return (
    <section id="comissoes" className="py-20 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Pricing Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Preços Oficiais Fixos</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Estes são os valores base que repassamos para a VIA ID. 
              <span className="text-brand-accent font-bold"> Tudo que você vender acima disso é 100% seu.</span>
            </p>

            <div className="grid gap-6 mb-12">
              <div className="bg-brand-800 p-6 rounded-xl border border-brand-600 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">eCPF A1</h3>
                  <span className="text-sm text-gray-400">Validade 1 ano</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 uppercase block">Custo Base</span>
                  <span className="text-3xl font-bold text-white">R$ {PRICES.eCPF}</span>
                </div>
              </div>

              <div className="bg-brand-800 p-6 rounded-xl border border-brand-600 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">eCNPJ A1</h3>
                  <span className="text-sm text-gray-400">Validade 1 ano</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 uppercase block">Custo Base</span>
                  <span className="text-3xl font-bold text-white">R$ {PRICES.eCNPJ}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-600 to-brand-500 p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Star className="text-yellow-300 w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Bônus para Contadores</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm font-medium">
                      <Check className="w-4 h-4 mr-2 text-white" />
                      50% OFF no eCPF após 40 emissões/trimestre
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <Check className="w-4 h-4 mr-2 text-white" />
                      100% OFF no eCNPJ do escritório após 150 emissões/trimestre
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Commission Table */}
          <div>
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-brand-900">Tabela de Comissões</h3>
                <p className="text-gray-500 text-sm mt-1">Quanto mais você emite, mais você ganha por unidade.</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider">
                      <th className="p-4 font-semibold">Nível</th>
                      <th className="p-4 font-semibold">Emissões/Mês</th>
                      <th className="p-4 font-semibold text-brand-600">Comissão eCPF</th>
                      <th className="p-4 font-semibold text-brand-600">Comissão eCNPJ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {COMMISSION_DATA.map((row, idx) => (
                      <tr 
                        key={row.level} 
                        className={`hover:bg-blue-50 transition-colors ${idx === 4 ? 'bg-brand-50' : ''}`}
                      >
                        <td className="p-4 font-bold text-brand-900">
                          {idx === 4 && <Star className="inline w-3 h-3 mr-1 text-brand-accent fill-current" />}
                          Nível {row.level}
                        </td>
                        <td className="p-4 text-gray-600 font-medium">{row.range}</td>
                        <td className="p-4 font-bold text-brand-600">R$ {row.cpfCommission}</td>
                        <td className="p-4 font-bold text-brand-600">R$ {row.cnpjCommission}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 text-xs text-gray-500 text-center">
                * Valores referentes à comissão fixa por emissão. O lucro sobre o preço de venda é extra.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};