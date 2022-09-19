'use strict'
console.log('hello');
let hours = ['6am', '7am','8am','9am','10am','11am', '12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
// 6:00 AM to 8:00 PM for all locations

// The minimum number of customers per hour
//The maximum number of customers per hour
// The average number of cookies purchased per customer

// Store the min/max hourly customers, and the average cookies per customer, in object properties.
// Use a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// Store the results for each location in a separate array… perhaps as a property of the object representing that location.
// Display the values of each array as unordered lists in the browser.
// Calculating the sum of these hourly totals; your output for each location should look like this:

const seattle = {
  name: 'Seattle',
  minHrCust: 23,
  maxHrCust: 65,
  customer: [],
  cookies:[],
  dailyTotal: 0,
  averageCookiesPerCust: 6.3,
  custPerHour: function(){
    for(let i = 0; i < hours.length; i++) {
      let customNum = randomCount(this.minHrCust, this.maxHrCust);
      this.customer.push(customNum);
    }
    console.log(this.custPerHour);
  },
  cookiesPerHr: function(){
    this.custPerHour();
    for(let i = 0; i < this.customer.length; i++){
      let hourlyTotal = this.customer[i] * this.averageCookiesPerCust;
      let roundNum = Math.round(hourlyTotal);
      this.dailyTotal += roundNum;
      this.cookies.push(roundNum);
    } 
  },
  displayCookies: function(){
    this.cookiesPerHr();
    let section = document.getElementById('results');
    let heading = document.createElement('h2');
    heading.textContent = this.name;
    section.appendChild(heading);
    let list = document.createElement('ul');
    section.appendChild(list);
    for(let i = 0; i < this.customer.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
      list.appendChild(listItem);
    }
    let totalListItem = document.createElement('li');
    list.appendChild(totalListItem);
    totalListItem.textContent = `Total: ${this.dailyTotal} cookies`
  }
};

seattle.displayCookies();
console.log(seattle);

  function randomCount (min, max){
    return Math.floor(Math.random()*(max - min +1)+ min);
  }
//---------------------------------------------------------
  const tokyo = {
    name: 'Tokyo',
    minHrCust: 3,
    maxHrCust: 24,
    customer: [],
    cookies:[],
    dailyTotal: 0,
    averageCookiesPerCust: 1.2,
    custPerHour: function(){
      for(let i = 0; i < hours.length; i++) {
        let customNum = randomCount(this.minHrCust, this.maxHrCust);
        this.customer.push(customNum);
      }
      console.log(this.custPerHour);
    },
    cookiesPerHr: function(){
      this.custPerHour();
      for(let i = 0; i < this.customer.length; i++){
        let hourlyTotal = this.customer[i] * this.averageCookiesPerCust;
        let roundNum = Math.round(hourlyTotal);
        this.dailyTotal += roundNum;
        this.cookies.push(roundNum);
      } 
    },
    displayCookies: function(){
      this.cookiesPerHr();
      let section = document.getElementById('results');
      let heading = document.createElement('h2');
      heading.textContent = this.name;
      section.appendChild(heading);
      let list = document.createElement('ul');
      section.appendChild(list);
      for(let i = 0; i < this.customer.length; i++){
        let listItem = document.createElement('li');
        listItem.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
        list.appendChild(listItem);
      }
      let totalListItem = document.createElement('li');
      list.appendChild(totalListItem);
      totalListItem.textContent = `Total: ${this.dailyTotal} cookies`
    }
  };
  
  tokyo.displayCookies();
  console.log(tokyo);
  
    function randomCount (min, max){
      return Math.floor(Math.random()*(max - min +1)+ min);
    }
  //---------------------------------------------------------
    const dubai = {
      name: 'Dubai',
      minHrCust: 11,
      maxHrCust: 38,
      customer: [],
      cookies:[],
      dailyTotal: 0,
      averageCookiesPerCust: 3.7,
      custPerHour: function(){
        for(let i = 0; i < hours.length; i++) {
          let customNum = randomCount(this.minHrCust, this.maxHrCust);
          this.customer.push(customNum);
        }
        console.log(this.custPerHour);
      },
      cookiesPerHr: function(){
        this.custPerHour();
        for(let i = 0; i < this.customer.length; i++){
          let hourlyTotal = this.customer[i] * this.averageCookiesPerCust;
          let roundNum = Math.round(hourlyTotal);
          this.dailyTotal += roundNum;
          this.cookies.push(roundNum);
        } 
      },
      displayCookies: function(){
        this.cookiesPerHr();
        let section = document.getElementById('results');
        let heading = document.createElement('h2');
        heading.textContent = this.name;
        section.appendChild(heading);
        let list = document.createElement('ul');
        section.appendChild(list);
        for(let i = 0; i < this.customer.length; i++){
          let listItem = document.createElement('li');
          listItem.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
          list.appendChild(listItem);
        }
        let totalListItem = document.createElement('li');
        list.appendChild(totalListItem);
        totalListItem.textContent = `Total: ${this.dailyTotal} cookies`
      }
    };
    
    dubai.displayCookies();
    console.log(Dubai);
    
      function randomCount (min, max){
        return Math.floor(Math.random()*(max - min +1)+ min);
      }
    //---------------------------------------------------------
      const paris = {
        name: 'Paris',
        minHrCust: 20,
        maxHrCust: 38,
        customer: [],
        cookies:[],
        dailyTotal: 0,
        averageCookiesPerCust: 2.3,
        custPerHour: function(){
          for(let i = 0; i < hours.length; i++) {
            let customNum = randomCount(this.minHrCust, this.maxHrCust);
            this.customer.push(customNum);
          }
          console.log(this.custPerHour);
        },
        cookiesPerHr: function(){
          this.custPerHour();
          for(let i = 0; i < this.customer.length; i++){
            let hourlyTotal = this.customer[i] * this.averageCookiesPerCust;
            let roundNum = Math.round(hourlyTotal);
            this.dailyTotal += roundNum;
            this.cookies.push(roundNum);
          } 
        },
        displayCookies: function(){
          this.cookiesPerHr();
          let section = document.getElementById('results');
          let heading = document.createElement('h2');
          heading.textContent = this.name;
          section.appendChild(heading);
          let list = document.createElement('ul');
          section.appendChild(list);
          for(let i = 0; i < this.customer.length; i++){
            let listItem = document.createElement('li');
            listItem.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
            list.appendChild(listItem);
          }
          let totalListItem = document.createElement('li');
          list.appendChild(totalListItem);
          totalListItem.textContent = `Total: ${this.dailyTotal} cookies`
        }
      };
      
      paris.displayCookies();
      console.log(paris);
      
        function randomCount (min, max){
          return Math.floor(Math.random()*(max - min +1)+ min);
        }
      
        //---------------------------------------------------------

        const lima = {
          name: 'Lima',
          minHrCust: 2,
          maxHrCust: 16,
          customer: [],
          cookies:[],
          dailyTotal: 0,
          averageCookiesPerCust: 4.6,
          custPerHour: function(){
            for(let i = 0; i < hours.length; i++) {
              let customNum = randomCount(this.minHrCust, this.maxHrCust);
              this.customer.push(customNum);
            }
            console.log(this.custPerHour);
          },
          cookiesPerHr: function(){
            this.custPerHour();
            for(let i = 0; i < this.customer.length; i++){
              let hourlyTotal = this.customer[i] * this.averageCookiesPerCust;
              let roundNum = Math.round(hourlyTotal);
              this.dailyTotal += roundNum;
              this.cookies.push(roundNum);
            } 
          },
          displayCookies: function(){
            this.cookiesPerHr();
            let section = document.getElementById('results');
            let heading = document.createElement('h2');
            heading.textContent = this.name;
            section.appendChild(heading);
            let list = document.createElement('ul');
            section.appendChild(list);
            for(let i = 0; i < this.customer.length; i++){
              let listItem = document.createElement('li');
              listItem.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
              list.appendChild(listItem);
            }
            let totalListItem = document.createElement('li');
            list.appendChild(totalListItem);
            totalListItem.textContent = `Total: ${this.dailyTotal} cookies`
          }
        };
        
        lima.displayCookies();
        console.log(lima);
        
          function randomCount (min, max){
            return Math.floor(Math.random()*(max - min +1)+ min);
          }
