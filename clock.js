setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour]');
const minuteHand = document.querySelector('[data-minute]');
const secondHand = document.querySelector('[data-second]');

function setClock(){
    const currentDate = new Date();
    const second = currentDate.getSeconds() / 60;
    const minutes = currentDate.getMinutes() / 60;
    const hours = currentDate.getHours() / 12;

    setRotation(secondHand, second);
    setRotation(minuteHand, minutes);
    setRotation(hourHand, hours);
}

function setRotation(element, rotation){
    element.style.setProperty('--rotation', rotation * 360);
}

setClock();