let player_heal_box = document.querySelector('.player-1-heal')
let rival_heal_box = document.querySelector('.rival-1-heal')
const character = document.querySelector('.character')
let computerBtn = document.querySelector('.computer')
let selectPage = document.querySelector('.select')
let friendBtn = document.querySelector('.friend')
let loading = document.querySelector('.wrapper')
let zaxiraText = document.querySelector('.text')
const fullBox = document.querySelector('.full')
let rival = document.querySelectorAll('.rival')
let heals = document.querySelector('.heals')
let characterStatus = 'idle';
let rivalStatus = 'idle2';
let selectPlayer = true;
let gameStart = true;

let player_details = {
    heal: 100,
    attack: 10,
    winner: false,
}
let rival_details = {
    heal: 100,
    attack: 10,
    winner: false,
}



// select Type Fighting
friendBtn.addEventListener('click', function(){
    gameStart = true
    selectPlayer = true
})
computerBtn.addEventListener('click', function(){
    gameStart = true
    selectPlayer = false
})

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
    if (gameStart==true) {
        heals.style.display = 'flex'
        rival[0].style.display = 'flex'
        character.style.display = 'flex'
        selectPage.style.display = 'none'
        fullBox.style.backgroundImage = 'url("/images/background.png")'
    }
});

// character controller keyup
window.addEventListener('keyup', function(event){
    if (gameStart==true) {
        let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
        let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue('right'))
        switch (event.key) {
            case "a":
                characterStatus = 'walk'
                if (characterLeft>100) {
                    character.style.left = characterLeft - 100 + 'px'
                }
                break;
            case "d":
                characterStatus = 'walk'
                if (characterRight>100) {
                    character.style.left = characterLeft + 100 + 'px'
                }
                break;
            case " ":
                characterStatus = 'attack'
                break;
            default:
                break;
        }
    }
})

// rivalStatus checking
let check2 = setInterval(() => {
    rival.forEach(function(rival){
        let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
        let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue('right'))
        let rivalLeft = parseInt(window.getComputedStyle(rival).getPropertyValue('left'))
        let rivalRight = parseInt(window.getComputedStyle(rival).getPropertyValue('right'))
        if (rivalStatus=='idle2') {
            rival.style.animation = 'idle2 1s infinite'
        }
        if (rivalStatus=='walk2') {
            rival.style.animation = 'walk2 1s infinite'
            setTimeout(() => {
                if (rivalStatus=='walk2') {
                    rivalStatus = 'idle2'
                }
            }, 1001);
        }
        if (rivalStatus=='attack2') {
            rival.style.animation = 'attack2 0.5s infinite'
            setTimeout(() => {
                if (rivalStatus=='attack2') {
                    rivalStatus = 'idle2'
                }
            }, 501);
        }
        if (selectPlayer&&gameStart==true) {
            if (rivalLeft-characterLeft<40&&rivalLeft-characterLeft>-40) {
                zaxiraText.textContent = 'Attack'
            }
            else{
                zaxiraText.textContent = ''
            }
        }
    })
}, 1);

// rival controller keyup
window.addEventListener('keyup', function(event){
    if (gameStart==true&&selectPlayer==true) {
        rival.forEach(function(rival2){
            let rivalLeft = parseInt(window.getComputedStyle(rival2).getPropertyValue('left'))
            let rivalRight = parseInt(window.getComputedStyle(rival2).getPropertyValue('right'))
            switch (event.key) {
                case "ArrowLeft":
                    rivalStatus = 'walk2'
                    if (rivalLeft>100) {
                        rival2.style.left = rivalLeft - 100 + 'px'
                    }
                    break;
                case "ArrowRight":
                    rivalStatus = 'walk2'
                    if (rivalRight<100) {
                        rival2.style.left = rivalLeft + 100 + 'px'
                    }
                    break;
                case "ArrowDown":
                    if (rivalStatus=='idle2') {
                        rivalStatus = 'attack2'
                    }
                    break;
                default:
                    break;
            }
        })
    }
})