//1--Creo Array con oggeti della spesa
const items = ['Uova', 'Pane', 'Latte', 'Biscotti', 'Pasta', 'Affettati', 'Formaggio', 'Verdura', 'Frutta',]


//2- STAMPO IN PAGINA GLI ELEMENTI DELLA ARRAY
const ulSpesa = document.getElementById('ulspesa');

// ! CICLO FOR //
let itemsSpesa = '';

for (let i = 0; i < items.length; i++) {
    itemsSpesa += `<li>${items[i]}</li>`
}

ulSpesa.innerHTML = itemsSpesa;