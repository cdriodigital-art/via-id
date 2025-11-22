import React from 'react';
import { Zap, Globe, TrendingUp, UserCheck, DollarSign, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Sem Burocracia",
    description: "Cadastro rápido e simplificado para você começar a vender e lucrar imediatamente."
  },
  {
    icon: Globe,
    title: "100% Online",
    description: "Todo o processo, desde a venda até a emissão por videoconferência, é feito remotamente."
  },
  {
    icon: TrendingUp,
    title: "Defina Seu Preço",
    description: "Temos um preço base fixo. Você pode cobrar o valor que desejar e fica com a diferença."
  },
  {
    icon: UserCheck,
    title: "Gestão Completa",
    description: "Nós cuidamos da validação e emissão. Você foca apenas em trazer o cliente."
  },
  {
    icon: DollarSign,
    title: "Pagamento Mensal",
    description: "Receba suas comissões religiosamente todo mês, sem atrasos ou surpresas."
  },
  {
    icon: Shield,
    title: "Confiabilidade VIA ID",
    description: "Trabalhe com uma marca sólida que garante a segurança dos dados dos seus clientes."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Por que ser parceiro?</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Vantagens exclusivas para você decolar
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Criamos um modelo de negócio onde você tem liberdade, suporte e alta rentabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-100 text-brand-600 mb-6 bg-blue-50">
                <item.icon className="h-6 w-6 text-brand-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};