let startDay, startMonth, startYear;
let currentDay, currentMonth, currentYear;
let totalDaysPassed, totalDaysLeft;
let totalPaymentsLeft;
const dateInput = document.querySelector("#contract-start-date");
const buttonDate = document.querySelector("#btn--date");
const displayTimePassed = document.querySelector("#time-passed");
const displayTimeLeft = document.querySelector("#time-left");
const displayTotalPaymentsLeft = document.querySelector("#total-left");
const displayBillingProductPrice = document.querySelector("#bp-price");

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
            displayBillingProductPrice.textContent = `Cena paketa: ${product.price}`;
            totalPaymentsLeft = ((product.price / 30) * totalDaysLeft).toFixed(2);
            displayTotalPaymentsLeft.textContent = `Ukupno preostale pretplate: ${totalPaymentsLeft} RSD`;
        }
    })
});

const inputChannels = [...document.querySelectorAll("input[name='channels']")];
console.log(inputChannels)
inputChannels.forEach(channel => {
    channel.addEventListener("change", function (e) {
        if (e.currentTarget.checked) {
            productPackages.forEach(product => {
                if (e.currentTarget.id === product.name) {
                    console.log(product.price)
                }
            })
        }
    })
})


const billingProducts = [
    {
        name: "silver",
        price: 3449
    },
    {
        name: "gold",
        price: 3829
    },
    {
        name: "light",
        price: 3499
    },
    {
        name: "full",
        price: 3999
    }
]

const productPackages = [
    {
        name: "pink",
        price: 310
    },
    {
        name: "cinestar",
        price: 490
    },
]

setTodaysDate();



