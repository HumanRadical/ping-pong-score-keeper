const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const playTo = document.querySelector('#playTo')
const resetScore = document.querySelector('#reset')

let winningScore = 3
let gameOver = false

function updateScore(player, opponent){
    if (!gameOver) {
        player.score++
        player.display.textContent = player.score
        if (player.score === winningScore && player.score - opponent.score > 1) {
            gameOver = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        else if (player.score === winningScore && player.score - opponent.score == 1) {
            winningScore++
        }
    }
}

function reset() {
    gameOver = false
    for (let p of [p1, p2]) {
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false
    }
}

playTo.addEventListener('change', () => {
    reset()
    winningScore = parseInt(playTo.value)
})
p1.button.addEventListener('click', () => {
    updateScore(p1, p2)
})
p2.button.addEventListener('click', () => {
    updateScore(p2, p1)
})
resetScore.addEventListener('click', reset)