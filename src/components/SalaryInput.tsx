
import React, { useState, useEffect } from 'react';
import SaveIcon from './icons/SaveIcon';
import EditIcon from './icons/EditIcon';

interface SalaryInputProps {
  salary: number;
  onSetSalary: (amount: number) => void;
}

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

const SalaryInput: React.FC<SalaryInputProps> = ({ salary, onSetSalary }) => {
  const [isEditing, setIsEditing] = useState(salary === 0);
  const [currentSalary, setCurrentSalary] = useState<number | string>(salary);

  useEffect(() => {
    setCurrentSalary(salary);
    if (salary > 0) {
        setIsEditing(false);
    }
  }, [salary]);

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSalary(e.target.value === '' ? '' : Number(e.target.value));
  };

  const handleSaveSalary = () => {
    if(Number(currentSalary) >= 0) {
      onSetSalary(Number(currentSalary));
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveSalary();
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <label htmlFor="salary" className="block text-lg font-medium text-gray-700 mb-2">
        Gaji Bulanan Anda
      </label>
      {isEditing ? (
        <div className="flex items-center space-x-3">
          <span className="text-gray-500 font-semibold">Rp</span>
          <input
            type="number"
            id="salary"
            name="salary"
            value={currentSalary}
            onChange={handleSalaryChange}
            onKeyDown={handleKeyDown}
            placeholder="e.g., 2000000"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            aria-label="Input Gaji Bulanan"
            autoFocus
          />
          <button
            onClick={handleSaveSalary}
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105 flex items-center"
            aria-label="Simpan Gaji"
          >
            <SaveIcon className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <div className="mt-2 flex items-center justify-between space-x-3 bg-slate-50 p-3 rounded-lg">
          <p className="text-2xl font-bold text-gray-800">{formatCurrency(salary)}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="p-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105 flex items-center"
            aria-label="Ubah Gaji"
          >
            <EditIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SalaryInput;
