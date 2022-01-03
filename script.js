//get necessary time elements
const daysElement =document.getElementById('days');
const hoursElement =document.getElementById('hours');
const minutesElement =document.getElementById('minutes');
const secondsElement =document.getElementById('seconds');

//target date definition
const newYears = `4 Dec 2022` ;

//define date variables for calculating seconds left from current time point to target time point
const currentDate =new Date();
const newYearsDate = new Date(newYears); 

//calculation of seconds left until target time
const totalSeconds =(newYearsDate - currentDate)/ 1000;

function countdown () {
    if (totalSeconds >= 0) {

    const days = Math.floor(totalSeconds / 3600 / 24); // Math.floor sets full number 
    const hours = Math.floor(((totalSeconds/3600) % 24)); // Module for hours here, how much is left until 24 is full
    const minutes = Math.floor(totalSeconds/60) % 60; // Module for minutess here, how much is left until 60 is full
    const seconds = Math.floor(totalSeconds) % 60;                 // How much until 60 left
    

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
    } else {
    daysElement.innerHTML = 0;
    hoursElement.innerHTML = 0;
    minutesElement.innerHTML = 0;
    secondsElement.innerHTML = 0;
    };
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;         /* if less than 10 time period remaining, show 0 infront */
}

//Initial call to get Miliseconds until New Years
countdown();

//get Seconds until New Years
setInterval(countdown, 1000);

//video player

let windowObjectReference= null;

function openVideoSurprise(url, windowName) {
    if (windowObjectReference == null || windowObjectReference.closed) {
        windowObjectReference = window.open(url, windowName, '_blank');
    } else {
        windowObjectReference.focus()
    };
};

if(totalSeconds <= 0) {
    openVideoSurprise("https://www.youtube.com/watch?v=4aoP1T24wvU", "Surprise");
};

