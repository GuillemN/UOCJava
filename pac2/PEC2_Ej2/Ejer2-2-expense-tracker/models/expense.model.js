// models/expense.model.js

class Expense {
  constructor(text, amount) {
    this.id = this.generateID(); // Genera un ID únic per identificar la despesa
    this.text = text;            // Descripció de la despesa (ex: "Compra de material")
    this.amount = amount;        // Quantitat associada a la despesa (+ per ingressos, - per despeses)
  }

  // Mètode per generar un ID únic per a cada instància de despesa
  generateID() {
    return Math.floor(Math.random() * 100000000); // Retorna un número aleatori com a ID
  }
}

// Exporta la classe per permetre el seu ús en altres parts de l'aplicació
export { Expense };
