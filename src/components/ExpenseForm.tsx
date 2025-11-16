
import React, { useState, useEffect } from 'react';
import type { Expense } from '../types';

interface ExpenseFormProps {
  onAddExpense: (description: string, amount: number) => void;
  onUpdateExpense: (expense: Expense) => void;
  editingExpense: Expense | null;
  onCancelEdit: () => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense, onUpdateExpense, editingExpense, onCancelEdit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number | string>('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingExpense) {
      setDescription(editingExpense.description);
      setAmount(editingExpense.amount);
    } else {
      setDescription('');
      setAmount('');
    }
    setError('');
  }, [editingExpense]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || !amount || Number(amount) <= 0) {
      setError('Deskripsi dan jumlah harus diisi, dan jumlah harus lebih dari 0.');
      return;
    }
    setError('');

    if (editingExpense) {
      onUpdateExpense({ ...editingExpense, description, amount: Number(amount) });
    } else {
      onAddExpense(description, Number(amount));
    }
    setDescription('');
    setAmount('');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        {editingExpense ? 'Edit Pengeluaran' : 'Tambah Pengeluaran Baru'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Deskripsi Pengeluaran
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., Beli Sepatu"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Jumlah (Rp)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
            placeholder="e.g., 100000"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex items-center space-x-4">
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-200 ease-in-out transform hover:scale-105"
          >
            {editingExpense ? 'Update Pengeluaran' : 'Simpan Pengeluaran'}
          </button>
          {editingExpense && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="w-full bg-gray-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition"
            >
              Batal
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
