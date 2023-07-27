"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/
let secretNumber = Math.trunc(Math.random() * 20 ) + 1
let score = 20
console.log(secretNumber)
let record = 0
const dispMessage = function(messege){
    document.querySelector('.message').textContent = messege;
}

document.querySelector('.check').addEventListener('click',function(){
    const gues = Number( document.querySelector('.guess').value)
    // Когда не ввели число
    if (!gues) {
        dispMessage('Вы не ввели число')
    // Победа
    } else if (gues === secretNumber){
        dispMessage('Вы победили!')
        document.querySelector('body').style.background = 'green'
        document.querySelector('.number').textContent = gues
        if (score > record) {
            record = score
            document.querySelector('.highscore').textContent = record
        }
    
    } else if (gues !== secretNumber) {
        if(score > 1){
            if (gues < secretNumber) {
                dispMessage('Число больше')
                score--
                document.querySelector('.score').textContent = score
            } else if (gues > secretNumber) {
                dispMessage('Число меньше')
                score-- 
                document.querySelector('.score').textContent = score
            }
        } else {
            dispMessage('Вы проиграли')
            document.querySelector('.score').textContent = 0
        }
    }
})
document.querySelector('.again').addEventListener('click',function(){
    score = 20
    secretNumber = Math.trunc(Math.random() * 20 ) + 1
    dispMessage('Введите число')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.background = 'black'
})