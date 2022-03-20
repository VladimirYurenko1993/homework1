// 1 Длина строка, свойства lenth

// const message = 'В этой строке 25 символов'
// console.log(message.length);


// 2 Конкатенация строк

const firstName = 'Vladimir'
const lastName = 'Yurenko'
const fullName = firstName + ' ' + lastName
// console.log(fullName);

/* Задача: Напиши скрипт, который выведет строку в формате:
"Гость х у поселяется в z номере q",
поставив вместо x y z q значения переменных. */

const room = 716
const type = 'VIP'

// const welcomeMessage = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room
const welcomeMessage = `Гость ${firstName} ${lastName} поселяется в ${type} номере ${room}`
// console.log(welcomeMessage);

/* Шаблонные строки
Возвращаемся к составлению строки поселения в отель */

const quantity = 6
const orderMsg = `Вы заказываете ${quantity} холодильников`
// console.log(orderMsg);


// 3 Нормализация с методом toLowerCase()

// let brand = 'SamSuNg'
// console.log(brand[4]);
// console.log(brand.slice(1).toLocaleLowerCase());
// brand = brand[0] + brand.slice(1).toLocaleLowerCase()
// console.log(brand);
// let brand = 'Samsung'
// brand = brand.toLowerCase()
// const inDb = 'samsung'
// console.log(brand);


// 5 Поиск в строке методом includes()

const blacklistedWord1 = 'спам'
const blacklistedWord2 = 'распродажа'

const string1 = 'Привет, это не спам !'
const string2 = 'Самая большая РАСПРОДАЖА!!!'
const string3 = 'Рекламная кампания VASYA'


console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
console.log(string2.toLocaleLowerCase().includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));