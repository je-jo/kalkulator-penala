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
    constructPlan("d3-start", 1395, 0, 0),
    constructPlan("duo-silver", 3049, 0, 0),
    constructPlan("duo-gold", 3429, 0, 0),
    constructPlan("duo-gold-extra", 4139, 0, 0),
    constructPlan("duo-gold-premium", 5389, 0, 0),
    constructPlan("trio-silver", 3449, 0, 0),

    constructPlan("trio-gold", 3829, 0, 0),
    constructPlan("eon-light", 3499, 0, 0),
    constructPlan("eon-full", 3999, 0, 0),
    
    constructPlan("test-test", 20000, 0, 0),
];

/*
BEOGRID DUO NET+TEL DIAMOND	3310
BEOGRID DUO NET+TEL GOLD	2300
BEOGRID DUO NET+TEL PLATINUM	2810
BEOGRID DUO NET+TEL SILVER	1920
BEOGRID DUO NET+TV DIAMOND	3730
BEOGRID DUO NET+TV GOLD	2820
BEOGRID DUO NET+TV PLATINUM	3230
BEOGRID DUO NET+TV SILVER	2340
BEOGRID NET DIAMOND	2930
BEOGRID NET GOLD	1920
BEOGRID NET PLATINUM	2430
BEOGRID NET SILVER	1540
BEOGRID TRIO DIAMOND	4230
BEOGRID TRIO GOLD	3220
BEOGRID TRIO PLATINUM	3830
BEOGRID TRIO SILVER	2740
D3 START	1395
DUO NET GOLD	3429
DUO NET GOLD EXTRA	4139
DUO NET GOLD PREMIUM	5389
DUO NET SILVER	3049
DUO TEL GOLD	2379
DUO TEL GOLD EXTRA	2989
DUO TEL GOLD PREMIUM	3859
DUO TEL SILVER	1999
EON CINESTAR	599
	
EON DUO FULL	3599
EON DUO LIGHT	3099
EON DUO PREMIUM	4599
EON FULL	3999
EON FULL TV OTT	1999
EON LIGHT	3499
EON LIGHT TV OTT	1499
EON PORODIČNI	499
EON PREMIUM	4999
EON PREMIUM TV OTT	2999
EON SPORT	799
EON SPORT+PORODIČNI	999
EON TV FULL	1999
EON TV LIGHT	1499
EON TV PREMIUM	2999
IKOM FLAT EXTRA 1	1870
IKOM FLAT EXTRA 2	2420
IKOM FLAT EXTRA 3	2920
IKOM FLAT EXTRA 4	3520
IKOM FLAT EXTRA 5	4620
IKOM FLAT STANDARD 1	1770
IKOM FLAT STANDARD 2	2270
IKOM FLAT STANDARD 3	2870
IKOM FLAT STANDARD 4	3470
IKOM FLAT STANDARD 5	4570
IKOM FON EXTRA	2170
IKOM FON STANDARD	1770
IKOM TEL 1	2170
IKOM TEL 2	2720
IKOM TEL 3	3220
IKOM TEL 4	3820
IKOM TEL 5	4920
NEMA	0
TOTAL TV EXTRA	1395
TOTAL TV PREMIUM	2095
TOTAL TV START	895
TOTAL TV TRIO EXTRA	2495
TOTAL TV TRIO PREMIUM	3195
TRIO GOLD	3829
TRIO GOLD EXTRA	4539
TRIO GOLD PREMIUM	5789
TRIO MINI	2499
TRIO SILVER	3449
*/

const productPackages = [
    constructPlan("pink", 310, 0, 0),
    constructPlan("cinestar-premiere", 490, 0, 0),
    constructPlan("tidal", 450, 0, 0),
    constructPlan("flat-fixni", 390, 0, 0),
    constructPlan("hit", 310, 0, 0),
    constructPlan("plus", 560, 0, 0),
    constructPlan("hbo", 490, 0, 0),
    constructPlan("cinemax", 260, 0, 0),
    constructPlan("hbo-premium", 720, 0, 0),
    constructPlan("pickbox", 575, 0, 0),
    constructPlan("hd-maximum", 1890, 0, 0),
    constructPlan("ttv-extra", 429, 0, 0),
    constructPlan("ttv-club-x", 254, 0, 0),
    constructPlan("ttv-filmski-paket", 690, 0, 0),
    constructPlan("ttv-filmbox", 360, 0, 0),
    constructPlan("ttv-pink", 550, 0, 0),

];

