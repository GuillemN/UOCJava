import { Expense } from '../models/expense.model.js';

class ExpenseService {
  constructor() {
    this.expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  }

  // Afegir una nova despesa
  addExpense(text, amount) {
    const expense = new Expense(text, amount);
    this.expenses.push(expense);
    this._commit();
  }

  // Eliminar una despesa per ID
  deleteExpense(id) {
    this.expenses = this.expenses.filter(expense => expense.id !== id);
    this._commit();
  }

  // Obtenir totes les despeses
  getExpenses() {
    return this.expenses;
  }

  // Guardar canvis a localStorage
  _commit() {
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }
}

export { ExpenseService };
