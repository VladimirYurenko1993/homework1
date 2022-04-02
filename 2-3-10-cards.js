/*  Работаем с коллекцией карточек в  trello
    - Метод splice()
    - Удалить
    - Добавить
    - Обновить  */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
]

// console.table(cards);

// Удаление (по индексу). метод indexOf()

const cardToRemove = 'Карточка-3'
const index1 = cards.indexOf(cardToRemove)

cards.splice(index1,1)

// console.table(cards);


// Добавление (по индексу)

const cardToInsert =  'Карточка-6'
const index2 = cards.length

cards.splice(index2, 0, cardToInsert.toUpperCase())
// console.table(cards)


// Обновление (по индексу)

const cardToUpdate = 'Карточка-4'
const index3 = cards.indexOf(cardToUpdate)

cards.splice(index3, 1, 'КАРТОЧКА №4')
console.table(cards);