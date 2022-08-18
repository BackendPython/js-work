let player_heal_text = document.querySelector('.player-1-heal-text')
let rival_heal_text = document.querySelector('.rival-1-heal-text')
let player_heal_box = document.querySelector('.player-1-heal')
let rival_heal_box = document.querySelector('.rival-1-heal')
let reload_button = document.querySelector('.reload-game')
let winner_page = document.querySelector('.winner-page')
const character = document.querySelector('.character')
let computerBtn = document.querySelector('.computer')
let rotateImage = document.querySelector('.rotate')
let selectPage = document.querySelector('.select')
let friendBtn = document.querySelector('.friend')
let zaxiraText = document.querySelector('.text')
const fullBox = document.querySelector('.full')
let rival = document.querySelectorAll('.rival')
let heals = document.querySelector('.heals')
let characterStatus = 'idle';
let rivalStatus = 'idle2';
let selectPlayer = null;
let errorRotate = false;
let gameStart = false;
let media = false;


// fullscreen
function openFull(){
    if (fullBox.requestFullscreen) {
        fullBox.requestFullscreen();
      } else if (fullBox.webkitRequestFullscreen) { /* Safari */
        fullBox.webkitRequestFullscreen();
      } else if (fullBox.msRequestFullscreen) { /* IE11 */
        fullBox.msRequestFullscreen();
      }
}

// details
let player_details = {
    heal: 100,
    attack: 10,
    winner: false,
    blow_turn: false,
}
let rival_details = {
    heal: 100,
    attack: 10,
    winner: false,
    blow_turn: false,
}
// let computer_system = {
//     attack: 20,
// }

// functions

function reload_game() {
    gameStart = false
    rival_details.heal = 100;
    player_details.heal = 100;
    rival[0].style.left = null;
    rival[0].style.right = '2%';
    character.style.left = '3%';
    heals.style.display = 'none';
    rival_details.winner = false;
    player_details.winner = false;
    rival[0].style.display = 'none';
    character.style.display = 'none';
    selectPage.style.display = 'grid';
    winner_page.style.display = 'none';
    fullBox.style.backgroundImage = 'url("/images/select-background.png")';
}

function battleTime(){
    heals.style.display = 'flex'
    rival[0].style.display = 'flex'
    character.style.display = 'flex'
    selectPage.style.display = 'none'
    rotateImage.style.display = 'none'
    fullBox.style.backgroundImage = 'url("/images/background.png")'
}

function startTime(){
    heals.style.display = 'none'
    rival[0].style.display = 'none'
    character.style.display = 'none'
    selectPage.style.display = 'grid'
    rotateImage.style.display = 'none'
    fullBox.style.backgroundImage = 'url("/images/select-background.png")'
}

function rotateTime(){
    heals.style.display = 'none'
    rival[0].style.display = 'none'
    character.style.display = 'none'
    selectPage.style.display = 'none'
    rotateImage.style.display = 'flex'
    winner_page.style.display = 'none'
    fullBox.style.backgroundImage = 'none'
}

function rival_win(){
    selectPlayer = null;
    rival_details.winner = false;
    player_details.winner = false;
    winner_page.style.display = 'block';
    document.querySelector('.winner-image').style.animation = 'idle2 1s infinite';
}

function player_win(){
    selectPlayer = null;
    rival_details.winner = false;
    player_details.winner = false;
    winner_page.style.display = 'block';
    document.querySelector('.winner-image').style.animation = 'idle 1s infinite';
}

// select
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

    let bodyWidth = parseInt(window.getComputedStyle(document.body).getPropertyValue('width'))
    let bodyHeight = parseInt(window.getComputedStyle(document.body).getPropertyValue('height'))
    
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
        character.style.animation = 'attack 0.3s ease infinite'
        setTimeout(() => {
            if (characterStatus=='attack') {
                characterStatus = 'idle'
            }
        }, 301);
    }
    if (gameStart==true&&errorRotate==false) {
        battleTime()
        player_heal_box.style.width = player_details.heal + '%'
        rival_heal_box.style.width = rival_details.heal + '%'
        player_heal_text.innerHTML = player_details.heal
        rival_heal_text.innerHTML = rival_details.heal
    }
    if (bodyWidth<bodyHeight) {
        errorRotate = true
        rotateTime()
    }
    if(bodyWidth>bodyHeight){
        errorRotate = false
        if (gameStart==false) {
            startTime()
        }
        if (gameStart==true) {
            battleTime()
        }
    }
});

// character controller keyup
window.addEventListener('keyup', function(event){
    if (gameStart==true&&errorRotate==false&&selectPlayer==true||selectPlayer==false) {
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
                if (characterStatus=='idle') {
                    characterStatus = 'attack'
                }
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
        let rivalLeft = parseInt(window.getComputedStyle(rival).getPropertyValue('left'))
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
            rival.style.animation = 'attack2 0.3s infinite'
            setTimeout(() => {
                if (rivalStatus=='attack2') {
                    rivalStatus = 'idle2'
                }
            }, 301);
        }
        if (rival_details.heal==0&&player_details.heal>0) {
            player_details.winner = true
        }
        if (player_details.heal==0&&rival_details.heal>0) {
            rival_details.winner = true
        }
        if (gameStart==true&&errorRotate==false) {
            if (rivalLeft-characterLeft<40&&rivalLeft-characterLeft>-40) {
                if (rival_details.heal>0&&characterStatus=='attack'&&player_details.blow_turn==false) {
                    rival_details.heal = rival_details.heal - player_details.attack
                    player_details.blow_turn = true
                    setTimeout(() => {
                        player_details.blow_turn = false
                    }, 501);
                }
                if (player_details.heal>0&&rivalStatus=='attack2'&&rival_details.blow_turn==false) {
                    player_details.heal = player_details.heal - rival_details.attack
                    rival_details.blow_turn = true
                    setTimeout(() => {
                        rival_details.blow_turn = false
                    }, 501);
                }
            }
            if (gameStart==true) {
                if (player_details.winner==true) {
                    player_win()
                }
                if (rival_details.winner==true) {
                    rival_win()
                }
            }
        }
    })
});

// rival controller keyup
window.addEventListener('keyup', function(event){
    if (gameStart==true&&selectPlayer==true&&errorRotate==false) {
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

let computer_gameplay = setInterval(() => {
    rival.forEach(function(rival2){
        let rivalLeft = parseInt(window.getComputedStyle(rival2).getPropertyValue('left'))
        let playerLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
        if (gameStart==true&&errorRotate==false&&selectPlayer==false) {
            if (rivalLeft>100) {
                
            }
        }
    })
});

