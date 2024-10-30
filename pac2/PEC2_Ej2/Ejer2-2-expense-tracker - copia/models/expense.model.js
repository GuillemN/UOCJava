// models/expense.model.js

class Expense {
  constructor(text, amount) {
    this.id = this.generateID(); // Generar ID únic
    this.text = text;            // Descripció de la despesa
    this.amount = amount;        // Quantitat (+ per ingressos, - per despeses)
  }

  // Generar ID únic
  generateID() {
    return Math.floor(Math.random() * 100000000);
  }
}

export { Expense };
