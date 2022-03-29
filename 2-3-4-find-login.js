/* Напиши скрипт поиска логин
    - Если логина нет, вывести сообщение "Пользователь [логин] не найден"
    - Если нашли логина, вывести сообщение "Пользователь [логин] найден"

    - Сначала через for
    - Потом через for...of
    - Логика break
    - Метод includes() с тернарным оператором   */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n']
const loginToFind = 'poly1scute'

// let message = `Пользователь ${loginToFind} не найден`

// 1 Перебрать элементы
// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i]
    
//     console.log('Login', login);

//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('Ура, равны!!!');
//         message = `Пользователь ${loginToFind} найден`
//         break
//     }
//         message = `Пользователь ${loginToFind} не найден`

//          console.log(message);


//     // if (login !== loginToFind) {
//     //     message = `Пользователь ${loginToFind} не найден`
//     // } else {
//     //     message = `Пользователь ${loginToFind} найден`
//     //     break
//     // }
// }

// console.log(message);


// for (const login of logins) {
//     console.log('Login', login);

//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('Ура, равны!!!');
//         message = `Пользователь ${loginToFind} найден`
//         break
//     }
//         message = `Пользователь ${loginToFind} не найден`
// }

// console.log(message);


const message = logins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден`
    : `Пользователь ${loginToFind} не найден`

console.log(message);