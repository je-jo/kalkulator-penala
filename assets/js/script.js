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
    constructPlan("duo-tel-silver", 1999, 0, 0),
    constructPlan("duo-tel-gold", 2379, 0, 0),
    constructPlan("duo-tel-gold-extra", 2989, 0, 0),
    constructPlan("duo-tel-gold-premium", 3859, 0, 0),
    constructPlan("trio-silver", 3449, 0, 0),
    constructPlan("trio-gold", 3829, 0, 0),
    constructPlan("trio-gold-extra", 4539, 0, 0),
    constructPlan("trio-gold-premium", 5789, 0, 0),
    constructPlan("trio-mini", 2499, 0, 0),
    constructPlan("eon-duo-light", 3099, 0, 0),
    constructPlan("eon-duo-full", 3599, 0, 0),
    constructPlan("eon-duo-premium", 4599, 0, 0),
    constructPlan("eon-light", 3499, 0, 0),
    constructPlan("eon-full", 3999, 0, 0),
    constructPlan("eon-premium", 4999, 0, 0),
    constructPlan("eon-tv-light", 1499, 0, 0),
    constructPlan("eon-tv-full", 1999, 0, 0),
    constructPlan("eon-tv-premium", 2999, 0, 0),
    constructPlan("ttv-start", 895, 0, 0),
    constructPlan("ttv-extra", 1395, 0, 0),
    constructPlan("ttv-premium", 2095, 0, 0),
    constructPlan("ttv-trio-extra", 2495, 0, 0),
    constructPlan("ttv-trio-premium", 3195, 0, 0),
    constructPlan("eon-ott-light", 1499, 0, 0),
    constructPlan("eon-ott-full", 1999, 0, 0),
    constructPlan("eon-ott-premium", 2999, 0, 0),
    constructPlan("eon-porodicni", 499, 0, 0),
    constructPlan("eon-cinestar", 599, 0, 0),
    constructPlan("eon-sport", 799, 0, 0),
    constructPlan("eon-sport-porodicni", 999, 0, 0),
    constructPlan("beogrid-duo-silver", 2340, 0, 0),
    constructPlan("beogrid-duo-gold", 2820, 0, 0),
    constructPlan("beogrid-duo-platinum", 3230, 0, 0),
    constructPlan("beogrid-duo-diamond", 3730, 0, 0),
    constructPlan("beogrid-duo-tel-silver", 1920, 0, 0),
    constructPlan("beogrid-duo-tel-gold", 2300, 0, 0),
    constructPlan("beogrid-duo-tel-platinum", 2810, 0, 0),
    constructPlan("beogrid-duo-tel-diamond", 3310, 0, 0),
    constructPlan("beogrid-trio-silver", 2740, 0, 0),
    constructPlan("beogrid-trio-gold", 3220, 0, 0),
    constructPlan("beogrid-trio-platinum", 3830, 0, 0),
    constructPlan("beogrid-trio-diamond", 4230, 0, 0),
    constructPlan("beogrid-net-silver", 1540, 0, 0),
    constructPlan("beogrid-net-gold", 1920, 0, 0),
    constructPlan("beogrid-net-platinum", 2430, 0, 0),
    constructPlan("beogrid-net-diamond", 2930, 0, 0),
    constructPlan("ikom-flat-standard-1", 1770, 0, 0),
    constructPlan("ikom-flat-standard-2", 2270, 0, 0),
    constructPlan("ikom-flat-standard-3", 2870, 0, 0),
    constructPlan("ikom-flat-standard-4", 3470, 0, 0),
    constructPlan("ikom-flat-standard-5", 4570, 0, 0),
    constructPlan("ikom-flat-extra-1", 1870, 0, 0),
    constructPlan("ikom-flat-extra-2", 2420, 0, 0),
    constructPlan("ikom-flat-extra-3", 2920, 0, 0),
    constructPlan("ikom-flat-extra-4", 3520, 0, 0),
    constructPlan("ikom-flat-extra-5", 4620, 0, 0),
    constructPlan("ikom-fon-standard", 1770, 0, 0),
    constructPlan("ikom-fon-extra", 2170, 0, 0),
    constructPlan("ikom-tel-1", 2170, 0, 0),
    constructPlan("ikom-tel-2", 2720, 0, 0),
    constructPlan("ikom-tel-3", 3220, 0, 0),
    constructPlan("ikom-tel-4", 3820, 0, 0),
    constructPlan("ikom-tel-5", 4920, 0, 0),
];

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
    constructPlan("pt-ttv", 3500, 0, 0),
    constructPlan("ttv-montaza", 9900, 0, 0),
    constructPlan("renta-ttv-risiver", 490, 0, 0),
    constructPlan("renta-ttv-risiver-akcija-200", 290, 0, 0),
]



