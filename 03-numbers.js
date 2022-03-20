// 1 Парс числа с Number.parseInt() и Number.parseFloat()

// let elementWidth = '200.74px'
// elementWidth = Number.parseFloat(elementWidth)
// console.log(elementWidth);


// 2 Метод число.toFixed(digits)

// let salary = 1300.16742
// console.log(salary.toFixed(2));
// console.log(salary);


/* 3
Приведение к числу с Number(value)
Значение Nan (Not A Number) и метод Number.isNaN(value)
*/

let quantity = '30'
let value = 'Эту строку невозиожно привести к числу'
// console.log(Number(quantity));
// console.log(value);


//4 Объекты Math
// console.log(Math);

// const base = 2
// const power = 5
// const result = Math.pow(base, power);
// console.log(2 ** 6);


//Задача: Скрипт, который просит пользователя ввести число и степень, возводит число в эту степень и выводит результат в консоль

// 1) Попросить ввести число и сохранить в переменную
// let base = prompt('Ввести число')
// base = Number(base)
// console.log(base);

// 2) Попросить ввести степень и сохранить в переменную
// let power = prompt('Ввести степень')
// power = Number(power)
// console.log(power);

// 3) Возвести в степень и вывести в консоль
// const result = base ** power
// console.log(result);


/* 5 Генерация случайных чисел
Math.random
Math.round
*/

// const max = 50
// const min = 30
// console.log(Math.round(Math.random() * (max-min) + min))

//Math.random() * (max - min) + min


// const colors = ['tomato', 'teal', 'orange', 'deepplink', 'blue', 'green', 'lime', 'red', 'yellow']
// const max = colors.length - 1
// const min = 0

// const index = Math.round(Math.random() * (max - min) + min)
// const color = colors[index]
// console.log(color);

// document.body.style.backgroundColor = color

