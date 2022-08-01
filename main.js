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
    "1":'/images/idle/1.png',
    "2":'/images/idle/2.png',
    "3":'/images/idle/3.png',
    "4":'/images/idle/4.png',
}
const fire = {
    "1":'/images/fire/1.png',
    "2":'/images/fire/2.png',
    "3":'/images/fire/3.png',
}
const walk = {
    "1":'/images/walk/1.png',
    "2":'/images/walk/2.png',
    "3":'/images/walk/3.png',
    "4":'/images/walk/4.png',
    "5":'/images/walk/5.png',
    "6":'/images/walk/6.png',
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


let characterTime = setInterval(function () {
    let character_left = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
    let character_right = parseInt(window.getComputedStyle(character).getPropertyValue('right'))
    character.style.left = `${characterPostion.check_left}px`
    // checking idle
    if (characterStatus=='idle'&&statusTurn==false) {
        statusTurn = true
        return idleTime()
    }
    if (characterStatus=='walk'&&statusTurn==false) {
        statusTurn = true
        return walkTime()
    }
    zaxiraText.textContent = `left: ${character_left}    right: ${character_right}    body: ${bodyWidth}`
}, 10)

window.addEventListener('keyup', function(event){
    switch (event.key) {
        case 'ArrowLeft':
            characterStatus = 'walk'
            character.style.transform = 'rotateY(180deg)'
            break;
        case 'ArrowRight':
            characterStatus = 'walk'
            character.style.transform = 'rotateY(0deg)'
            break;
        // case 'ArrowTop':
        //     characterStatus
        default:
            break;
    }
})