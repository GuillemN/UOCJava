import { ExpenseService } from './services/expense.service.js';
import { ExpenseView } from './views/expense.view.js';
import { ExpenseController } from './controllers/expense.controller.js';

// Inicialitzar el servei, la vista i el controlador
const expenseService = new ExpenseService();
const expenseView = new ExpenseView();
const expenseController = new ExpenseController(expenseService, expenseView);
