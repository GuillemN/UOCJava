class ExpenseController {
  constructor(service, view) {
    this.service = service; // Servei que gestiona les dades de les despeses
    this.view = view;       // Vista que gestiona la interfície d'usuari

    // Vinculació de funcions per afegir, eliminar i editar despeses amb els esdeveniments de la vista
    this.view.bindAddExpense(this.handleAddExpense);
    this.view.bindDeleteExpense(this.handleDeleteExpense);
    this.view.bindEditExpense(this.handleEditExpense);

    // Carregar i mostrar les despeses inicials
    this.updateView();
  }

  // Funció per afegir una nova despesa
  handleAddExpense = (text, amount) => {
    this.service.addExpense(text, amount); // Afegeix la despesa a través del servei
    this.updateView(); // Actualitza la vista amb les noves dades
  };

  // Funció per eliminar una despesa específica per ID
  handleDeleteExpense = (id) => {
    this.service.deleteExpense(id); // Elimina la despesa amb l'ID donat
    this.updateView(); // Actualitza la vista per reflectir els canvis
  };

  // Funció per editar una despesa específica
  handleEditExpense = (id, newText, newAmount) => {
    this.service.editExpense(id, newText, newAmount); // Modifica la despesa amb els nous valors
    this.updateView(); // Actualitza la vista per reflectir les dades modificades
  };

  // Actualitza la vista amb el balanç, ingressos, despeses i llista completa d'items
  updateView() {
    const expenses = this.service.getExpenses(); // Obté totes les despeses emmagatzemades

    // Calcula el balanç total, els ingressos i les despeses
    const balance = expenses.reduce((acc, exp) => acc + exp.amount, 0);
    const income = expenses
      .filter(exp => exp.amount > 0)
      .reduce((acc, exp) => acc + exp.amount, 0);
    const expense = expenses
      .filter(exp => exp.amount < 0)
      .reduce((acc, exp) => acc + Math.abs(exp.amount), 0);

    // Actualitza els elements de balanç a la vista
    this.view.updateBalance(balance, income, expense);

    // Mostra la llista de despeses actualitzada a la vista
    this.view.displayExpenses(expenses);
  }
}

export { ExpenseController };
