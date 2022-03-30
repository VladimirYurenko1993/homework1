/*  Задача объеденить элементы массива в одно строковое значение
"Элементов может быть произвольное кол-во
Пусть элементы массива в строке будут разделены запятой
    - Сначала через for
    - Потом через join()    */


const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax']
let string = ''

for (const friend of friends) {
    string += friend + ', '
}

console.log(string.slice(8));