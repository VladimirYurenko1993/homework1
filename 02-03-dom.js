const btnAdd = document.querySelector('button')
const valueInput = document.querySelector('input[data-value]')
const resetBtn = document.querySelector('button[data-reset]')

const outputEl = document.querySelector('.js-output span')

let total = 0

// console.log(btnAdd.textContent);
// btnAdd.textContent = 'Privet'

btnAdd.addEventListener('click', function () {
    // console.log('click hehehe');
    
    const value = Number(valueInput.value)

    total += value
    outputEl.textContent = total
    valueInput.value = ''
})

resetBtn.addEventListener('click', function () {
    total = 0
    outputEl.textContent = total
})