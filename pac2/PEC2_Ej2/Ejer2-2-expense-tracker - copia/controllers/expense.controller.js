import { ExpenseService } from '../services/expense.service.js';
import { ExpenseView } from '../views/expense.view.js';

class ExpenseController {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    // Vincular les funcions d'afegir i eliminar despeses
    this.view.bindAddExpense(this.handleAddExpense);
    this.view.bindDeleteExpense(this.handleDeleteExpense);

    // Carregar les despeses inicials
    this.updateView();
  }

  // Funció per afegir una despesa
  handleAddExpense = (text, amount) => {
    this.service.addExpense(text, amount);
    this.updateView();
  };

  // Funció per eliminar una despesa
  handleDeleteExpense = (id) => {
    this.service.deleteExpense(id);
    this.updateView();
  };

  // Actualitzar la vista amb el balanç i les despeses
  updateView() {
    const expenses = this.service.getExpenses();
    const balance = expenses.reduce((acc, exp) => acc + exp.amount, 0);
    const income = expenses.filter(exp => exp.amount > 0).reduce((acc, exp) => acc + exp.amount, 0);
    const expense = expenses.filter(exp => exp.amount < 0).reduce((acc, exp) => acc + Math.abs(exp.amount), 0);

    this.view.updateBalance(balance, income, expense);
    this.view.displayExpenses(expenses);
  }
}

export { ExpenseController };
