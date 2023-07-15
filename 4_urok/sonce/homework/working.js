//1. Напишите функцию, которая выводит нечетные числа от 0 до 10
for (let n = 1; n <= 10; n++) {
  if (n % 2 != 0) {
    alert(n);
  }
  console.log(n);
}

//2.Напишите функцию, которая принимает два числа в качестве диапазона и возвращает сумму чисел в указанном диапазоне

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

//3. Через массив опишите трех игроков (имя, здоровье, урон)
let players = [
  { name: "Den", health: 100, damage: 500 },
  { name: "Nik", health: 80, damage: 300 },
  { name: "Stiv", health: 50, damage: 200 },
];
players.forEach(function (item) {
  console.log(
    `Имя: ${item.name}   Здоровье ${item.health}  Урон ${item.damage}`
  );
});

//4. Напишите функцию, которая получает массив чисел и возвращает среднее ариф. значение
function average(array) {
    let arr = [];
    let sum = 0;
    for(i = 0; i < array.length; i++) {
      sum += array[i];
    } 
    let avg = sum / array.length;
    return avg
  }
  console.log(average([1,5,3,9,8,6,3,10]));

  //5. Напишите функцию, которая конвертирует градусы из шкалы по Цельсию в градусы в шкалу по Фаренгейту

function temp_c(number) {
    return temp_f = number * 1.8 + 32;
}
console.log(temp_c(10));
alert (temp_f)





