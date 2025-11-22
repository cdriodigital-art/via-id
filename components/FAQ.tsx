import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Como recebo minhas comissões?",
    answer: "As comissões são apuradas mensalmente e pagas via transferência bancária ou PIX na conta informada no momento do cadastro, sempre até o dia 10 do mês subsequente."
  },
  {
    question: "Preciso ter CNPJ para ser parceiro?",
    answer: "Não obrigatoriamente. Aceitamos parceiros Pessoa Física (CPF) e Pessoa Jurídica (CNPJ). No entanto, para grandes volumes, ter um CNPJ pode ser fiscalmente mais vantajoso para você."
  },
  {
    question: "Quem faz a videoconferência?",
    answer: "A equipe da VIA ID cuida de toda a parte técnica. Você realiza a venda e o agendamento, e nós realizamos a validação por videoconferência com o cliente."
  },
  {
    question: "Como funciona o repasse da diferença de valor?",
    answer: "Se você vender um eCPF por R$ 220 (sendo o custo base R$ 180), os R$ 40 de diferença são repassados integralmente a você junto com sua comissão de tabela no fechamento mensal."
  },
  {
    question: "Quais os tipos de clientes que posso indicar?",
    answer: "Qualquer pessoa ou empresa que precise de Certificado Digital: Advogados, Médicos, Empresas de todos os portes, MEIs, Condomínios, etc."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Perguntas Frequentes</h2>
          <p className="mt-4 text-gray-500">Tire suas dúvidas sobre o modelo de parceria.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-brand-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};