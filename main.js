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
    "3":'/images/idle/idle-3.png',
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
    statusTurn = true
    character.style.backgroundImage = `url(${idle[1]})`
    setTimeout(() => {
        character.style.backgroundImage = `url(${idle[2]})`
    }, 200);
    setTimeout(() => {
        character.style.backgroundImage = `url(${idle[3]})`
    }, 400);
    setTimeout(() => {
        character.style.backgroundImage = `url(${idle[4]})`
    }, 600);
    setTimeout(() => {
        statusTurn = false
        characterStatus = 'idle'
    }, 800);
}

function walkTime() {
    character.style.backgroundImage = `url(${walk[1]})`
    setTimeout(() => {
        character.style.backgroundImage = `url(${walk[2]})`
    }, 200);
    setTimeout(() => {
        character.style.backgroundImage = `url(${walk[3]})`
    }, 400);
    setTimeout(() => {
        character.style.backgroundImage = `url(${walk[4]})`
    }, 600);
    setTimeout(() => {
        character.style.backgroundImage = `url(${walk[5]})`
    }, 800);
    setTimeout(() => {
        statusTurn = false
        characterStatus = 'idle'
        character.style.backgroundImage = `url(${walk[6]})`
    }, 1000);
}

function fireTime() {
    character.style.backgroundImage = `url(${fire[1]})`
    setTimeout(() => {
        character.style.backgroundImage = `url(${fire[2]})`
    }, 200);
    setTimeout(() => {
        statusTurn = false
        characterStatus = 'idle'
        character.style.backgroundImage = `url(${fire[3]})`
    }, 400);
}