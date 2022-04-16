
let startDay = 0;
let startMonth = 0;
let startYear = 0;
const inputStartDate = document.querySelector("#input-start-date");
const inputStartMonth = document.querySelector("#input-start-month");
const inputStartYear = document.querySelector("#input-start-year");
const buttonDate = document.querySelector("#btn--date");

function setStartDate() {
    if (inputStartDate.value == 31) {
        startDay = 30
    } else {
        startDay = +inputStartDate.value;
    }
    startMonth = +inputStartMonth.value;
    startYear = +inputStartYear.value;
}

buttonDate.addEventListener("click", () => {
    setStartDate();
    let totalDaysPassed = ((30 - startDay) + ((12 - startMonth) * 30) + currentDay + ((currentMonth - 1) * 30));
    if ((currentYear - startYear) === 2) {
        totalDaysPassed += 360;
    }
    let totalDaysLeft = 719 - totalDaysPassed;
    let formattedDaysPassed = `${Math.floor(totalDaysPassed / 30)} M i ${totalDaysPassed % 30} D`
    displayTimePassed.textContent += ` ${formattedDaysPassed}`;
    let formattedDaysLeft = `${Math.floor(totalDaysLeft / 30)} M i ${totalDaysLeft % 30} D`
    displayTimeLeft.textContent += ` ${formattedDaysLeft}`
})




const displayToday = document.querySelector("#today");
let currentDay = new Date().getDate();
let currentMonth = new Date().getMonth() + 1;
let currentYear = new Date().getFullYear();
let today = `${currentDay}.${currentMonth}.${currentYear}.`
displayToday.textContent += ` ${today}`;

const displayTimePassed = document.querySelector("#time-passed");


const displayTimeLeft = document.querySelector("#time-left");



