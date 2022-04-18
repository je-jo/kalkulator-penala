let startDay, startMonth, startYear;
let currentDay, currentMonth, currentYear;
let totalDaysPassed, totalDaysLeft;
let totalPaymentsLeft;
let currentPrice;
let reducedPrice;
let totalPackages;
let totalBenefitsArray = [reducedPrice, totalPackages];
let totalBenefits = totalBenefitsArray.reduce((acc, curr) => acc + curr, 0);
const dateInput = document.querySelector("#contract-start-date");
const buttonDate = document.querySelector("#btn--date");
const displayTimePassed = document.querySelector("#time-passed");
const displayTimeLeft = document.querySelector("#time-left");
const displayTotalBenefits = document.querySelector("#total-benefits");
const displayTotalPaymentsLeft = document.querySelector("#total-left");
const displayRatePlanPrice = document.querySelector("#rp-price");

const displayToday = document.querySelector("#today");

displayTotalBenefits.textContent = `Ukupno benefiti: ${totalBenefits}`;

function setCurrentDay() {
    currentDay = new Date().getDate();
    return currentDay;
}

function setCurrentMonth() {
    currentMonth = new Date().getMonth() + 1;
    return currentMonth;
}

function setCurrentYear() {
    currentYear = new Date().getFullYear();
    return currentYear;
}

function setTodayFormatted() {
    let today = `${new Date().getDate()}.${currentMonth}.${currentYear}.`
    displayToday.textContent = `Danasnji datum: ${today}`;
    return today;
}

function updateDisplay() {

}

// function setTodaysDate() {

//     currentDay = new Date().getDate();
//     currentMonth = new Date().getMonth() + 1;
//     currentYear = new Date().getFullYear();
//     let today = `${new Date().getDate()}.${currentMonth}.${currentYear}.`
//     displayToday.textContent = `Danasnji datum: ${today}`;
// }

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
    if ((currentYear - startYear) === 0) {
        totalDaysPassed = (currentDay - startDay) + ((currentMonth - startMonth) * 30);
    } else if ((currentYear - startYear) === 1) {
        totalDaysPassed = ((30 - startDay) + ((12 - startMonth) * 30) + currentDay + ((currentMonth - 1) * 30));
    } else if ((currentYear - startYear) === 2) {
        totalDaysPassed = (30 - startDay) + ((12 - startMonth) * 30) + currentDay + ((currentMonth - 1) * 30) + 360;
    } else {
        return "error";
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

const currentRatePlan = document.querySelector("#current-rp");
currentRatePlan.addEventListener("change", (e) => {
    ratePlans.forEach((plan) => {
        if (plan.name === e.currentTarget.value) {
            currentPrice = plan.price;
            displayRatePlanPrice.textContent = `Cena paketa: ${(plan.price).toFixed(2)} RSD`;
            totalPaymentsLeft = ((plan.price / 30) * totalDaysLeft).toFixed(2);
            displayTotalPaymentsLeft.textContent = `Ukupno preostale pretplate: ${totalPaymentsLeft} RSD`;
        }

        return currentPrice;
    })
});

const inputChannels = [...document.querySelectorAll("input[name='channels']")];
const displayTotalChannels = document.querySelector("#total-channels");
inputChannels.forEach(channel => {
    channel.addEventListener("change", function (e) {
        productPackages.forEach(product => {
            if (e.currentTarget.id === product.name) {
                if (e.currentTarget.checked) {
                    product.qty = totalDaysPassed;
                    let monthsPassed = e.currentTarget.nextElementSibling.nextElementSibling.value;
                    if (monthsPassed) {
                        product.qty = monthsPassed * 30
                    }

                } else {
                    product.qty = 0;
                }
                product.calcPrice = +((product.price / 30) * product.qty).toFixed(2);
                console.log(product.calcPrice)
                e.currentTarget.parentNode.lastElementChild.textContent = product.calcPrice;
            }
        });
        totalPackages = (productPackages.reduce((acc, curr) => acc.calcPrice + curr.calcPrice)).toFixed(2);
        displayTotalChannels.textContent = `Ukupno kanali: ${totalPackages} RSD`;
        return totalPackages;
    });
});

const reductionTime = document.querySelector("#reduction-time");
const reductionType = document.querySelector("#price-reduction");
const displayReductionTotal = document.querySelector("#rp-total");
const previousRatePlan = document.querySelector("#prev-rp");

reductionType.addEventListener("change", () => {
    let reductionTimePassed;
    if (reductionTime.value) {
        reductionTimePassed = reductionTime.value * 30
    } else {
        reductionTimePassed = totalDaysPassed;
    }
    if (reductionType.value === "one") {
        reducedPrice = ((currentPrice - 1) / 30) * reductionTimePassed;
        console.log(reducedPrice);
    } else if (reductionType.value === "prev") {
        console.log("stara cena");
        let previousPrice;
        previousRatePlan.style.display = "block";
        previousRatePlan.addEventListener("change", (e) => {
            ratePlans.forEach((plan) => {
                if (plan.name === e.currentTarget.value) {
                    previousPrice = plan.price;
                    return previousPrice;
                }
                reducedPrice = ((currentPrice - previousPrice) / 30) * reductionTimePassed;
            })
        });
        //reducedPrice = ((currentPrice - previousPrice) / 30) * reductionTimePassed;
    } else if (reductionType.value === "percent") {
        console.log("procenat od cene")
    }
    displayReductionTotal.textContent = `Ukupno: ${(reducedPrice).toFixed(2)}`;
    return reducedPrice;
})



const ratePlans = [
    {
        name: "silver",
        price: 3449,
    },
    {
        name: "gold",
        price: 3829,
    },
    {
        name: "light",
        price: 3499,
    },
    {
        name: "full",
        price: 3999,
    }
]

const productPackages = [
    {
        name: "pink",
        price: 310,
        qty: 0,
        calcPrice: 0
    },
    {
        name: "cinestar",
        price: 490,
        qty: 0,
        calcPrice: 0
    },
];


setCurrentDay();
setCurrentMonth();
setCurrentYear();
setTodayFormatted();



