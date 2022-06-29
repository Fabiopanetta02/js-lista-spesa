//1--Creo Array con oggeti della spesa
const items = ['Uova', 'Pane', 'Latte', 'Biscotti', 'Pasta', 'Affettati', 'Formaggio', 'Verdura', 'Frutta',]


//2- STAMPO IN PAGINA GLI ELEMENTI DELLA ARRAY CON IL CICLO FOR E L'USO DELLA STRINGA
// const ulSpesa = document.getElementById('ulspesa');

// ! CICLO FOR METODO STRINGA//
// let itemsSpesa = '';

// for (let i = 0; i < items.length; i++) {
//     itemsSpesa += `<li>${items[i]}</li>`;
// }

// ulSpesa.innerHTML = itemsSpesa;


//  ! CICLO FOR METODO DOM API//
// const ulSpesa = document.getElementById('ulspesa');

// let i = 0;
// while(i < items.length){
//     const listItem = document.createElement('li');
//     listItem.append(items[i]);
//     ulSpesa.appendChild(listItem);

//     i++
// }



//3- STAMPO IN PAGINA GLI ELEMENTI DELLA ARRAY CON IL CICLO WHILE E L'USO DELLA STRINGA
const ulSpesa = document.getElementById('ulspesa');

// ! CICLO WHILE //
let itemsSpesa = '';

let i = 0;
while(i < items.length){
    itemsSpesa += `<li>${items[i]}</li>`;
    i++;
}

 ulSpesa.innerHTML = itemsSpesa;
