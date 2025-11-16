
import React from 'react';

interface SpendingVisualProps {
  salary: number;
  totalExpenses: number;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};


const SpendingVisual: React.FC<SpendingVisualProps> = ({ salary, totalExpenses }) => {
  const percentageSpent = salary > 0 ? (totalExpenses / salary) * 100 : 0;
  
  let progressBarColor = 'bg-green-500';
  if (percentageSpent > 75) {
    progressBarColor = 'bg-red-500';
  } else if (percentageSpent > 50) {
    progressBarColor = 'bg-yellow-500';
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Ringkasan Pengeluaran</h3>
      <div className="flex justify-between items-center text-gray-600 mb-2">
        <span className="text-sm">Terpakai: {formatCurrency(totalExpenses)}</span>
        <span className="text-sm">Gaji: {formatCurrency(salary)}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div 
          className={`h-4 rounded-full transition-all duration-500 ease-out ${progressBarColor}`}
          style={{ width: `${Math.min(percentageSpent, 100)}%` }}
          role="progressbar"
          aria-valuenow={percentageSpent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Persentase pengeluaran dari gaji"
        ></div>
      </div>
       <p className="text-right text-lg font-bold mt-2 text-gray-700">
        {percentageSpent.toFixed(1)}% terpakai
       </p>
    </div>
  );
};

export default SpendingVisual;