//setup: dinamically add select menus and checkboxes

const currentRatePlanInput = document.querySelector("#rp-current"); //add rate plans select menus
const previousRatePlanInput = document.querySelector("#rp-prev");

for (let i = 0; i < ratePlans.length; i++) {
    const newOptionItem = document.createElement("option");
    newOptionItem.setAttribute("value", `${ratePlans[i].name}`);
    newOptionItem.textContent = `${((ratePlans[i].name).replaceAll("-", " ")).toUpperCase()}`;
    let newOptionCopy = newOptionItem.cloneNode(true);
    currentRatePlanInput.appendChild(newOptionItem);
    previousRatePlanInput.appendChild(newOptionCopy);
}

const channelsContainer = document.querySelector("#channels"); //add channels to page

for (let i = 0; i < productPackages.length; i++) {
    const newListItem = document.createElement("li");
    newListItem.classList.add("wrapper--checkbox");
    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("id", `${productPackages[i].name}`);
    newCheckbox.setAttribute("name", "calc-by-time");
    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", `${productPackages[i].name}`);
    newLabel.textContent = `${((productPackages[i].name).replaceAll("-", " "))}`;
    const newSpanPrice = document.createElement("span");
    newSpanPrice.textContent = productPackages[i].price;
    const newTextInput = document.createElement("input");
    newTextInput.setAttribute("type", "text");
    newTextInput.classList.add("modifier");
    const newSpan = document.createElement("span");
    newSpan.classList.add("channels-calc-price");
    newSpan.textContent = productPackages[i].calcPrice;
    newListItem.appendChild(newCheckbox);
    newListItem.appendChild(newLabel);
    newListItem.appendChild(newSpanPrice);
    newListItem.appendChild(newTextInput);
    newListItem.appendChild(newSpan);
    channelsContainer.appendChild(newListItem);
}

const hardwareContainer = document.querySelector("#hardware"); //add hardware to page

for (let i = 0; i < hardwareItems.length; i++) {
    const newListItem = document.createElement("li");
    newListItem.classList.add("wrapper--checkbox");
    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("id", `${hardwareItems[i].name}`);
    if (`${hardwareItems[i].name}`.includes("rent")) {          //some items are rented and we need to calculate them by contract time, instead of once
        newCheckbox.setAttribute("name", "calc-by-time");
    } else {
        newCheckbox.setAttribute("name", "calc-by-piece");
    }
    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", `${hardwareItems[i].name}`);
    newLabel.textContent = `${(hardwareItems[i].name).replaceAll("-", " ")}`;
    const newSpanPrice = document.createElement("span");
    newSpanPrice.textContent = hardwareItems[i].price;
    const newTextInput = document.createElement("input");
    newTextInput.setAttribute("type", "text");
    if (`${hardwareItems[i].name}`.includes("rent")) {
        newTextInput.classList.add("multiple-rent");
    } else {
        newTextInput.classList.add("modifier");
    }
    const newSpan = document.createElement("span");
    newSpan.classList.add("hardware-calc-price");
    newSpan.textContent = hardwareItems[i].calcPrice;
    newListItem.appendChild(newCheckbox);
    newListItem.appendChild(newLabel);
    newListItem.appendChild(newSpanPrice);
    newListItem.appendChild(newTextInput);
    newListItem.appendChild(newSpan);
    hardwareContainer.appendChild(newListItem);
}

function formatPrice(num) {
    return num.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'DIN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}

function formatDate(date) {
    return date.toLocaleString('sr-ME', options)
}

let options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
};



//01. set today

const currentDay = new Date().getDate();
if (currentDay === 31) {
    currentDay = 30;
}
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();
//const todayFormatted = `${new Date().getDate()}.${currentMonth}.${currentYear}.`;
const todayFormatted = formatDate(new Date())

