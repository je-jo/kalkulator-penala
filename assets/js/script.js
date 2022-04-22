function constructPlan(name, price, qty) {
    const obj = {};
    obj.name = name;
    obj.price = price;
    obj.qty = qty;
    obj.calcPrice = function () {
        return (obj.price / 30) * obj.qty
    }
    return obj;
}



const ratePlans = [
    constructPlan("silver", 3449, 0),
    constructPlan("gold", 3829, 0),
    constructPlan("light", 3499, 0),
    constructPlan("full", 3999, 0),
    constructPlan("d3-start", 1395, 0),
];

const productPackages = [
    constructPlan("pink", 310, 0),
    constructPlan("cinestar", 490, 0),
];

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

function setStartDate() { //run on button click
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

function updateDisplay() { //runs on date button click, select curr rate plan
    displayTimePassed.innerHTML = `<p>Proteklo vreme: <span>${formattedDaysPassed()}</span></p>`;
    displayTimeLeft.innerHTML = `<p>Preostalo vreme: <span>${formattedDaysLeft()}</span></p>`;
    if (selectedRatePlan) {
        displayRatePlanPrice.innerHTML = `<p>Cena paketa: <span>${currentPrice().toFixed(2)}</span> RSD</p>`;
        displayTotalPaymentsLeft.innerHTML = `<p>Ukupno preostale pretplate: <span>${totalPaymentsLeft().toFixed(2)}</span> RSD</p>`;
    }

}

// 05. date button

const buttonDate = document.querySelector("#btn--date");
buttonDate.addEventListener("click", () => {
    setStartDate();
    if (totalDaysPassed() <= 0) {
        alert("Pogresan unos! Proverite datum pocetka ugovora.")
    }
    updateDisplay();
});

//06. set current rate plan and total payments left

const currentRatePlanInput = document.querySelector("#current-rp");
const displayRatePlanPrice = document.querySelector("#rp-price");
const displayTotalPaymentsLeft = document.querySelector("#total-left");

let selectedRatePlan;

currentRatePlanInput.addEventListener("click", (e) => {
    selectedRatePlan = e.currentTarget.value;
    totalPaymentsLeft();
    updateDisplay();
});

let currentPrice = () => {
    return (ratePlans.find(plan => (plan.name.includes(selectedRatePlan)))).price //important!
}

let totalPaymentsLeft = () => {
    return (currentPrice() / 30) * totalDaysLeft();
}


//08. benefits - promo channels



const inputChannels = [...document.querySelectorAll("input[name='channels']")];
const inputText = [...document.querySelectorAll("input[type='text']")];
const displayTotalChannels = document.querySelector("#total-channels");

function getQty(e) {
    productPackages.forEach(elem => {
        for (let prop in elem) {
            if (elem[prop] === e.currentTarget.id) {
                if (e.currentTarget.checked) {
                    elem.qty = totalDaysLeft();
                } else {
                    elem.qty = 0;
                }
            }
        }
        console.table(productPackages)
    });
}

inputChannels.forEach(input => {
    input.addEventListener("change", getQty)
});

inputText.forEach(textbox => {
    textbox.addEventListener("change", function(e) {
        
    })
}) 


/*productPackages.forEach(product => {
    if (product.name === selected) {
        inputText.forEach(textbox => textbox.addEventListener("change", function (e) {
            if (e.currentTarget.value) {
                product.qty = e.currentTarget.value * 30;
                console.log(product.qty)
            }
            else {
                product.qty = (totalDaysPassed() / 30);
                console.log(product.qty)
            }
        }))
    }
}); */










/* inputChannels.forEach(channel => {
    channel.addEventListener("change", function (e) {
        productPackages.forEach(product => {
            if (e.currentTarget.id === product.name) {
                if (e.currentTarget.checked) {
                    inputText.forEach(elem => {
                        elem.addEventListener("change", function () {
                            if (elem.value) {
                                product.qty = +elem.value * 30;
                            } else {
                                product.qty = totalDaysPassed();
                            }
                        })
                    })
                } else {
                    product.qty = 0;
                }
                console.log(product.qty)
                product.calcPrice = +((product.price / 30) * product.qty).toFixed(2);
                console.log(product.calcPrice)
                e.currentTarget.parentNode.lastElementChild.textContent = product.calcPrice;
            }
        });
        
        totalPackages = (productPackages.reduce((acc, curr) => acc.calcPrice + curr.calcPrice)).toFixed(2), 0;
        displayTotalChannels.innerHTML = `<p>Ukupno kanali: <span>${totalPackages}</span> RSD</p>`;
        return totalPackages;
    });
}); */










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
    } else if (reductionType.value === "percent") {
        console.log("procenat od cene")
    }
    displayReductionTotal.innerHTML = `<p>Ukupno: <span>${(reducedPrice).toFixed(2)}</span></p>`;
    return reducedPrice;
});





//displayTotalBenefits.innerHTML = `<p>Ukupno benefiti: <span>${totalBenefits}</span></p>`

let reducedPrice;
let totalPackages;


const displayTotalBenefits = document.querySelector("#total-benefits");


