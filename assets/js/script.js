//setup: construct arrays of package objects

function constructPlan(name, price, qty, calcPrice) {
    const obj = {};
    obj.name = name;
    obj.price = price;
    obj.qty = qty;
    obj.calcPrice = calcPrice;
    return obj;
}

const ratePlans = [
    constructPlan("silver", 3449, 0, 0),
    constructPlan("gold", 3829, 0, 0),
    constructPlan("light", 3499, 0, 0),
    constructPlan("full", 3999, 0, 0),
    constructPlan("d3-start", 1395, 0),
];

const productPackages = [
    constructPlan("hit", 310, 0, 0),
    constructPlan("plus", 560, 0, 0),
    constructPlan("hbo", 490, 0, 0),
    constructPlan("tidal", 450, 0, 0),
    constructPlan("cinemax", 260, 0, 0),
    constructPlan("hbo-premium", 720, 0, 0),
    constructPlan("cinestar-premiere", 490, 0, 0),
    constructPlan("pink", 310, 0, 0),
    constructPlan("hd-maximum", 1890, 0, 0),
    constructPlan("pickbox", 575, 0, 0),
    constructPlan("ttv-extra", 429, 0, 0),
    constructPlan("ttv-club-x", 254, 0, 0),
    constructPlan("ttv-filmski-paket", 690, 0, 0),
    constructPlan("ttv-filmbox", 360, 0, 0),
    constructPlan("ttv-pink", 550, 0, 0),
    constructPlan("flat-fixni", 390, 0, 0),
];

const hardwareItems = [
    constructPlan("pds-2100", 2900, 0, 0),
    constructPlan("pds-3121", 4900, 0, 0),
    constructPlan("d3-mini", 1900, 0, 0),
    constructPlan("eon-smart-box", 6900, 0, 0),
    constructPlan("pt-ttv", 4900, 0, 0),
    constructPlan("ttv-montaza", 9900, 0, 0),
    constructPlan("basic-modem", 3900, 0, 0),
    constructPlan("d3-cam", 1900, 0, 0),
    constructPlan("advanced-modem", 6900, 0, 0),
    constructPlan("wifi-mesh", 9900, 0, 0),
    constructPlan("eon-smart-box-50%", 3450, 0, 0),
    constructPlan("pt-ktv-stan", 3900, 0, 0),
    constructPlan("pt-ktv-kuca", 9900, 0, 0),
    constructPlan("renta-eon-box", 290, 0, 0),
    constructPlan("renta-ttv-risiver", 490, 0, 0),
]

//setup: dinamically add checkboxes

const channelsContainer = document.querySelector("#promo-channels");

for (let i = 0; i < productPackages.length; i++) {
    const newListItem = document.createElement("li");
    newListItem.classList.add("channels");
    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("id", `${productPackages[i].name}`);
    newCheckbox.setAttribute("name", "channels");
    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", `${productPackages[i].name}`);
    newLabel.textContent = `${((productPackages[i].name).replace("-", " ")).toUpperCase()}`;
    const newTextInput = document.createElement("input");
    newTextInput.setAttribute("type", "text");
    const newSpan = document.createElement("span");
    newSpan.classList.add("channels-calc-price");
    newSpan.textContent = `${(productPackages[i].calcPrice)} RSD`;
    newListItem.appendChild(newCheckbox);
    newListItem.appendChild(newLabel);
    newListItem.appendChild(newTextInput);
    newListItem.appendChild(newSpan);
    channelsContainer.appendChild(newListItem);
}

const hardwareContainer = document.querySelector("#hardware");

for (let i = 0; i < hardwareItems.length; i++) {
    const newListItem = document.createElement("li");
    newListItem.classList.add("channels");
    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("id", `${hardwareItems[i].name}`);
    newCheckbox.setAttribute("name", "hardware");
    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", `${hardwareItems[i].name}`);
    newLabel.textContent = `${((hardwareItems[i].name).replace("-", " ")).toUpperCase()}`;
    const newTextInput = document.createElement("input");
    newTextInput.setAttribute("type", "text");
    const newSpan = document.createElement("span");
    //newSpan.classList.add("channels-calc-price");
    newSpan.textContent = `${(hardwareItems[i].calcPrice)} RSD`;
    newListItem.appendChild(newCheckbox);
    newListItem.appendChild(newLabel);
    newListItem.appendChild(newTextInput);
    newListItem.appendChild(newSpan);
    hardwareContainer.appendChild(newListItem);
}

//01. set today

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();
const todayFormatted = `${new Date().getDate()}.${currentMonth}.${currentYear}.`;

const displayToday = document.querySelector("#today");
displayToday.textContent = todayFormatted;

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
const displayRatePlanPrice = document.querySelector("#rp-price");
const displayTotalPaymentsLeft = document.querySelector("#total-left");

function updateDisplay() { //runs on date button click, select curr rate plan
    displayTimePassed.textContent = formattedDaysPassed();
    displayTimeLeft.textContent = formattedDaysLeft();
    if (selectedRatePlan) {
        displayRatePlanPrice.textContent = currentPrice().toFixed(2);
        displayTotalPaymentsLeft.textContent = totalPaymentsLeft().toFixed(2);
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

inputChannels.forEach(input => {
    input.addEventListener("change", function(e) {
        isChecked(e, productPackages)
    })
});

const inputHardware = [...document.querySelectorAll("input[name='hardware']")];
inputHardware.forEach(input => {
    input.addEventListener("change", function(e) {
        isChecked(e, hardwareItems)
    })
}); 

function isChecked(e, arr) {
    arr.forEach(elem => {
        if (elem.name === e.currentTarget.id) {
            if (e.currentTarget.checked && elem.modifier) {
                elem.qty = elem.modifier * 30
            } else if (e.currentTarget.checked) {
                elem.qty = totalDaysPassed();
            }
            else {
                elem.qty = 0;
            }
        }
        calcElementPrice();
        displayElementPrice()
    });

}

inputText.forEach(textbox => {
    textbox.addEventListener("change", hasValue)
});

function hasValue(e) {
    productPackages.forEach(elem => {
        if (elem.name === e.currentTarget.parentNode.firstElementChild.id) {
            if (e.currentTarget.value) {
                elem.modifier = +e.currentTarget.value;
            } else {
                elem.modifier = null
            }
            if (elem.modifier) {
                if (e.currentTarget.parentNode.firstElementChild.checked) {
                    elem.qty = elem.modifier * 30
                } else {
                    elem.qty = 0;
                }
            } else {
                elem.qty = totalDaysPassed();
            }
        }
        calcElementPrice();
        displayElementPrice()
    });
}

let totalPackages;
function calcElementPrice() {
    productPackages.forEach(elem => {
        elem.calcPrice = elem.qty * (elem.price / 30);
    })
    totalPackages = productPackages.reduce((total, element) => total + element.calcPrice, 0);
}

const displaySinglePP = [...document.querySelectorAll("#promo-channels > li > span")];

function displayElementPrice() {
    for (let i = 0; i < displaySinglePP.length; i++) {
        displaySinglePP[i].textContent = `${(productPackages[i].calcPrice).toFixed(2)} RSD`
    }
    displayTotalChannels.innerHTML = `<p>Ukupno kanali: <span>${(totalPackages).toFixed(2)}</span> RSD</p>`;
}

//let channelPrices = productPackages.map(elem => elem.calcPrice);


/*
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



const displayTotalBenefits = document.querySelector("#total-benefits");


