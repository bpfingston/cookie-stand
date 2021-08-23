'use strict';


//----------------------------------------------------------------------------
const cityTable = document.getElementById('cityProfiles');
const formEle = document.getElementById('addCookieStand');
const hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//----------------------------------------------------------------------------
//creating a constructor for all the objects
function CookieStand(name, minCust, maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookieSalesPerHour = [];

  CookieStand.cookieSushi.push(this);
}

CookieStand.cookieSushi = [];
//----------------------------------------------------------------------------

//create new stores

new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai',11, 38, 3.7);
new CookieStand('Paris',20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);
console.log(CookieStand.cookieSushi);
//----------------------------------------------------------------------------

//creating function to generate random num and push to empty array
CookieStand.prototype.custPerHour = function (){
  let min = this.minCust;
  let max = this.maxCust;
  min = Math.ceil(this.minCust);
  max = Math.floor(this.maxCust);
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
};
//----------------------------------------------------------------------------


// creating function to generate random and push to empty array;
CookieStand.prototype.dailySales = function() {
  for (let i = 0; i < hoursOpen.length; i++) {
    let cookiesSold = this.custPerHour() * this.avgCookieSale;
    this.cookieSalesPerHour.push(Math.ceil(cookiesSold));
  }
};
function fillCookieSalesPerHourAllCities() {
  for(let i = 0; i < CookieStand.cookieSushi.length; i++){
    let currentCity = CookieStand.cookieSushi[i];
    currentCity.dailySales();
  }
}
fillCookieSalesPerHourAllCities();

//----------------------------------------------------------------------------

console.log(CookieStand.cookieSushi);


// function renderCities() {

//     const articleEle = document.createElement('article');
//     let cityDiv = document.getElementById("cityProfiles")
//     cityDiv.appendChild(articleEle);

//     const tableEle = document.createElement('table');
//     articleEle.appendChild(tableEle);

//     // let trEle = document.createElement('tr');
//     //     tableEle.appendChild(trEle);
//     //     for(var k = 0; k < CookieStand.cookieSushi.length)



// for (let i = 0; i < CookieStand.cookieSushi.length; i++) {
//     let currentCity = CookieStand.cookieSushi[i];
//     console.log(currentCity)

//         const trEle = document.createElement('tr');
//         tableEle.appendChild(trEle);

//         const theadEle = document.createElement('th');
//         theadEle.textContent = currentCity.cityLocation;
//         trEle.appendChild(theadEle);

//         for(let j = 0; j < currentCity.cookieSalesPerHour.length; j++){
//             let currentAmount = currentCity.cookieSalesPerHour[j];

//             const tdEle = document.createElement('td');
//             tdEle.textContent = currentAmount;
//             trEle.appendChild(tdEle);

//         }

//     }

// }

// function renderAllCities() {
//     renderCities();
//   }
// renderAllCities();


//----------------------------------------------------------------------------

function makeEle(tag, parent, text) {
  const ele = document.createElement(tag);
  parent.appendChild(ele);
  if (text) {
    ele.textContent = text;
  }
  return ele;
}

//----------------------------------------------------------------------------

CookieStand.prototype.renderSingleCity = function(body) {
  let total = 0;
  const rowEle = document.createElement('tr');
  body.appendChild(rowEle);
  // eslint-disable-next-line no-unused-vars
  const thElem = makeEle('th', rowEle, this.name);
  for (let i = 0; i < hoursOpen.length; i++) {
    let cookiesThisHour = this.cookieSalesPerHour[i];
    total += cookiesThisHour;
    makeEle('td', rowEle, cookiesThisHour);
  }
  makeEle('td', rowEle, total);
};

//----------------------------------------------------------------------------

function renderAllCities() {
  let tbodyEle = makeEle('tbody', cityTable, null);
  for (let i = 0; i < CookieStand.cookieSushi.length; i++) {
    CookieStand.cookieSushi[i].renderSingleCity(tbodyEle);
  }
}

//----------------------------------------------------------------------------

function makeTheFooter() {
  const tfootEle = makeEle('tfoot', cityTable, null);
  const rowEle = makeEle('tr', tfootEle, null);
  makeEle('th', rowEle, 'Hourly Total');
  let hourlyTotal = 0;
  let dailyTotal = 0;
  for (let i = 0; i < hoursOpen.length; i++) {
    for (let j = 0; j < CookieStand.cookieSushi.length; j++) {
      let currentLocation = CookieStand.cookieSushi[j];
      hourlyTotal += currentLocation.cookieSalesPerHour[i];
    }
    makeEle('td', rowEle, hourlyTotal);
    dailyTotal += hourlyTotal;
    hourlyTotal = 0;
  }
  makeEle('td', rowEle, dailyTotal);
}


//----------------------------------------------------------------------------

function makeTheHeader() {
  const theadEle = makeEle('thead', cityTable, null);
  const rowEle = makeEle('tr', theadEle, null);
  makeEle('th', rowEle, ' ');
  for (let i = 0; i < hoursOpen.length; i++) {
    let currentTime = hoursOpen[i];
    makeEle('th', rowEle, currentTime);
  }
  makeEle('th', rowEle, 'Daily Total');
}



function standSubmit(event){
  event.preventDefault();
  console.log(event);
  console.log(event.target.name.value);
  let name = event.target.name.value;
  let min = parseInt(event.target.minCust.value);
  let max = parseInt(event.target.maxCust.value);
  let avg = parseFloat(event.target.avgCookieSale.value);

  let newStand = new CookieStand(name, min, max, avg);
  console.log(newStand);
  // console.log(CookieStand.cookieSushi.push(newStand));

  newStand.dailySales();
  cityTable.innerHTML = '';
  makeTheFooter();
  makeTheHeader();
  renderAllCities();
  event.target.reset();
}


makeTheHeader();
renderAllCities();
makeTheFooter();
formEle.addEventListener('submit', standSubmit);
