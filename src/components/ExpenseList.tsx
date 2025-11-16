
import React from 'react';
import type { Expense } from '../types';
import ExpenseItem from './ExpenseItem';

interface ExpenseListProps {
  expenses: Expense[];
  onEditExpense: (expense: Expense) => void;
  onDeleteExpense: (id: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onEditExpense, onDeleteExpense }) => {
  if (expenses.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col justify-center items-center text-center min-h-[200px]">
        <h3 className="text-xl font-semibold text-gray-800">Daftar Pengeluaran</h3>
        <p className="text-gray-500 mt-4">Belum ada pengeluaran yang dicatat. Silakan tambahkan pengeluaran baru.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 mt-4"><path d="M20 13.54v-3.54A4.01 4.01 0 0016 6a4 4 0 00-4-4 4 4 0 00-4 4 4 4 0 00-4 4v3.54a4 4 0 000 7.48V22h16v-1.98a4.01 4.01 0 000-7.48zM9 18H8v-2h1v2zm4 0h-1v-2h1v2zm3 0h-1v-2h1v2z"/></svg>
      </div>
    );
  }

  // Mengurutkan pengeluaran agar yang terbaru muncul di atas
  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Daftar Pengeluaran</h3>
      <ul className="space-y-3">
        {sortedExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onEdit={onEditExpense}
            onDelete={onDeleteExpense}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
