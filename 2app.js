"use strict";
//-----Global--------------
let hours = [
  "6AM",
  "7AM",
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
];

let tblElem = document.getElementById("results");
let tableElem = document.createElement("table");
tblElem.appendChild(tableElem);

//let allLocations = [];
//-----Random-num-Generator-------------------
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//-----Constructor-------------
function ShopLocations(locations, minCust, maxCust, avrgCookSold) {
  this.locations = locations;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avrgCookSold = avrgCookSold;
  this.dailyTotal = 0;
  this.hrlyTotal = [];
  this.customer = [];
  this.cookies = [];
  ShopLocations.push(this);
}

new ShopLocations("Seattle", 23, 65, 6.3, 0);
new ShopLocations("Tokyo", 3, 24, 1.2, 0);
new ShopLocations("Dubai", 11, 38, 3.7);
new ShopLocations("Paris", 20, 38, 2.3);
new ShopLocations("Lima", 2, 16, 4.6);

ShopLocations.prototype.custPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customer.push(
      Math.floor(
        Math.random() * (this.maxHrCust - this.minHrCust + 1) + this.minHrCust
      )
    );
  }
};

ShopLocations.prototype.cookiesPerHr = function () {
  for (let i = 0; i < this.customer.length; i++) {
    this.hrlyTotal[i] = Math.round(
      getRandom(this.minCust, this.maxCust) * this.avrgCookSold
    );
    this.dailyTotal += this.hrlyTotal[i];
    console.log(this.hrlyTotal[i]);
  }
};
//------Table-DOM-Render------
ShopLocations.prototype.render = function () {
  this.cookiesPerHr();
  let tblElem = document.getElementById("results");

  let trElem = document.createElement("tr");
  tblElem.appendChild(trElem);

  let tdElem = document.createElement("td");
  tdElem.textContent = this.locations;
  trElem.appendChild(tdElem);

  for (let j = 0; j < this.hrlyTotal.length; j++) {
    let tdElem = document.createElement("td");
    tdElem.textContent = this.hrlyTotal[j];
    trElem.appendChild(tdElem);
  }

  tdElem = document.createElement("td");
  tdElem.textContent = this.dailyTotal;
  trElem.appendChild(tdElem);
  tblElem.appendChild(trElem);
};

let seattle = new ShopLocations("Seattle", 23, 65, 6.3);
let tokyo = new ShopLocations("Tokyo", 3, 24, 1.2);
let dubai = new ShopLocations("Dubai", 11, 38, 3.7);
let paris = new ShopLocations("Paris", 20, 38, 2.3);
let lima = new ShopLocations("Lima", 2, 16, 4.6);

let location = [seattle, tokyo, dubai, paris, lima];

for (let k = 0; k < location.length; k++) {
  location[k].cookiesPerHr();
}

let tableResults = document.getElementById("results");

function renderHeader() {
  let hdrow = document.createElement("tr");
  let hdrstore = document.createElement("th");
  hdrstore.textContent = "Locations";
  hdrow.appendChild(hdrstore);
  tableResults.appendChild(hdrow);
  for (let i = 0; i < hours.length; i++) {
    let hdrhr = document.createElement("th");
    hdrhr.textContent = hours[i];
    hdrstore.appendChild(hdrhr);
    hdrow.appendChild(hdrhr);
  }
  let hdrTotal = document.createElement("th");
  hdrTotal.textContent = "Store Totals";
  hdrow.appendChild(hdrTotal);
}

renderHeader();
for (let i = 0; i < location.length; i++) {
  location[i].render();
}
renderFooter();

function renderFooter() {
  let hdrow = document.createElement("tr");
  tableResults.appendChild(hdrow);
  let td2Elem = document.createElement("td");

  tdElem.textContent = "Daily Total";
  hdrow.appendChild(td2Elem);

  let runningTotal;

  for (let i = 0; i < hours.length; i++) {
    let tdElem = document.createElement("td");
    let total = 0;
    for (let j = 0; j < location.length; j++) {
      total += location[i].custPerHourArray[j];
      runningTotal += location[i].custPerHourArray[j];
    }
    tdElem.textContent = total;
    hdrow.appendChild(tdElem);
  }
  let tdElem = document.createElement("td");
  tdElem.textContent = runningTotal;
  hdrow.appendChild(tdElem);
}

ShopLocations[0].custPerHour();
ShopLocations[1].custPerHour();
ShopLocations[2].custPerHour();
ShopLocations[3].custPerHour();
ShopLocations[4].custPerHour();

ShopLocations[0].cookiesPerHr();
ShopLocations[1].cookiesPerHr();
ShopLocations[2].cookiesPerHr();
ShopLocations[3].cookiesPerHr();
ShopLocations[4].cookiesPerHr();

ShopLocations[0].render();
ShopLocations[1].render();
ShopLocations[2].render();
ShopLocations[3].render();
ShopLocations[4].render();
