const character = document.querySelector('.character')
let zaxiraText = document.querySelector('.text')
const fullBox = document.querySelector('.full')
let rival = document.querySelectorAll('.rival')
let characterStatus = 'idle'
let rivalStatus = 'idle'
let statusTurn = false



// characterStatus checking
let check = setInterval(() => {
    if (characterStatus=='idle') {
        character.style.animation = 'idle 1s ease infinite'
    }
    if (characterStatus=='walk') {
        character.style.animation = 'walk 1s ease infinite'
        setTimeout(() => {
            if (characterStatus=='walk') {
                characterStatus = 'idle'
            }
        }, 1001);
    }
    if (characterStatus=='attack') {
        character.style.animation = 'attack 0.5s ease infinite'
        setTimeout(() => {
            if (characterStatus=='attack') {
                characterStatus = 'idle'
            }
        }, 501);
    }
});

// character controller keyup
window.addEventListener('keyup', function(event){
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
    let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue('right'))
    switch (event.key) {
        case "a":
            characterStatus = 'walk'
            if (characterLeft>100) {
                character.style.left = characterLeft - 100 + 'px'
            }
            character.style.transform = 'rotateY(180deg)'
            break;
        case "d":
            characterStatus = 'walk'
            if (characterRight>100) {
                character.style.left = characterLeft + 100 + 'px'
            }
            character.style.transform = 'rotateY(0deg)'
            break;
        case " ":
            characterStatus = 'attack'
            break;
        default:
            break;
    }
})

// rivalStatus checking
let check2 = setInterval(() => {
    if (rivalStatus=='idle2') {
        rival.style.animation = 'idle2 1s ease infinite'
    }
    if (rivalStatus=='walk2') {
        rival.style.animation = 'walk2 1s ease infinite'
        setTimeout(() => {
            if (rivalStatus=='walk2') {
                rivalStatus = 'idle2'
            }
        }, 1001);
    }
    if (rivalStatus=='attack2') {
        rival.style.animation = 'attack2 0.5s ease infinite'
        setTimeout(() => {
            if (rivalStatus=='attack2') {
                rivalStatus = 'idle2'
            }
        }, 501);
    }
});

// rival controller keyup
window.addEventListener('keyup', function(event){
    let rivalLeft = parseInt(window.getComputedStyle(rival).getPropertyValue('left'))
    let rivalRight = parseInt(window.getComputedStyle(rival).getPropertyValue('right'))
    switch (event.key) {
        case "ArrowLeft":
            rivalStatus = 'walk'
            if (rivalLeft>100) {
                rival.style.left = characterLeft - 100 + 'px'
            }
            rival.style.transform = 'rotateY(0deg)'
            break;
        case "ArrowRight":
            characterStatus = 'walk'
            if (rivalRight>100) {
                rival.style.left = characterLeft + 100 + 'px'
            }
            rival.style.transform = 'rotateY(1800deg)'
            break;
        case "ArrowDown":
            rivalStatus = 'attack'
            break;
        default:
            break;
    }
})