const displayToday = document.querySelector("#date-today");
displayToday.textContent = todayFormatted;

// 02. set contract start date

const dateInput = document.querySelector("#date-start-contract");

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

let contractLength = 719;

const lengthInput = document.querySelector("#length");

lengthInput.addEventListener("change", function (e) {
    if (e.currentTarget.checked) {
        contractLength = 359;
    } else {
        contractLength = 719;
    }
    setStartDate();
    updateDisplay();
})


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

let totalDaysLeft = () => contractLength - totalDaysPassed(); //assumes contract lasts 23m and 29 days, with 1m = 30 days

// 04. format and display days

let formattedDaysPassed = () => `${Math.floor(totalDaysPassed() / 30)} m i ${totalDaysPassed() % 30} d`;
let formattedDaysLeft = () => `${Math.floor(totalDaysLeft() / 30)} m i ${totalDaysLeft() % 30} d`;

const displayTimePassed = document.querySelector("#time-passed");
const displayTimeLeft = document.querySelector("#time-left");
const displayRatePlanPrice = document.querySelector("#rp-price");
const displayTotalPaymentsLeft = document.querySelector("#total-left");
const displayDateStart = document.querySelector("#date-start");


function updateDisplay() { //runs on date button click, select curr rate plan
    let startDateValue = new Date(dateInput.value)
    displayDateStart.textContent = formatDate(startDateValue)

    displayTimePassed.textContent = formattedDaysPassed();
    displayTimeLeft.textContent = formattedDaysLeft();
    if (selectedRatePlan) {
        displayRatePlanPrice.textContent = formatPrice(currentPrice());
        displayTotalPaymentsLeft.textContent = formatPrice(totalPaymentsLeft());
    }

}

// 05. date button

const buttonDate = document.querySelector(".btn--date");
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
    return ratePlans.find(plan => (plan.name.includes(selectedRatePlan))).price //important!
}

let totalPaymentsLeft = () => {
    return (currentPrice() / 30) * totalDaysLeft();
}



//07. calculate reduced price


const reductionType = document.querySelector("#reduction-type");
const percentInput = [...document.querySelectorAll("input[name='reduction-percent']")];
const ammountInput = [...document.querySelectorAll("input[name='reduction-ammount']")];
const percentContainer = document.querySelector("#reduction-percent");
const ammountContainer = document.querySelector("#reduction-ammount");
let previousRatePlan;
let percentReduction;
let ammountReduction;
const displayReductionTotal = document.querySelector("#total-reduction");
const displayReducedPrice = document.querySelector("#reduction");

function updateDisplayBenefits() {
    displayReducedPrice.textContent = formatPrice(reducedPrice());
    displayReductionTotal.textContent = formatPrice(reductionTotal());
    displayTotalChannels.textContent = formatPrice(totalPackages());
    displayTotalHardware.textContent = formatPrice(totalHardware());
    displayTotalBenefits.textContent = formatPrice(totalBenefits());
}

previousRatePlanInput.addEventListener("click", (e) => {
    previousRatePlan = e.currentTarget.value;
    previousPrice();
    reducedPrice();
    reductionTotal();
    updateDisplayBenefits();
});


percentInput.forEach(input => {
    input.addEventListener("change", (e) => {
        percentReduction = e.currentTarget.value;
        reducedPrice();
        reductionTotal();
        updateDisplayBenefits();
    })
});

ammountInput.forEach(input => {
    input.addEventListener("change", (e) => {
        ammountReduction = e.currentTarget.value;
        reducedPrice();
        reductionTotal();
        updateDisplayBenefits();
    })
});

let previousPrice = () => {
    return (ratePlans.find(plan => (plan.name.includes(previousRatePlan)))).price
}

let reducedPrice = () => {
    if (reductionType.value === "one") {
        return currentPrice() - 1
    }
    if (reductionType.value === "prev") {
        return currentPrice() - previousPrice()
    }
    if (reductionType.value === "percent") {
        return currentPrice() * percentReduction;
    }
    if (reductionType.value === "ammount") {
        return currentPrice() - ammountReduction;
    }
    else return 0;
}

