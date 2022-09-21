"use strict";
console.log("hello");
let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12am",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];
// 6:00 AM to 8:00 PM for all locations
let cookieCafeSales = document.getElementById("results");
let tableElem = document.createElement("table");
cookieCafeSales.appendChild(tableElem);

let allCookieCafes = [];

// Constructor ---
function Cookiecafe(location, minHrCust, maxHrCust, averageCookiesPerCust) {
  this.location = location;
  this.minHrCust = minHrCust;
  this.maxHrCust = maxHrCust;
  this.averageCookiesPerCust = averageCookiesPerCust;
  this.dailyTotal = 0;
  this.customer = [];
  this.cookies = [];
  allCookieCafes.push(this);
}

new Cookiecafe("Seattle", 23, 65, 6.3, 0);
new Cookiecafe("Tokyo", 3, 24, 1.2, 0);
new Cookiecafe("Dubai", 11, 38, 3.7);
new Cookiecafe("Paris", 20, 38, 2.3);
new Cookiecafe("Lima", 2, 16, 4.6);

Cookiecafe.prototype.custPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customer.push(
      Math.floor(
        Math.random() * (this.maxHrCust - this.minHrCust + 1) + this.minHrCust
      )
    );
  }
};

Cookiecafe.prototype.cookiesPerHr = function () {
  for (let i = 0; i < this.customer.length; i++) {
    this.cookies[i] = Math.round(this.customer[i] * this.averageCookiesPerCust);
    this.dailyTotal += this.cookies[i];
  }
};
// Table DOM Rendering
Cookiecafe.prototype.render = function () {
  // tr is ul
  let row1 = document.createElement("tr");
  tableElem.appendChild(row1);
  let td1 = document.createElement("td");
  td1.textContent = this.location;
  row1.appendChild(td1);

  for (let i = 0; i < hours.length; i++) {
    let td1Elem = document.createElement("td");
    td1Elem.textContent = this.cookies[i];
    row1.appendChild(td1Elem);
  }
  td1 = document.createElement("td");
  td1.textContent = this.dailyTotal;
  row1.appendChild(td1);
};

// create content (td or th) for table row // "li"
/*for(let i = 0; i < allCookieCafes.length; i++){
    let row1 = document.createElement("tr");
    tableElem.appendChild(row1);
    let th1Elem = document.createElement("th");
    th1Elem.textContent = this.location;
    row1.appendChild(th1Elem);
    cookieCafeSales.appendChild(row1);
    }

  let th2Elem = document.createElement("th");
  th2Elem.textContent = this.cookies;
  row1.appendChild(th2Elem);

  let th3Elem = document.createElement("th");
  th3Elem.textContent = this.customer;
  trElem.appendChild(th3Elem);*/

function createHeader() {
  let trElem = document.createElement("tr");
  let thElem = document.createElement("th");
  thElem.textContent = "     ";
  trElem.appendChild(thElem);

  for (let i = 0; i < hours.length; i++) {
    let thElem = document.createElement("th");
    thElem.textContent = hours[i];
    trElem.appendChild(thElem);
  }
  tableElem.appendChild(trElem);
}
createHeader();


allCookieCafes[0].custPerHour();
allCookieCafes[1].custPerHour();
allCookieCafes[2].custPerHour();
allCookieCafes[3].custPerHour();
allCookieCafes[4].custPerHour();

allCookieCafes[0].cookiesPerHr();
allCookieCafes[1].cookiesPerHr();
allCookieCafes[2].cookiesPerHr();
allCookieCafes[3].cookiesPerHr();
allCookieCafes[4].cookiesPerHr();

allCookieCafes[0].render();
allCookieCafes[1].render();
allCookieCafes[2].render();
allCookieCafes[3].render();
allCookieCafes[4].render();

// code to add new shop


//Event Listener to Form


// allCookieCafes();

