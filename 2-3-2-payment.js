
// Задача: Посчитать общую сумму покупок в корзине

const cart = [54, 28, 105, 70, 92, 17, 120]

// 2 Сделать переменную total до цикла
let total = 0

// 1 Перебрать массив

for (let i = 0; i < cart.length; i += 1) {
    // console.log(cart[i]);

    total += cart[i]
}

console.log('Total = ', total);


// 3 Каждый элемент приплюсовать к total

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(i * 1.1)
// }

// for (let x of cart) {
//     x = Math.round(x * 1.1)
// }

// console.log(cart);