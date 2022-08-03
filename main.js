const character = document.querySelector('.character')
let zaxiraText = document.querySelector('.text')
const fullBox = document.querySelector('.full')
let characterStatus = 'idle'
let statusTurn = false
let backTime = 200

let bodyWidth = parseInt(window.getComputedStyle(character).getPropertyValue('width'))
let characterPostion = {
    'position': 'left',
    'check_left': bodyWidth / 10,
}
const idle = {
    "1":'/images/idle/idle-1.png',
    "2":'/images/idle/idle-2.png',
    // "3":'/images/idle/idle-3.png',
    "4":'/images/idle/idle-4.png',
}
const fire = {
    "1":'/images/fire/attck-1.png',
    "2":'/images/fire/attck-2.png',
    "3":'/images/fire/attck-3.png',
}
const walk = {
    "1":'/images/walk/walk-1.png',
    "2":'/images/walk/walk-2.png',
    "3":'/images/walk/walk-3.png',
    "4":'/images/walk/walk-4.png',
    "5":'/images/walk/walk-5.png',
    "6":'/images/walk/walk-6.png',
}

// character functions
function idleTime(){
    character.style.animation = 'idle 1s infinite'
    setTimeout(() => {
        statusTurn = false
        character.style.animation = 'idle 1s infinite'
    }, 1000);
}

function walkTime(){
    character.style.animation = 'walk 1s infinite'
    setTimeout(() => {
        statusTurn = false
        character.style.animation = 'idle 1s infinite'
    }, 1000);
}
function attackTime(){
    character.style.animation = 'attack 1s infinite'
    setTimeout(() => {
        statusTurn = false
        character.style.animation = 'idle 1s infinite'
    }, 1000);
}

let ckeckedStatus = setInterval(() => {
    if (characterStatus==='idle'&&statusTurn===false) {
        statusTurn = true
        idleTime()
    }
    if (characterStatus==='walk'&&statusTurn===false) {
        statusTurn = true
        walkTime()
        setTimeout(() => {
            character.style.animation = 'idle 1s infinite'
        }, 1000);
    }
    if (characterStatus==='attack'&&statusTurn===false) {
        statusTurn = true
        attackTime()
        setTimeout(() => {
            character.style.animation = 'idle 1s infinite'
        }, 1000);
    }
}, 10);

window.addEventListener('keydown', function(event){
    switch (event.key) {
        case "ArrowLeft":
            character.style.transform = 'rotateY(180deg)'
            break;
        case "ArrowRight":
            characterStatus = 'walk'
            character.style.transform = 'rotateY(0deg)'
            break;
        default:
            break;
    }
})