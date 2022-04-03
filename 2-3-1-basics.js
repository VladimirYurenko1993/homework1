/* Знакомство с массивами
    -Объявление
    -Индексация
    -Длина
    -Индекс последнего элемента
    -Переопределение

    'Mango', 'Kiwi', 'Poly', 'Ajax' */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax']

// friends[1] = 'TOMATO'
// friends[3] = 2517
// console.table(friends);

// console.log(friends[2]);
// console.log('Last index = length - 1 =', friends.length - 1)


/* Передача по ссылке и по значению
    -Примитивы и сложные типы
    -Ссылочное равентво (referential equality)  */

// let a = 10
// let b = a

// console.log(a);
// console.log(b);


// const a = [1, 2, 3]
// const b = a

// a[0] = 500

// console.log('a: ', a);
// console.log('b: ', b);



/* Перебор (итерация) массива
    - for - если нужен индекс или нужно изменить элемент массива
    - for...of - если индекс не нужен и в массиве ничего менять не нужно    */


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax']
// console.table(friends)

// for (let i = 0; i < friends.length; i += 1) {
//     console.log(friends[i]);
//     friends[i]+=' - #i'
// }
// console.table(friends)

// Декларативный код (более красивый). Если не нужен индекс и не нужно изменять элемент массива
// for (const friend of friends) {
    // console.log(friend);
// }

// console.table(friends)


