let price = +prompt ('Введите цену для расчета скидки')
let discount = +price * 10/100
let sum = +price - +discount
console.log (+sum)

let price1 = +prompt ('Введите цену для расчета наценки')
let discount1 = (+price1 / 100) * 10
let sum1 = +price1 + +discount1
console.log (+sum1)

let price2 = +prompt ('Введите цену для расчета скидки')
let discount2 = +price2 * 25 / 100
let sum2 = +price2 - +discount2
console.log (+sum2)

let price3 = +prompt ('Введите цену для расчета наценки')
let discount3 = (+price3 / 100) * 25
let sum3 = +price3 + +discount3
console.log (+sum3)

let price4 = +prompt ('Введите цену для расчета скидки')
let discount4 = +price4 * 1 / 100
let sum4 = +price4 - +discount4
console.log (+sum4)

let price5 = +prompt ('Введите цену для расчета наценки')
let discount5 = (+price5 / 100) * 1.5
let sum5 = +price5 + +discount5
console.log (+sum5)

let price_product = +prompt ('Какая стоимость товара?')
if (price_product >=100) {
    let disc = +price_product * 5 / 100;
    let summ = +price_product - +disc
    alert (`${summ} скидка 5%`)}
else {alert (`${price_product} без скидки`)}

let number = +prompt("Введите число для сравнения с 0");
if (number < 0) {
  alert("Число меньше нуля");
} else if (number > 0) {
  alert("Число больше нуля");
} else {
  alert("Число равно нулю");
}


let num = +prompt ('ВВедите число')
let last = num % 10
console.log (`Последняя цыфра ${last}`)
