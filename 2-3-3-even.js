// Напищи скрипт который подсчитывает сумму всех чётных чисел в массиве

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11]

// 1 Переменная тотал (total)
let total = 0

// 2 Перебрать массив
// for (let i = 0; i < numbers.length; i += 1){
//     // console.log(numbers[i]);

// // 3 На каждой итерации проверить элемент на чётность
//     if (numbers[i] % 2 === 0) {
//         console.log('Чётное!!!', i);

// // 4 Если чётный - плюсуем к тотал (total)
//         total += numbers[i]
//     }
// }

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log(`${number} - чётное!!!`, number);
//         total += number
//     }
// }


for (const number of numbers) {
    if (number % 2 !== 0) {
        console.log('Эту итерацию нужно пропустить', number);
        continue
    }

    console.log(`${number} - чётное!!!`, number);
        total += number
}

console.log('Total = ', total);