/*
displayCookies: function () {
  this.cookiesPerHr();
  let section = document.getElementById("results");
  let heading = document.createElement("h2");
  heading.textContent = this.name;
  section.appendChild(heading);
  let list = document.createElement("ul");
  section.appendChild(list);
  for (let i = 0; i < this.customer.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
    list.appendChild(listItem);
  }
  let totalListItem = document.createElement("li");
  list.appendChild(totalListItem);
  totalListItem.textContent = `Total: ${this.dailyTotal} cookies`;
},
    
    
    

// The minimum number of customers per hour
//The maximum number of customers per hour
// The average number of cookies purchased per customer

// Store the min/max hourly customers, and the average cookies per customer, in object properties.
// Use a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// Store the results for each location in a separate array… perhaps as a property of the object representing that location.
// Display the values of each array as unordered lists in the browser.
// Calculating the sum of these hourly totals; your output for each location should look like this:
//--------------------------------------------------------------
const seattle = {
  name: "Seattle",
  minHrCust: 23,
  maxHrCust: 65,
  customer: [],
  cookies: [],
  dailyTotal: 0,
  averageCookiesPerCust: 6.3,
  custPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customNum = randomCount(this.minHrCust, this.maxHrCust);
      this.customer.push(customNum);
    }
    console.log(this.custPerHour);
  },
  cookiesPerHr: function () {
    this.custPerHour();
    for (let i = 0; i < this.customer.length; i++) {
      let hourlyTotal = this.customer[i] * this.averageCookiesPerCust;
      let roundNum = Math.round(hourlyTotal);
      this.dailyTotal += roundNum;
      this.cookies.push(roundNum);
    }
  },
  displayCookies: function () {
    this.cookiesPerHr();
    let section = document.getElementById("results");
    let heading = document.createElement("h2");
    heading.textContent = this.name;
    section.appendChild(heading);
    let list = document.createElement("ul");
    section.appendChild(list);
    for (let i = 0; i < this.customer.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
      list.appendChild(listItem);
    }
    let totalListItem = document.createElement("li");
    list.appendChild(totalListItem);
    totalListItem.textContent = `Total: ${this.dailyTotal} cookies`;
  },
};

seattle.displayCookies();
console.log(seattle);

function randomCount(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//---------------------------------------------------------
const tokyo = {
  name: "Tokyo",
  minHrCust: 3,
  maxHrCust: 24,
  customer: [],
  cookies: [],
  dailyTotal: 0,
  averageCookiesPerCust: 1.2,
  custPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customNum = randomCount(this.minHrCust, this.maxHrCust);
      this.customer.push(customNum);
    }
    console.log(this.custPerHour);
  },
  cookiesPerHr: function () {
    this.custPerHour();
    for (let i = 0; i < this.customer.length; i++) {
      let hourlyTotal = this.customer[i] * this.averageCookiesPerCust;
      let roundNum = Math.round(hourlyTotal);
      this.dailyTotal += roundNum;
      this.cookies.push(roundNum);
    }
  },
  displayCookies: function () {
    this.cookiesPerHr();
    let section = document.getElementById("results");
    let heading = document.createElement("h2");
    heading.textContent = this.name;
    section.appendChild(heading);
    let list = document.createElement("ul");
    section.appendChild(list);
    for (let i = 0; i < this.customer.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
      list.appendChild(listItem);
    }
    let totalListItem = document.createElement("li");
    list.appendChild(totalListItem);
    totalListItem.textContent = `Total: ${this.dailyTotal} cookies`;
  },
};

tokyo.displayCookies();
console.log(tokyo);

function randomCount(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//---------------------------------------------------------
const dubai = {
  name: "Dubai",
  minHrCust: 11,
  maxHrCust: 38,
  customer: [],
  cookies: [],
  dailyTotal: 0,
  averageCookiesPerCust: 3.7,
  custPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customNum = randomCount(this.minHrCust, this.maxHrCust);
      this.customer.push(customNum);
    }
    console.log(this.custPerHour);
  },
  cookiesPerHr: function () {
    this.custPerHour();
    for (let i = 0; i < this.customer.length; i++) {
      let hourlyTotal = this.customer[i] * this.averageCookiesPerCust;
      let roundNum = Math.round(hourlyTotal);
      this.dailyTotal += roundNum;
      this.cookies.push(roundNum);
    }
  },
  displayCookies: function () {
    this.cookiesPerHr();
    let section = document.getElementById("results");
    let heading = document.createElement("h2");
    heading.textContent = this.name;
    section.appendChild(heading);
    let list = document.createElement("ul");
    section.appendChild(list);
    for (let i = 0; i < this.customer.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
      list.appendChild(listItem);
    }
    let totalListItem = document.createElement("li");
    list.appendChild(totalListItem);
    totalListItem.textContent = `Total: ${this.dailyTotal} cookies`;
  },
};

dubai.displayCookies();
console.log(dubai);

function randomCount(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//---------------------------------------------------------
const paris = {
  name: "Paris",
  minHrCust: 20,
  maxHrCust: 38,
  customer: [],
  cookies: [],
  dailyTotal: 0,
  averageCookiesPerCust: 2.3,
  custPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customNum = randomCount(this.minHrCust, this.maxHrCust);
      this.customer.push(customNum);
    }
    console.log(this.custPerHour);
  },
  cookiesPerHr: function () {
    this.custPerHour();
    for (let i = 0; i < this.customer.length; i++) {
      let hourlyTotal = this.customer[i] * this.averageCookiesPerCust;
      let roundNum = Math.round(hourlyTotal);
      this.dailyTotal += roundNum;
      this.cookies.push(roundNum);
    }
  },
  displayCookies: function () {
    this.cookiesPerHr();
    let section = document.getElementById("results");
    let heading = document.createElement("h2");
    heading.textContent = this.name;
    section.appendChild(heading);
    let list = document.createElement("ul");
    section.appendChild(list);
    for (let i = 0; i < this.customer.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
      list.appendChild(listItem);
    }
    let totalListItem = document.createElement("li");
    list.appendChild(totalListItem);
    totalListItem.textContent = `Total: ${this.dailyTotal} cookies`;
  },
};

paris.displayCookies();
console.log(paris);

function randomCount(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//---------------------------------------------------------

const lima = {
  name: "Lima",
  minHrCust: 2,
  maxHrCust: 16,
  customer: [],
  cookies: [],
  dailyTotal: 0,
  averageCookiesPerCust: 4.6,
  custPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customNum = randomCount(this.minHrCust, this.maxHrCust);
      this.customer.push(customNum);
    }
    console.log(this.custPerHour);
  },
  cookiesPerHr: function () {
    this.custPerHour();
    for (let i = 0; i < this.customer.length; i++) {
      let hourlyTotal = this.customer[i] * this.averageCookiesPerCust;
      let roundNum = Math.round(hourlyTotal);
      this.dailyTotal += roundNum;
      this.cookies.push(roundNum);
    }
  },
  displayCookies: function () {
    this.cookiesPerHr();
    let section = document.getElementById("results");
    let heading = document.createElement("h2");
    heading.textContent = this.name;
    section.appendChild(heading);
    let list = document.createElement("ul");
    section.appendChild(list);
    for (let i = 0; i < this.customer.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
      list.appendChild(listItem);
    }
    let totalListItem = document.createElement("li");
    list.appendChild(totalListItem);
    totalListItem.textContent = `Total: ${this.dailyTotal} cookies`;
  },
};

lima.displayCookies();
console.log(lima);

function randomCount(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
*/
