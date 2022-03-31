/*  Задача объеденить элементы массива в одно строковое значение
"Элементов может быть произвольное кол-во
Пусть элементы массива в строке будут разделены запятой
    - Сначала через for
    - Потом через join()    */


const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax']
// let string = ''

// for (const friend of friends) {
//     string += friend + ', '
// }

// string = string.slice(0, string.length - 2)
// console.log(string);

const string = friends.join(', ')
console.log(string);