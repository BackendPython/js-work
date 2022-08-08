const character = document.querySelector('.character')
let zaxiraText = document.querySelector('.text')
const fullBox = document.querySelector('.full')
let characterStatus = 'idle'
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
        case "ArrowLeft":
            characterStatus = 'walk'
            if (characterLeft>100) {
                character.style.left = characterLeft - 100 + 'px'
            }
            character.style.transform = 'rotateY(180deg)'
            break;
        case "ArrowRight":
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