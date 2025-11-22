export interface CommissionLevel {
  level: number;
  range: string;
  cpfCommission: number;
  cnpjCommission: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const COMMISSION_DATA: CommissionLevel[] = [
  { level: 1, range: "1 – 10", cpfCommission: 3, cnpjCommission: 8 },
  { level: 2, range: "11 – 20", cpfCommission: 5, cnpjCommission: 12 },
  { level: 3, range: "21 – 40", cpfCommission: 7, cnpjCommission: 16 },
  { level: 4, range: "41 – 80", cpfCommission: 10, cnpjCommission: 20 },
  { level: 5, range: "81+", cpfCommission: 12, cnpjCommission: 25 },
];

export const PRICES = {
  eCPF: 180,
  eCNPJ: 250
};