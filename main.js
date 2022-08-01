const character = document.querySelector('.character')
const fullBox = document.querySelector('.full')
let characterStatus = 'idle'
let statusTurn = false
let backTime = 200
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
        character.style.backgroundPosition = 'bottom'
    }, 400);
    setTimeout(() => {z
        character.style.backgroundImage = `url(${idle[4]})`
    }, 600);
    setTimeout(() => {
        statusTurn = false
    }, 800);
}

function walkTime() {
    character.style.transform = 'rotateY(180deg)'
}

let characterTime = setInterval(function () {
    if (characterStatus=='idle'&&statusTurn==false) {
        return idleTime()
    }
    if (characterStatus=='walk'&&statusTurn==false) {
        return walkTime()
    }
    
})