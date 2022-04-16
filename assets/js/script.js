let startDay, startMonth, startYear;
let currentDay, currentMonth, currentYear;
let totalDaysPassed, totalDaysLeft;
const dateInput = document.querySelector("#contract-start-date");
const buttonDate = document.querySelector("#btn--date");
const displayTimePassed = document.querySelector("#time-passed");
const displayTimeLeft = document.querySelector("#time-left");

function setTodaysDate() {
    const displayToday = document.querySelector("#today");
    currentDay = new Date().getDate();
    currentMonth = new Date().getMonth() + 1;
    currentYear = new Date().getFullYear();
    let today = `${new Date().getDate()}.${currentMonth}.${currentYear}.`
    displayToday.textContent = `Danasnji datum: ${today}`;
}

function setStartDate() {
    let startDate = dateInput.value.split("-");
    startYear = startDate[0]; //assumes date format '2021', '12', '31'
    startMonth = startDate[1];
    if (startDate[2] == 31) {
        startDay = 30;
    } else {
        startDay = startDate[2];
    }
}

function calculateTotalDays() {
    totalDaysPassed = ((30 - startDay) + ((12 - startMonth) * 30) + currentDay + ((currentMonth - 1) * 30));
    if ((currentYear - startYear) === 2) {
        totalDaysPassed += 360;
    }
    totalDaysLeft = 719 - totalDaysPassed;
    let formattedDaysPassed = `${Math.floor(totalDaysPassed / 30)} M i ${totalDaysPassed % 30} D`;
    displayTimePassed.textContent = `Proteklo vreme: ${formattedDaysPassed}`;
    let formattedDaysLeft = `${Math.floor(totalDaysLeft / 30)} M i ${totalDaysLeft % 30} D`;
    displayTimeLeft.textContent = `Preostalo vreme: ${formattedDaysLeft}`;
}

buttonDate.addEventListener("click", () => {
    setStartDate();
    calculateTotalDays();
});

const currentBillingProduct = document.querySelector("#current-bp");
currentBillingProduct.addEventListener("change", (e) => {
    billingProducts.forEach((product) => {
        if (product.name === e.currentTarget.value) {
            console.log(product.price)
        }
    })
});

const billingProducts = [
    {
        name: "silver",
        price: 1500
    },
    {
        name: "gold",
        price: 2500
    },
    {
        name: "light",
        price: 2000
    },
    {
        name: "full",
        price: 4000
    }
]

setTodaysDate();