let multiplier;
const inputMultiplier = document.querySelector("input[class='multiplier']");
inputMultiplier.addEventListener("change", (e) => {
    multiplier = +e.currentTarget.value;
    if (multiplier > totalDaysPassed() / 30) {
        alert("Pogresan unos! Akcija jos nije istekla.");
        return
    }
    reducedPrice();
    reductionTotal();
    updateDisplayBenefits();
})

let reductionTotal = () => {
    if (multiplier) {
        return reducedPrice() * multiplier;
    } else {
        return reducedPrice() * (totalDaysPassed() / 30);
    }
}



reductionType.addEventListener("change", () => {
    if (reductionType.value === "one" || reductionType.value === "none") {
        previousRatePlanInput.style.display = "none";
        percentContainer.style.display = "none";
        ammountContainer.style.display = "none";
        reducedPrice();
        reductionTotal();
        updateDisplayBenefits();

    } else if (reductionType.value === "prev") {
        previousRatePlanInput.style.display = "block";
        percentContainer.style.display = "none";
        ammountContainer.style.display = "none";
    }
    else if (reductionType.value === "percent") {
        percentContainer.style.display = "block";
        previousRatePlanInput.style.display = "none";
        ammountContainer.style.display = "none";
    }
    else if (reductionType.value === "ammount") {
        ammountContainer.style.display = "block";
        percentContainer.style.display = "none";
        previousRatePlanInput.style.display = "none";
    }
});


//08. benefits - promo channels and hardware items

const inputChannels = [...document.querySelectorAll("input[name='channels']")];
const inputCheckboxes = [...document.querySelectorAll("input[type='checkbox']")];
const inputText = [...document.querySelectorAll("input[class='modifier']")];
const inputMultiRent = [...document.querySelectorAll("input[class='multiple-rent']")];
const displayTotalChannels = document.querySelector("#total-channels");
const displayTotalHardware = document.querySelector("#total-hardware");

const displayTotalBenefits = document.querySelector("#total-benefits");

let totalPackages = () => calcElementPrice(productPackages);
let totalHardware = () => calcElementPrice(hardwareItems);
let totalBenefits = () => [reductionTotal(), totalPackages(), totalHardware()].reduce((acc, curr) => acc + curr, 0);

inputCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function (e) {
        isChecked(e, productPackages);
        displayElementPrice(displaySinglePP, productPackages);
        isChecked(e, hardwareItems);
        displayElementPrice(displaySingleHW, hardwareItems);
        updateDisplayBenefits();
    })
})

