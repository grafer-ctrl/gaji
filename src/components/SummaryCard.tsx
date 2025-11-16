
import React from 'react';

interface SummaryCardProps {
  title: string;
  amount: number;
  colorClass: string;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

const SummaryCard: React.FC<SummaryCardProps> = ({ title, amount, colorClass }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex-1">
      <h2 className="text-lg font-medium text-gray-500">{title}</h2>
      <p className={`text-3xl font-bold mt-2 ${colorClass}`}>
        {formatCurrency(amount)}
      </p>
    </div>
  );
};

export default SummaryCard;
