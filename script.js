setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const hourDigit = document.getElementById('hour')
const minuteDigit = document.getElementById('minute')
// const periodDigit = document.getElementById()

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock() 

function displayTime() {
    var time = new Date()
    var hrs = time.getHours();
    var min = time.getMinutes();
    var period = document.getElementById('period')

    if (hrs >= 12){
        period.innerHTML = "PM";
    }else{
        period.innerHTML = "AM";
    }

    if (hrs > 12){
        hrs = hrs -12
    }
    hrs = parseInt(hrs)
    hourDigit.innerHTML = hrs
    // for (i = 0; i < hrs.length; i++) {
    //     hourDigit.innerHTML = hrs;
    //   }
    minuteDigit.innerHTML = min

}
setInterval(displayTime, 10)