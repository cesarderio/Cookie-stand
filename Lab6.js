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
