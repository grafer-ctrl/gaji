
import React from 'react';
import type { Expense } from '../types';
import EditIcon from './icons/EditIcon';
import DeleteIcon from './icons/DeleteIcon';

interface ExpenseItemProps {
  expense: Expense;
  onEdit: (expense: Expense) => void;
  onDelete: (id: string) => void;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, onEdit, onDelete }) => {
  return (
    <li className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition duration-200">
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-800 truncate" title={expense.description}>{expense.description}</p>
        <p className="text-sm text-gray-500">{new Date(expense.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4 ml-2 flex-shrink-0">
        <p className="font-semibold text-red-600 text-right w-24 md:w-32">{formatCurrency(expense.amount)}</p>
        <button
          onClick={() => onEdit(expense)}
          className="text-blue-500 hover:text-blue-700 p-2 rounded-full hover:bg-blue-100 transition"
          aria-label={`Edit ${expense.description}`}
        >
          <EditIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(expense.id)}
          className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition"
          aria-label={`Hapus ${expense.description}`}
        >
          <DeleteIcon className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
