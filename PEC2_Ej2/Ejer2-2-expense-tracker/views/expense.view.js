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

  // Actualitza els elements amb els valors de balanç, ingressos i despeses
  updateBalance(balance, income, expense) {
    this.balanceEl.textContent = `$${balance.toFixed(2)}`;
    this.incomeEl.textContent = `$${income.toFixed(2)}`;
    this.expenseEl.textContent = `$${expense.toFixed(2)}`;
  }

  // Mostra totes les despeses a la llista d'historial de transaccions
  displayExpenses(expenses) {
    this.listEl.innerHTML = ''; // Esborra la llista actual

    expenses.forEach(expense => {
      const sign = expense.amount < 0 ? '-' : '+'; // Defineix el signe segons si és despesa o ingrés
      const li = document.createElement('li');
      li.classList.add(expense.amount < 0 ? 'minus' : 'plus'); // Afegir classe segons si és ingrés o despesa
      li.innerHTML = `
        ${expense.text} <span>${sign}$${Math.abs(expense.amount).toFixed(2)}</span>
        <button class="edit-btn" data-id="${expense.id}">edit</button>
        <button class="delete-btn" data-id="${expense.id}">x</button>
      `;
      this.listEl.appendChild(li); // Afegir l'element a la llista d'historial
    });
  }

  // Vincula la funció per afegir una nova despesa
  bindAddExpense(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault(); // Evita el comportament per defecte del formulari (enviar)
      const text = this.textInput.value.trim(); // Obtenir el text de la despesa
      const amount = parseFloat(this.amountInput.value); // Convertir l'import a un número

      // Només executa si el text no està buit i l'import és un número vàlid
      if (text && !isNaN(amount)) {
        handler(text, amount); // Passar text i import al controlador
        this.textInput.value = ''; // Netejar el camp de text
        this.amountInput.value = ''; // Netejar el camp d'import
      } else {
        alert("Please enter a valid text and amount."); // Missatge d'error si els valors són invàlids
      }
    });
  }

  // Vincula la funció per eliminar una despesa seleccionada
  bindDeleteExpense(handler) {
    this.listEl.addEventListener('click', event => {
      if (event.target.classList.contains('delete-btn')) {
        const id = event.target.getAttribute('data-id'); // Obtenir ID de la despesa
        handler(id); // Cridar el controlador per eliminar
      }
    });
  }

  // Vincula la funció per editar una despesa seleccionada
  bindEditExpense(handler) {
    this.listEl.addEventListener('click', event => {
      if (event.target.classList.contains('edit-btn')) {
        const id = event.target.getAttribute('data-id'); // Obtenir ID de la despesa
        const text = event.target.parentElement.childNodes[0].textContent.trim(); // Obtenir text de la despesa
        
        // Obtenir l'import del span i convertir-lo a número
        const amountText = event.target.parentElement.querySelector('span').textContent;
        const amount = parseFloat(amountText.replace(/[^0-9.-]+/g, '')); // Eliminar símbols no numèrics

        // Comprova que amount sigui un número vàlid
        if (!isNaN(amount)) {
          // Omplir el formulari amb els valors de la despesa seleccionada
          this.textInput.value = text;
          this.amountInput.value = amount;

          // Cridar el controlador per editar, passant ID, text i import actualitzat
          handler(id, text, amount);
        } else {
          alert("Invalid amount format."); // Missatge d'error si l'import és invàlid
        }
      }
    });
  }
}

export { ExpenseView };
