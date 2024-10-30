class ExpenseView {
  constructor() {
    this.balanceEl = document.getElementById('balance');
    this.incomeEl = document.getElementById('money-plus');
    this.expenseEl = document.getElementById('money-minus');
    this.listEl = document.getElementById('list');
    this.form = document.getElementById('form');
    this.textInput = document.getElementById('text');
    this.amountInput = document.getElementById('amount');
  }

  // Actualitzar el balanç, ingressos i despeses
  updateBalance(balance, income, expense) {
    this.balanceEl.textContent = `$${balance.toFixed(2)}`;
    this.incomeEl.textContent = `$${income.toFixed(2)}`;
    this.expenseEl.textContent = `$${expense.toFixed(2)}`;
  }

  // Mostrar despeses a la llista
  displayExpenses(expenses) {
    this.listEl.innerHTML = ''; // Esborra la llista actual
    expenses.forEach(expense => {
      const sign = expense.amount < 0 ? '-' : '+';
      const li = document.createElement('li');
      li.classList.add(expense.amount < 0 ? 'minus' : 'plus');
      li.innerHTML = `
        ${expense.text} <span>${sign}$${Math.abs(expense.amount)}</span>
        <button class="delete-btn" data-id="${expense.id}">x</button>
      `;
      this.listEl.appendChild(li);
    });
  }

  // Vincular el formulari amb l'acció d'afegir despesa
  bindAddExpense(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const text = this.textInput.value;
      const amount = parseFloat(this.amountInput.value);
      if (text && amount) {
        handler(text, amount);
        this.textInput.value = '';
        this.amountInput.value = '';
      }
    });
  }

  // Vincular el botó d'eliminar despesa
  bindDeleteExpense(handler) {
    this.listEl.addEventListener('click', event => {
      if (event.target.classList.contains('delete-btn')) {
        const id = event.target.getAttribute('data-id');
        handler(id);
      }
    });
  }
}

export { ExpenseView };
