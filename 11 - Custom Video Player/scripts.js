const video = document.querySelector(".player__video.viewer")
const toggle = document.querySelector(".player__button.toggle");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const skipButtons = document.querySelectorAll("[data-skip]")
const ranges = document.querySelectorAll("input[type=range]");

// let isPlayed = false;
//function
function PlayOrOffVideo(e) {
    // isPlayed = !isPlayed;
    // if (isPlayed) {
    //     video.play()
    // } else { video.pause() }

    const method = video.paused ? 'play' : 'pause';
    video[method]();
    toggle.style.backgroundColor = method === 'play' ? "yellow" : "inherit"
    toggle.textContent = method === 'play' ? "play":"►" 
}

function skip(e){
  video.currentTime +=Number((this.dataset.skip))
}

function handleChange(e){
  video[this.name] = this.value
}

function handleProgress(){
    // console.log("here")
    const percent = (video.currentTime/video.duration) *100;
    progressBar.style.flexBasis = `${percent}%`
    
}

function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

toggle.addEventListener('click', PlayOrOffVideo);

skipButtons.forEach(e => e.addEventListener('click', skip))

ranges.forEach(e=> e.addEventListener('mousemove', handleChange))

video.addEventListener('timeupdate', handleProgress)

let mousedown = false;
progress.addEventListener('mousemove', (e)=>mousedown && scrub(e))
progress.addEventListener("mousedown",()=> mousedown = true)
progress.addEventListener("mouseup",()=> mousedown=false)