const hardwareItems = [
    constructPlan("pt-ktv-stan", 3900, 0, 0),
    constructPlan("pt-ktv-kuca", 9900, 0, 0),
    constructPlan("eon-smart-box", 6900, 0, 0),
    constructPlan("renta-eon-box", 290, 0, 0),
    constructPlan("basic-modem", 3900, 0, 0),
    constructPlan("advanced-modem", 6900, 0, 0),
    constructPlan("pds-2100", 2900, 0, 0),
    constructPlan("pds-3121", 4900, 0, 0),
    constructPlan("d3-mini", 1900, 0, 0),
    constructPlan("d3-cam", 1900, 0, 0),
    constructPlan("wifi-mesh", 9900, 0, 0),
    constructPlan("eon-smart-box-50%", 3450, 0, 0),
    constructPlan("pt-ttv", 4900, 0, 0),
    constructPlan("ttv-montaza", 9900, 0, 0),
    constructPlan("renta-ttv-risiver", 490, 0, 0),
]

const currentRatePlanInput = document.querySelector("#current-rp"); //add rate plans select menu

for (let i = 0; i < ratePlans.length; i++) {
    const newOptionItem = document.createElement("option");
    newOptionItem.setAttribute("value", `${ratePlans[i].name}`);
    newOptionItem.textContent = `${((ratePlans[i].name).replaceAll("-", " ")).toUpperCase()}`;
    currentRatePlanInput.appendChild(newOptionItem);
}

//setup: dinamically add checkboxes

const channelsContainer = document.querySelector("#promo-channels"); //add channels to page

for (let i = 0; i < productPackages.length; i++) {
    const newListItem = document.createElement("li");
    newListItem.classList.add("channels");
    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("id", `${productPackages[i].name}`);
    newCheckbox.setAttribute("name", "channels");
    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", `${productPackages[i].name}`);
    newLabel.textContent = `${((productPackages[i].name).replaceAll("-", " ")).toUpperCase()}`;
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

const hardwareContainer = document.querySelector("#hardware"); //add hardware to page

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
    newSpan.classList.add("hardware-calc-price");
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
const inputCheckboxes = [...document.querySelectorAll("input[type='checkbox']")];
const inputText = [...document.querySelectorAll("input[type='text']")];
const displayTotalChannels = document.querySelector("#total-channels");
const displayTotalHardware = document.querySelector("#total-hardware");

let totalPackages = () => calcElementPrice(productPackages);
let totalHardware = () => calcElementPrice(hardwareItems);

inputCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function (e) {
        if (e.currentTarget.name === "channels") {
            isChecked(e, productPackages);
            displayElementPrice(displaySinglePP, productPackages);
        } else if (e.currentTarget.name === "hardware") {
            isChecked(e, hardwareItems);
            displayElementPrice(displaySingleHW, hardwareItems);
        }
        displayTotalChannels.textContent = totalPackages().toFixed(2);
        displayTotalHardware.textContent = totalHardware().toFixed(2);
    })
})

function isChecked(e, arr) {
    arr.forEach(elem => {
        if (elem.name === e.currentTarget.id) {
            if (e.currentTarget.checked && elem.modifier) {
                elem.qty = elem.modifier;
            } else if (e.currentTarget.checked) {
                if (e.currentTarget.name === "channels") {
                    elem.qty = totalDaysPassed() / 30;
                }
                if (e.currentTarget.name === "hardware") {
                    elem.qty = 1;
                }
            }
            else {
                elem.qty = 0;
            }
        }
        calcElementPrice(arr);
    });
}

inputText.forEach(textbox => {
    textbox.addEventListener("change", function (e) {
        if (e.currentTarget.parentNode.firstElementChild.name === "channels") {
            hasValue(e, productPackages);
            displayElementPrice(displaySinglePP, productPackages);
        }
        if (e.currentTarget.parentNode.firstElementChild.name === "hardware") {
            hasValue(e, hardwareItems);
            displayElementPrice(displaySingleHW, hardwareItems);
        }
        displayTotalChannels.textContent = totalPackages().toFixed(2);
        displayTotalHardware.textContent = totalHardware().toFixed(2);
    })
});

function hasValue(e, arr) {
    arr.forEach(elem => {
        if (elem.name === e.currentTarget.parentNode.firstElementChild.id) {
            if (e.currentTarget.value) {
                elem.modifier = +e.currentTarget.value;
            } else {
                elem.modifier = null
            }
            if (elem.modifier) {
                if (e.currentTarget.parentNode.firstElementChild.checked) {
                    elem.qty = elem.modifier;
                } else {
                    elem.qty = 0;
                }
            } else {
                elem.qty = totalDaysPassed() / 30;
            }
        }
        calcElementPrice(arr);
    });
    
}

function calcElementPrice(arr) {
    arr.forEach(elem => {
        elem.calcPrice = elem.qty * elem.price;
    })
    return arr.reduce((total, element) => total + element.calcPrice, 0);
}

const displaySinglePP = [...document.querySelectorAll("#promo-channels > li > span")];
const displaySingleHW = [...document.querySelectorAll("#hardware > li > span")];

function displayElementPrice(arrOfNodes, arrOfProducts) {
    for (let i = 0; i < arrOfNodes.length; i++) {
        arrOfNodes[i].textContent = `${(arrOfProducts[i].calcPrice).toFixed(2)} RSD`
    }
}


////////





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


