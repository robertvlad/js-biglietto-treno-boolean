let km = prompt('Quanti km devi percorrere?');
console.log(km);

let age = prompt('Qual\'è la tua età?');
console.log(age);

let full_price = km * 0.21;
console.log(full_price);

let final_price;

if (age > 65) {
    final_price = (full_price * 0.6).toFixed(2);
}
else if (age < 18){
    final_price = (full_price * 0.8).toFixed(2);
}
else{
    final_price = full_price.toFixed(2);
}

console.log(final_price);

document.getElementById('price').innerHTML += final_price + ' $';