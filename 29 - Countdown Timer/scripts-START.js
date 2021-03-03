let countdown;
const buttons = document.querySelectorAll("button.timer__button");
const timeDisplay = document.querySelector("h1.display__time-left");
const endTime = document.querySelector("p.display__end-time")
const inputTime = document.querySelector("input");


function timer(seconds) {
    //clear existing timers
    clearInterval(countdown)
    const now = Date.now();//return milliseconds
    const then = now + seconds * 1000;
    displayTimerLeft(seconds)
    displayEndTime(then)
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000)
        if (secondsLeft <= 0) {
            clearInterval(countdown)
        }
        displayTimerLeft(secondsLeft)
    }, 1000)
}

function displayTimerLeft(seconds) {
    const minutes = (Math.round(seconds / 60))
    const remainderSeconds = parseInt(seconds % 60)
    const display = `${minutes < 10 ? "0" : ""}${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
    timeDisplay.textContent = display;
    console.log(display)
}

function displayEndTime(stampTime) {
    const end = new Date(stampTime)
    const hour = end.getHours()
    const minute = end.getMinutes();
    endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minute < 10 ? "0" : ""}${minute}`
}





function handleTimer(e) {

    timer(parseInt(this.dataset.time))
}

buttons.forEach(button => {
    button.addEventListener('click', handleTimer)
})

inputTime.addEventListener('change', function(e){
    e.preventDefault();
    console.log(parseInt(e.target.value))
    const mins = parseInt(e.target.value)
 
    timer(mins*60)
})