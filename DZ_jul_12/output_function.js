//1.Напишите функцию, которая выводит все числа от 1 до 100. Для чисел, которые кратны 3, вместо числа выведите "Fizz", а для чисел, кратных 5, выведите "Buzz". Если число кратно и 3, и 5, выведите "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

//2.Создайте объект, представляющий книгу. Каждая книга должна иметь свойства "название", "автор" и "год издания". Выведите информацию о книге в консоль.

const booke = { name: "izdanie1", autor: "Derec Hant", Year_publishing: 1985 };
console.log(booke.name, booke.autor, booke.Year_publishing);

//3.Напишите функцию, которая находит сумму всех чисел от 1 до 100 и выводит ее в консоль.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

//4.Создайте объект, представляющий человека. У человека должны быть свойства "имя", "возраст" и "пол". Выведите информацию о человеке в консоль.
// const Human = { name: 'Oksana', age: 38, sex: 'female' };
// console.log(Human.name, Human.age, Human.sex)

//5.Напишите функцию, которая находит наибольшее число в заданном массиве чисел.

const number = [1, 500, 600];
function findMax(number) {
  let max = number[0];
  for (let num of number) {
    if ((max = num)) {
      max = num;
    }
  }
  return max;
}
console.log(findMax(number));

//6. Создайте массив объектов, представляющих различных студентов. Каждый объект должен иметь свойства "имя", "возраст" и "оценка". Выведите информацию о каждом студенте в консоль.
const students = [
  { name: "Oksana", age: 38, grade: 5 },
  { name: "Mark", age: 25, grade: 4 },
  { name: "Alan", age: 40, grade: 3 },
  { name: "Anna", age: 45, grade: 2 },
];
console.log(students);
/*console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);*/

//7.Напишите функцию, которая находит среднее значение всех чисел в заданном массиве.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum1 = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let result = sum1 / arr.length;
console.log(result);
