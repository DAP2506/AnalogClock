const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function serRotate(element,rotateRatio){
    element.style.setProperty('--rotation',rotateRatio * 360)
}

setInterval(() => {
    const currentDate = new Date()
    const milisec = currentDate.getMilliseconds()/1000
    const seecondRatio = (milisec + currentDate.getSeconds())/60
    const minuteRatio = (seecondRatio + currentDate.getMinutes())/60
    const hourRatio =(minuteRatio + currentDate.getHours())/12

    

    serRotate(secondHand,seecondRatio)
    serRotate(minuteHand,minuteRatio)
    serRotate(hourHand,hourRatio)
}, 1);


