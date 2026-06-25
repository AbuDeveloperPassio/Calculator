import { products } from "./product.js";


let main = document.getElementById('main-box');

let elements = []; // ADD THIS

for (let x = 0; x < products.length; x++) {
    let element = document.createElement('div');

    element.innerHTML = `
        <img src="${products[x].img}">
        <h3>${products[x].name}</h3>
        <h4>${products[x].price}</h4>
    `;

    element.classList.add('element');
    main.append(element);

    elements.push(element); // ADD THIS
}




// Another operation
let enteredText = document.getElementById('enteredText');

enteredText.addEventListener('keyup', () => {
    products.forEach((product, index) => {

        if (product.name.toUpperCase().indexOf(enteredText.value.toUpperCase()) < 0) {
            elements[index].style.display = 'none';
        } else {
            elements[index].style.display = 'block';
        }
    })

})


