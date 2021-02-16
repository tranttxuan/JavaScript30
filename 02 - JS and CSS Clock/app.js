const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    //change to degree
    //in css   transform: rotate(90deg) => add offset 90 deg
    const hoursDegrees = hours*(360/12)+90;
    const minutesDegrees = minutes*(360/60)+90;
    const secondsDegrees = seconds*(360/60)+90;
 
    //show hands
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(() => {
    setTime()
}, 1000);