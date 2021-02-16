function playSound(event){
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

  //audio
  //if not found audio, stop the function
  if (!audio) return;
  //rewind to the start
  audio.currentTime = 0;
  audio.play();

  //animation
  key.classList.add("playing");
  //2 ways to remove class .playing: setTimeOut or addEventListener transitioned
  // the second way is recommend because transition property of class playing is set time out " transition: all .09s ease;"
  // setTimeout(() => {
  //     key.classList.remove("playing");
  // }, 900);
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");

function removeTransition(event){
    if(event.propertyName !== 'transform') return;
    // console.log(this)
    this.classList.remove("playing")
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))