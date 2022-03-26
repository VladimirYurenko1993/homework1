// Цикл for

// for (инициализация; условие; пост - выражение) {
//     //тело цикла
// }

// for (let i = 1; i <= 5; i += 1) {
//     console.log(i);
// }

// console.log('Hello');

// Pre-increment & Post-increment  НЕ ИСПОЛЬЗОВАТЬ

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// console.log('Hello');


/* Напиши скрипт который подсчитывает общую сумму зарплат работников.
Кол-во работников хранится в переменной empoyees
Зарплата каждого работника это случайное число от 500 до 5000
Записать сумму в переменную totalSalary и вывести в консоль */

// 1 Сделать вары
// const minSalary = 500
// const maxSalary = 5000
// const empoyees = 3
// let totalSalary = 0

// 2 Перебрать работников в цикле
// for (let i = 0; i <= empoyees; i += 1) {
// 3 Сгенерить случайную зп
    // const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
    // console.log(`ЗП работника номер ${i} - ${salary}`);
// 4 Прибавить к тоталу
    // totalSalary += salary
// }
// 5 Лог
    // console.log('Сумма ЗП: ', totalSalary);


/* Напиши скрипт который подсчитывает сумму всех чётных чисел,
которые входят в диапазон чисел в переменных от min до max.
Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.  */

// 1 Var
const min = 6
const max = 12
let total = 0

// for от min до max с шагом 1
// for (let i = min; i <= max; i += 1){
    // console.log(i);

// // Проверяем остаток от деления
//     if (i % 2 === 0) {
//         console.log('Чётное: ', i)
//         total += i
//     }
// }

// Пишем в сумму
// console.log('Total: ', total);

// Простой вариант:
for (let i = min; i <= max; i += 1){
    if (i % 2 !== 0) {
        console.log('Не чётное: ', i);
        continue
    }
    console.log('Чётное: ', i)
        total += i
}

// Пишем в сумму
console.log('Total: ', total);