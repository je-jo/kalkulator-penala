//01. set today

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();
const todayFormatted = `${new Date().getDate()}.${currentMonth}.${currentYear}.`;

const displayToday = document.querySelector("#today");
displayToday.innerHTML = `<p>Danasnji datum: <span>${todayFormatted}</span></p>`;

// 02. set contract start date

const dateInput = document.querySelector("#contract-start-date");

let startDay, startMonth, startYear;

function setStartDate() {
    let startDate = dateInput.value.split("-");
    startYear = +startDate[0]; //assumes date format '2021', '12', '31'
    startMonth = +startDate[1];
    if (startDate[2] == 31) {
        startDay = 30;
    } else {
        startDay = +startDate[2];
    }
}

//03. calculate days left and passed

let totalDaysPassed = () => {
    switch (currentYear - startYear) {
        case (0):
            return (currentDay - startDay) + ((currentMonth - startMonth) * 30);
        case (1):
            return ((30 - startDay) + ((12 - startMonth) * 30) + currentDay + ((currentMonth - 1) * 30));
        case (2):
            return (30 - startDay) + ((12 - startMonth) * 30) + currentDay + ((currentMonth - 1) * 30) + 360;
    }
}

let totalDaysLeft = () => 719 - totalDaysPassed(); //assumes contract lasts 23m and 29 days, with 1m = 30 days

// 04. format and display days

let formattedDaysPassed = () => `${Math.floor(totalDaysPassed() / 30)} M i ${totalDaysPassed() % 30} D`;
let formattedDaysLeft = () => `${Math.floor(totalDaysLeft() / 30)} M i ${totalDaysLeft() % 30} D`;
const displayTimePassed = document.querySelector("#time-passed");
const displayTimeLeft = document.querySelector("#time-left");

function updateDisplayDates() {
    displayTimePassed.innerHTML = `<p>Proteklo vreme: <span>${formattedDaysPassed()}</span></p>`;
    displayTimeLeft.innerHTML = `<p>Preostalo vreme: <span>${formattedDaysLeft()}</span></p>`;
}

// 05. date button

const buttonDate = document.querySelector("#btn--date");
buttonDate.addEventListener("click", () => {
    setStartDate();
    if (totalDaysPassed() <= 0) {
        alert("Pogresan unos! Proverite datum pocetka ugovora.")
    }
    updateDisplayDates();
});

//06. set current rate plan 

let currentPrice;
const currentRatePlan = document.querySelector("#current-rp");
const displayRatePlanPrice = document.querySelector("#rp-price");

currentRatePlan.addEventListener("change", (e) => {
    ratePlans.forEach((plan) => {
        if (plan.name === e.currentTarget.value) {
            currentPrice = plan.price;
            displayRatePlanPrice.textContent = `Cena paketa: ${(plan.price).toFixed(2)} RSD`;
            totalPaymentsLeft = ((plan.price / 30) * totalDaysLeft()).toFixed(2);
            displayTotalPaymentsLeft.textContent = `Ukupno preostale pretplate: ${totalPaymentsLeft} RSD`;
        }

        return currentPrice;
    })
});














let totalPaymentsLeft;

let reducedPrice;
let totalPackages;
let totalBenefitsArray = [reducedPrice, totalPackages];
let totalBenefits = totalBenefitsArray.reduce((acc, curr) => acc + curr, 0);


const displayTotalBenefits = document.querySelector("#total-benefits");
const displayTotalPaymentsLeft = document.querySelector("#total-left");


displayTotalBenefits.innerHTML = `<p>Ukupno benefiti: <span>${totalBenefits}</span></p>`













const inputChannels = [...document.querySelectorAll("input[name='channels']")];
const displayTotalChannels = document.querySelector("#total-channels");
inputChannels.forEach(channel => {
    channel.addEventListener("change", function (e) {
        productPackages.forEach(product => {
            if (e.currentTarget.id === product.name) {
                if (e.currentTarget.checked) {
                    product.qty = totalDaysPassed();
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
        displayTotalChannels.innerHTML = `<p>Ukupno kanali: <span>${totalPackages}</span> RSD</p>`;
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
        reductionTimePassed = totalDaysPassed();
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
    displayReductionTotal.innerHTML = `<p>Ukupno: <span>${(reducedPrice).toFixed(2)}</span></p>`;
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



