'use strict'

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let open = '6:00 am to 8:00 PM'; 
let closed = 'Sorry we\'re closed';

//Welcome
let welcome = document.getElementById('Welcome');
let welcomeHeading = document.createElement('h2');
welcomeHeading.textContent = 'Welcome to Pat\'s Salmon Cookies!';
welcome.appendChild(welcomeHeading);

let intro = document.getElementById('Welcome');
let intropara = document.createElement('p');
intropara.textContent = 'Pat\'s Salmon Cookies started as a small corner stand by Pat himself, way back in the day. His family has kept thier family recipe for generations, and now they want to share their delicious cookies with the world! Come on in and check out our variety of gluten free, animal and kid friendly cookies! ';
intro.appendChild(intropara);





// Hours
let hours = document.getElementById('Hours');
let hoursHeading = document.createElement('h2');
hoursHeading.textContent = 'Hours of Operation';
hours.appendChild(hoursHeading);

let dailyHours = document.getElementById('Hours');
let dailyHoursOpen = document.createElement('ul');
dailyHours.appendChild(dailyHoursOpen);

for (let i = 0; i < days.length-1; i++) {
  let listItem = document.createElement('li');
  listItem.textContent = `${days[i]}: ${open}`;
  dailyHoursOpen.appendChild(listItem);
}

let closedSun = document.createElement('li');
closedSun.textContent = `${days.pop()}: ${closed}`;
dailyHoursOpen.appendChild(closedSun);
