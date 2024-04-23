const player = document.getElementById('player');
const gameArea = document.getElementById('gameArea');
const item = document.querySelector('.item');

let playerSpeed = 5;
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        player.style.left = (parseInt(player.style.left) || 0) + playerSpeed + 'px';
    } else if (event.key === 'ArrowLeft') {
        player.style.left = (parseInt(player.style.left) || 0) - playerSpeed + 'px';
    }
});

// Jumping mechanic (simplified)
player.addEventListener('click', function() {
    let initialBottom = parseInt(player.style.bottom) || 0;
    player.style.bottom = initialBottom + 50 + 'px'; // Jump up
    setTimeout(() => {
        player.style.bottom = initialBottom + 'px'; // Come back down
    }, 500);
});