function isChecked(e, arr) {
    arr.forEach(elem => {
        if (elem.name === e.currentTarget.id) {
            if (e.currentTarget.checked && elem.modifier) {
                elem.qty = elem.modifier;
            } else if (e.currentTarget.checked) {
                if (e.currentTarget.name === "calc-by-time") {
                    elem.qty = totalDaysPassed() / 30;
                }
                if (e.currentTarget.name === "calc-by-piece") {
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
        hasValue(e, productPackages);
        displayElementPrice(displaySinglePP, productPackages);
        hasValue(e, hardwareItems);
        displayElementPrice(displaySingleHW, hardwareItems);
        updateDisplayBenefits();
    })
});

inputMultiRent.forEach(multi => {
    multi.addEventListener("change", function (e) {
        hasMulti(e, hardwareItems);
        displayElementPrice(displaySingleHW, hardwareItems);
        updateDisplayBenefits();
    })
});

function hasValue(e, arr) {
    arr.forEach(elem => {
        if (elem.name === e.currentTarget.parentNode.firstElementChild.id) {
            if (e.currentTarget.value) {
                elem.modifier = +e.currentTarget.value;
                if (elem.modifier > totalDaysPassed() / 30) {
                    alert("Pogresan unos! Akcija jos nije istekla.")
                }
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

function hasMulti(e) {
    hardwareItems.forEach(elem => {
        if (elem.name === e.currentTarget.parentNode.firstElementChild.id) {
            if (e.currentTarget.value) {
                elem.multiplier = +e.currentTarget.value;
            } else {
                elem.multiplier = null
            }
            if (elem.multiplier) {
                if (e.currentTarget.parentNode.firstElementChild.checked) {
                    elem.qty = (totalDaysPassed() / 30) * elem.multiplier;
                } else {
                    elem.qty = 0;
                }
            } else {
                elem.qty = totalDaysPassed() / 30;
            }
        }
        calcElementPrice(hardwareItems);
    });
}

function calcElementPrice(arr) {
    arr.forEach(elem => {
        elem.calcPrice = elem.qty * elem.price;
    })
    return arr.reduce((total, element) => total + element.calcPrice, 0);
}

const displaySinglePP = [...document.querySelectorAll("#channels > li > span.channels-calc-price")];
const displaySingleHW = [...document.querySelectorAll("#hardware > li > span.hardware-calc-price")];

function displayElementPrice(arrOfNodes, arrOfProducts) {
    for (let i = 0; i < arrOfNodes.length; i++) {
        arrOfNodes[i].textContent = (arrOfProducts[i].calcPrice).toFixed(2);
    }
}

// 09. build output

let buildOutputStringTotalLeft = () => `${formatPrice(totalPaymentsLeft())} (${(selectedRatePlan).replaceAll("-", " ").toUpperCase()} x ${formattedDaysLeft()})`

let buildOutputStringTotalBenefits = () => {
    let finalStringBenefits = "";
    if (reductionTotal()) {
        if (reductionType.value === "one") {
            finalStringBenefits += `Akcija dinar ${formatPrice(reducedPrice())} x`
        } else if (reductionType.value === "prev") {
            finalStringBenefits += `Akcija stara cena ${formatPrice(reducedPrice())} x`
        } else if (reductionType.value === "percent") {
            finalStringBenefits += `Akcija ${percentReduction * 100} % od cene ${formatPrice(reducedPrice())} x`
        } else if (reductionType.value === "ammount") {
            finalStringBenefits += `Akcija "Plaćaj ${ammountReduction} DIN" x `
        }
        if (multiplier) {
            finalStringBenefits += ` ${multiplier} m + `
        } else {
            finalStringBenefits += ` ${formattedDaysPassed()} + `
        }
    }
    if (totalPackages()) {
        for (let i = 0; i < productPackages.length; i++) {
            if (productPackages[i].qty) {
                if (productPackages[i].modifier) {
                    finalStringBenefits += `${(productPackages[i].name).replaceAll("-", " ").toUpperCase()} ${formatPrice(productPackages[i].price)} x ${productPackages[i].modifier} m + `
                } else {
                    finalStringBenefits += `${(productPackages[i].name).replaceAll("-", " ").toUpperCase()} ${formatPrice(productPackages[i].price)} x ${formattedDaysPassed()} + `
                }
            }
        }
    }
    if (totalHardware()) {
        for (let i = 0; i < hardwareItems.length; i++) {
            if (hardwareItems[i].qty) {
                if (hardwareItems[i].multiplier) {
                    finalStringBenefits += `${(hardwareItems[i].name).replaceAll("-", " ").toUpperCase()} ${formatPrice(hardwareItems[i].price)} x ${formattedDaysPassed()} x ${hardwareItems[i].multiplier} + `
                } else if (hardwareItems[i].name.includes("rent")) {
                    finalStringBenefits += `${(hardwareItems[i].name).replaceAll("-", " ").toUpperCase()} ${formatPrice(hardwareItems[i].price)} x ${formattedDaysPassed()} + `
                } else if (hardwareItems[i].modifier) {
                    finalStringBenefits += `${(hardwareItems[i].name).replaceAll("-", " ").toUpperCase()} ${formatPrice(hardwareItems[i].price)} x ${hardwareItems[i].modifier} + `
                } else {
                    finalStringBenefits += `${(hardwareItems[i].name).replaceAll("-", " ").toUpperCase()} ${formatPrice(hardwareItems[i].price)} + `
                }
            }
        }
    }
    finalStringBenefits = finalStringBenefits.slice(0, finalStringBenefits.length - 3);
    return finalStringBenefits;

}

// 10. output

const buttonFinal = document.querySelector(".btn--final");
const outputFinal = document.querySelector("#output--final");
let outputString = "";

buttonFinal.addEventListener("click", function () {
    buildOutputStringTotalLeft();
    buildOutputStringTotalBenefits()
    outputString =
        `${todayFormatted} - HDS:

Ukupno ostvareni benefiti: ${formatPrice(totalBenefits())} (${buildOutputStringTotalBenefits()});

Ukupno preostale pretplate: ${buildOutputStringTotalLeft()};`;
    outputFinal.textContent = outputString;
    outputFinal.style.height = "auto";
    outputFinal.style.height = outputFinal.scrollHeight + "px";
});

//custom entries

const sectionCustom = document.querySelector("#section--custom");



function createNewRow() {
    const newRow = document.createElement("div");
    newRow.classList.add("wrapper--custom");
    const newCustomPrice = document.createElement("input");
    newCustomPrice.setAttribute("type", "text");
    newCustomPrice.setAttribute("placeholder", "49.5")
    newCustomPrice.classList.add("custom-price")
    const newCustomMonths = document.createElement("input");
    newCustomMonths.setAttribute("type", "text");
    newCustomMonths.setAttribute("placeholder", "M");
    newCustomMonths.classList.add("custom-months")
    const newCustomDays = document.createElement("input");
    newCustomDays.setAttribute("type", "text");
    newCustomDays.setAttribute("placeholder", "D");
    newCustomDays.classList.add("custom-days")
    // const buttonCalculateCustom = document.createElement("button");
    // buttonCalculateCustom.setAttribute("type", "button");
    // buttonCalculateCustom.classList.add("btn", "btn--custom");
    // buttonCalculateCustom.textContent = "OK";
    const newSpanCustom = document.createElement("span");
    newSpanCustom.classList.add("custom", "output-custom")
    newSpanCustom.textContent = "0000" //formatPrice(custom);
    const buttonRemoveRow = document.createElement("button");
    buttonRemoveRow.setAttribute("type", "button");
    buttonRemoveRow.classList.add("btn", "btn--remove");
    buttonRemoveRow.textContent = "X";
    buttonRemoveRow.addEventListener("click", () => newRow.remove());
    newRow.appendChild(newCustomPrice);
    newRow.appendChild(newCustomMonths);
    newRow.appendChild(newCustomDays);
    //newRow.appendChild(buttonCalculateCustom);
    newRow.appendChild(newSpanCustom);
    newRow.appendChild(buttonRemoveRow);
    sectionCustom.insertBefore(newRow, buttonAddRow);

}



const buttonAddRow = document.querySelector(".btn--add");
buttonAddRow.addEventListener("click", () => {
    createNewRow();
    calculateCustom();
})

// const buttonCustom = [...document.querySelectorAll(".btn--custom")];
// buttonCustom.forEach(btn => btn.addEventListener("click", calculateCustom))

const displayTotalCustom = document.querySelector("#total-custom");
let totalCustom;

let customCalcPrice = []
function calculateCustom() {
    const customPrice = [...document.querySelectorAll(".custom-price")];
    const customMonths = [...document.querySelectorAll(".custom-months")];
    const customDays = [...document.querySelectorAll(".custom-days")];
    const customOutput = [...document.querySelectorAll(".output-custom")];
 
    for (let i = 0; i < customPrice.length; i++) {
        customCalcPrice[i] = (customPrice[i].value * customMonths[i].value) + (customDays[i].value * (customPrice[i].value / 30));
        customOutput[i].textContent = formatPrice(customCalcPrice[i]);
    }
    console.log(customCalcPrice)
    totalCustom = customCalcPrice.reduce((acc, curr) => acc + curr);
    displayTotalCustom.textContent = formatPrice(totalCustom)

}

//buttonCustom.addEventListener("click", calculateCustom);

// clear

const form = document.querySelector("form");
const outputAll = [...document.querySelectorAll(".output")];


function clearAllObjects(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].qty = 0;
        arr[i].modifier = 0;
        arr[i].multiplier = 0;
        calcElementPrice(arr);
        displayElementPrice(displaySinglePP, productPackages);
        displayElementPrice(displaySingleHW, hardwareItems);
    }
}

function clearAll() {
    form.reset();
    dateInput.value = "";
    selectedRatePlan = 0;
    clearAllObjects(productPackages)
    clearAllObjects(hardwareItems);
    outputAll.forEach(output => output.textContent = "");
    previousRatePlanInput.style.display = "none";
    percentContainer.style.display = "none";
    ammountContainer.style.display = "none";
    displayToday.textContent = todayFormatted;
    outputFinal.style.height = "auto";
}

const buttonClear = document.querySelector(".btn--clear");

buttonClear.addEventListener("click", clearAll);




clearAll();
createNewRow();


