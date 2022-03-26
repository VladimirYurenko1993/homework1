/* Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
    1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
    
Если в переменной stars что-то кроме чисел 1-5, выведи строку: 'Такого кол-ва звёзд нет' */

// const stars = 3
// let price

// if (stars === 1) {
//     price = 20
// } else if (stars === 2) {
//     price = 30
// } else if (stars === 3) {
//     price = 50
// } else if (stars === 4) {
//     price = 70
// } else if (stars === 5) {
//     price = 120
// } else {
// console.log('Такого кол-ва звёзд нет');
// }

// switch (stars) {
//     case 1:
//         price = 20
//         break
    
//     case 2:
//         price = 30
//         break
    
//     case 3:
//         price = 50
//         break
    
//     case 4:
//         price = 70
//         break

//     case 5:
//         price = 120
//         break
    
//     default:
//         console.log('Такого кол-ва звёзд нет');
// }

// console.log(price);



/* Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
    1,2 - 20$, 3,4 - 30$, 5 - 120$
    
Если в переменной stars что-то кроме чисел 1-5, выведи строку: 'Такого кол-ва звёзд нет' */

// const stars = 5
// let price: до

// if (stars === 1 || stars === 2) {
//     price = 20
// } else if (stars === 3 || stars === 4) {
//     price = 30
// } else if (stars === 5) {
//     price = 120
// } else {
// console.log('Такого кол-ва звёзд нет');
// }

// console.log(price);


// switch (stars) {
//     case 1:
//     case 2:
        
//         price = 20
//         break
    
//         price = 30
//         break
    
//     case 3:
//     case 4:

//         price = 50
//         break
    
//     case 5:
//         price = 120
//         break
    
//     default:
//         console.log('Такого кол-ва звёзд нет');
// }

// console.log(price);



/* Задача: Напиши скрипт выбора опции доставки товара.
Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта

В переменную message записать сообщение в зависимости от опции:
    - Вы сможете забрать товар завтра с : в нашем офисе
    - Курьер доставит заказ завтра с 09:00 до 18:00
    - Посылка будет отправлена сегодня
    - Вам перезвонит менеджер */

// 1. Сделать переменные
const option = 1
let message = ''

// 2. Сделать switch 1, 2, 3
// 3. В каждом кейсе записать в message строку
switch (option) {
    case 1:
        message = 'Вы сможете забрать товар завтра с : в нашем офисе'
        break
    case 2:
        message = 'Курьер доставит заказ завтра с 09:00 до 18:00'
        break
    case 3:
        message = 'Посылка будет отправлена сегодня'
        break
    default:
        message = 'Вам перезвонит менеджер'
}
// 4. log message
console.log(message);