
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);

    if(!audio) return; // stops the function from running if there's no corresponding sound
    audio.currentTime = 0;
    audio.play(); // note: audio wont play if already playing, so above line restarts

    key.classList.add('playing');
}

function removeTransition(e) {
    console.log(e);
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound);
