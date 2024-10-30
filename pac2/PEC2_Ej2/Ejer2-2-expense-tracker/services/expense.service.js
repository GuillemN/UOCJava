import { Expense } from '../models/expense.model.js';

class ExpenseService {
  constructor() {
    this.expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  }

  addExpense(text, amount) {
    const expense = new Expense(text, amount); // Crea una nova instància d'Expense
    this.expenses.push(expense);
    this._commit();
  }

  // Afegim el mètode d'edició
  editExpense(id, newText, newAmount) {
    this.expenses = this.expenses.map(expense =>
      expense.id === Number(id)
        ? { ...expense, text: newText, amount: newAmount }
        : expense
    );
    this._commit();
  }

  deleteExpense(id) {
    this.expenses = this.expenses.filter(expense => expense.id !== Number(id));
    this._commit();
  }

  getExpenses() {
    return this.expenses;
  }

  _commit() {
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }
}

export { ExpenseService };
