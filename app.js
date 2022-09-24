"use strict";

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let open = "6:00 am to 8:00 PM";
let closed = "Sorry we're closed";

//Welcome
/*
let welcome = document.getElementById("Welcome");
let welcomeHeading = document.createElement("h2");
welcomeHeading.textContent = "Welcome to Pat's Salmon Cookies!";
welcome.appendChild(welcomeHeading);

let intro = document.getElementById("Welcome");
let intropara = document.createElement("p");
intropara.textContent =
  "Pat's Salmon Cookies started as a small corner stand by Pat himself, way back in the day. His family has kept their family recipe for generations, and now they want to share their delicious cookies with the world! Come on in and check out our variety of gluten free, animal and kid friendly cookies! ";
intro.appendChild(intropara);
*/
//----Hours-of-Operation------------------------
let hoursOpen = document.getElementById("Hours");
let hoursHeading = document.createElement("h2");
hoursHeading.textContent = "Hours of Operation:";
hoursOpen.appendChild(hoursHeading);

let dailyHours = document.getElementById("Hours");
let dailyHoursOpen = document.createElement("ul");
dailyHours.appendChild(dailyHoursOpen);

for (let i = 0; i < days.length - 1; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = `${days[i]}: ${open}`;
  dailyHoursOpen.appendChild(listItem);
}
let closedSun = document.createElement("li");
closedSun.textContent = `${days.pop()}: ${closed}`;
dailyHoursOpen.appendChild(closedSun);

// 6:00 AM to 8:00 PM for all locations
let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];
//---------------Global----------------------------------

let salesTable = document.getElementById("salesTable");
let tableElem = document.createElement("table");
salesTable.appendChild(tableElem);
let allCookieCafes = [];

// Constructor -------------------------------------
function ShopLocations(location, minHrCust, maxHrCust, averageCookiesPerCust) {
  this.location = location;
  this.minHrCust = minHrCust;
  this.maxHrCust = maxHrCust;
  this.averageCookiesPerCust = averageCookiesPerCust;
  this.hrlyTotal = [];
  this.dailyTotal = 0;
  this.customersPerHr = [];
  allCookieCafes.push(this);
}

new ShopLocations("Seattle", 23, 65, 6.3, 0);
new ShopLocations("Tokyo", 3, 24, 1.2, 0);
new ShopLocations("Dubai", 11, 38, 3.7);
new ShopLocations("Paris", 20, 38, 2.3);
new ShopLocations("Lima", 2, 16, 4.6);

ShopLocations.prototype.custPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHr.push(
      Math.floor(
        Math.random() * (this.maxHrCust - this.minHrCust + 1) + this.minHrCust
      )
    );
  }
};

ShopLocations.prototype.totalPerHr = function () {
  for (let i = 0; i < this.customersPerHr.length; i++) {
    this.hrlyTotal[i] = Math.round(
      this.customersPerHr[i] * this.averageCookiesPerCust
    );
    this.dailyTotal += this.hrlyTotal[i];

  }
};
// Table DOM Render----------
ShopLocations.prototype.render = function () {
  let trElem = document.createElement("tr");
  tableElem.appendChild(trElem);

  let tdElem = document.createElement("td");
  tdElem.textContent = this.location;
  trElem.appendChild(tdElem);

  for (let i = 0; i < this.hrlyTotal.length; i++) {
    let td1Elem = document.createElement("td");
    td1Elem.textContent = this.hrlyTotal[i];
    trElem.appendChild(td1Elem);
  }
  tdElem = document.createElement("td");
  tdElem.textContent = this.dailyTotal;
  trElem.appendChild(tdElem);

  ShopLocations.prototype.renderAll = function(){
    this.custPerHour();
    this.totalPerHr();
    this.dailyTotal();
    this.render();
  };
};

//---------------------------HEADER---------
function createHeader() {
  let trElem = document.createElement("tr");
  let thElem = document.createElement("th");
  thElem.textContent = "Locations";
  trElem.appendChild(thElem);

  for (let i = 0; i < hours.length; i++) {
    let thElem = document.createElement("th");
    thElem.textContent = hours[i];
    trElem.appendChild(thElem);
  }
  let th2Elem = document.createElement("th");
  th2Elem.textContent = "Daily Location Total";
  trElem.appendChild(th2Elem);
  tableElem.appendChild(trElem);
}
createHeader();

//--------------Create-Footer-----------------
function createFooter() {
  let trFoot = document.createElement("tfoot");
  let trElem = document.createElement("tr");
  let tdElem = document.createElement("td");
  tdElem.textContent = "Hourly Totals";
  trFoot.appendChild(trElem);
  trElem.appendChild(tdElem);
  tableElem.appendChild(trFoot);

  //------
  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let tdElem = document.createElement("td");
    let hrlyTotal = 0;

    for (let j = 0; j < allCookieCafes.length; j++) {
      hrlyTotal += allCookieCafes[j].hrlyTotal[i];
      grandTotal += allCookieCafes[j].hrlyTotal[i];
    }

    tdElem.textContent = hrlyTotal;
    trElem.appendChild(tdElem);
  }
  let td1Elem = document.createElement("td");
  trElem.appendChild(td1Elem);
  td1Elem.textContent = grandTotal;
}

//----------------------------
function renderAllLocations(){
  for(let i = 0; i < allCookieCafes.length; i++){
    allCookieCafes[i].custPerHour();
    allCookieCafes[i].totalPerHr();
    allCookieCafes[i].render();
  }
}
renderAllLocations();

/*
allCookieCafes[0].custPerHour();
allCookieCafes[1].custPerHour();
allCookieCafes[2].custPerHour();
allCookieCafes[3].custPerHour();
allCookieCafes[4].custPerHour();

allCookieCafes[0].totalPerHr();
allCookieCafes[1].totalPerHr();
allCookieCafes[2].totalPerHr();
allCookieCafes[3].totalPerHr();
allCookieCafes[4].totalPerHr();

allCookieCafes[0].render();
allCookieCafes[1].render();
allCookieCafes[2].render();
allCookieCafes[3].render();
allCookieCafes[4].render();
*/
createFooter();


//----------Create-New-Location-Form-------
let addLocationForm = document.getElementById("newLocation");
let locationName = document.getElementById("locationName");
let minCust = document.getElementById("minCust");
let maxCust = document.getElementById("maxCust");
let avgCC = document.getElementById("avgCC");


function newLocationSubmit(event) {
  event.preventDefault();

  let locationNameTarget = event.target.locationName.value;
  console.log(locationName);

  let minCustTarget = +event.target.minCust.value;
  console.log(minCust);

  let maxHrCustTarget = +event.target.maxCust.value;
  console.log(maxCust);

  let avgCCTarget = +event.target.avgCC.value;
  console.log(avgCC);

  let newStore = new ShopLocations(locationNameTarget, minCustTarget, maxHrCustTarget, avgCCTarget);

  newStore.custPerHour();
  newStore.totalPerHr();
  newStore.render();
  let tableFoot = document.querySelector("tfoot");
  console.log(tableFoot);
  tableFoot.remove();
  createFooter();
  addLocationForm.reset();
}
//------
addLocationForm.addEventListener("submit", newLocationSubmit);



