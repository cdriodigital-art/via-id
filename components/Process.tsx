import React from 'react';
import { UserPlus, Video, Wallet } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Como funciona a parceria
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Três passos simples separam você dos seus lucros.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-1 bg-gray-100 z-0 w-2/3 mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-brand-600 rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                <UserPlus className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Você Vende</h3>
              <p className="text-gray-500 max-w-xs">
                Indique o cliente ou realize a venda direta cobrando o valor que desejar.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-brand-600 rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                <Video className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Nós Emitimos</h3>
              <p className="text-gray-500 max-w-xs">
                A VIA ID agenda e realiza a videoconferência para validação e emissão do certificado.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-brand-accent rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                <Wallet className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Você Recebe</h3>
              <p className="text-gray-500 max-w-xs">
                Receba sua comissão de tabela + <strong>100% da diferença</strong> se vendeu acima do preço base.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};