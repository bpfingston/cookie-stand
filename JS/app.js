'use strict';


//----------------------------------------------------------------------------
CookieStand.cookieSushi = [];
//----------------------------------------------------------------------------
//creating a constructor for all the objects
function CookieStand(cityLocation, minCust, maxCust, avgCookieSale){
    this.cityLocation = cityLocation;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.cookieSalesPerHour = [];
    this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    this.hoursOpen = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    CookieStand.cookieSushi.push(this);
  }
//----------------------------------------------------------------------------

//create new stores
new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai',11, 38, 3.7);
new CookieStand('Paris',20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);
console.log(CookieStand.cookieSushi)

//----------------------------------------------------------------------------

//creating function to generate random num and push to empty array
CookieStand.prototype.custPerHour = function (){
    let min = this.minCust;
    let max = this.maxCust;    
    min = Math.ceil(this.minCust);
    max = Math.floor(this.maxCust);
    var num = Math.floor(Math.random() * (max - min + 1) + min)
    return num;
}
//----------------------------------------------------------------------------      


// creating function to generate random and push to empty array;
CookieStand.prototype.dailySales = function () {
    let operatingHours = this.hoursOpen;
    var cookiesSold = 0;
    let lastIndex = operatingHours.length - 1
    var numberOfHours = operatingHours[lastIndex] - operatingHours[0];
      for (var i = 0; i < numberOfHours + 1; i++) {
        cookiesSold = this.custPerHour() * this.avgCookieSale;
        cookiesSold = Math.round(cookiesSold);
        this.cookieSalesPerHour.push(cookiesSold);
    }
}

for(var i = 0; i < CookieStand.cookieSushi.length; i++){
    var cStand = CookieStand.cookieSushi[i];
    cStand.dailySales();
}  


//----------------------------------------------------------------------------

console.log(CookieStand.cookieSushi)
let cityDiv = document.getElementById("cityProfiles");


function renderCities() {
    
    
    const articleEle = document.createElement('article');
    let cityDiv = document.getElementById("cityProfiles")
    cityDiv.appendChild(articleEle);
  
    const tableEle = document.createElement('table');
    articleEle.appendChild(tableEle);
    
    // let trEle = document.createElement('tr');
    //     tableEle.appendChild(trEle);
    //     for(var k = 0; k < CookieStand.cookieSushi.length)

    

for (let i = 0; i < CookieStand.cookieSushi.length; i++) {
    let currentCity = CookieStand.cookieSushi[i];
    console.log(currentCity)

        const trEle = document.createElement('tr');
        tableEle.appendChild(trEle);

        const theadEle = document.createElement('th');
        theadEle.textContent = currentCity.cityLocation;
        trEle.appendChild(theadEle);
    
        for(let j = 0; j < currentCity.cookieSalesPerHour.length; j++){
            let currentAmount = currentCity.cookieSalesPerHour[j];

            const tdEle = document.createElement('td');
            tdEle.textContent = currentAmount;
            trEle.appendChild(tdEle);
   
        }
    
    }

}
function renderAllCities() {
      renderCities();
    }
  renderAllCities();



// const seattle = {
//     City: 'Seattle',
//     minCustomers: 23,
//     maxCustomers: 65,
//     avg: 6.3,
//     photo: './img/Seattle.jpg',
//     currentCust: function (min, max) {
//         var randomCust = rngMachine(this.minCustomers, this.maxCustomers);
//         return randomCust
//     },
//     currentHourly: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var hour;
//             if(i < 6){
//                 hour = (6 + i) + 'am';
//             } else if ( i === 6){
//                 hour = (6 + i) + 'pm';
//             } else {
//                 hour = ((6 + i) - 12) + 'pm'
//             }
//         let currentHour= {};
//         currentHour[hour] =  Math.ceil(this.currentCust(this.minCustomers, this.maxCustomers) * this.avg)
//         this.hourlyCust.push(currentHour);
//         }
//     },
//     hourlyCust: []
// }


    

// const tokyo = {
//     City: 'Tokyo',
//     minCustomers: 3,
//     maxCustomers: 24,
//     avg: 1.2,
//     photo: './img/Tokyo.jpg',
//     currentCust: function (min, max) {
//         var randomCust = rngMachine(this.minCustomers, this.maxCustomers);
//         return randomCust
//     },
//     currentHourly: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var hour;
//             if(i < 6){
//                 hour = (6 + i) + 'am';
//             } else if ( i === 6){
//                 hour = (6 + i) + 'pm';
//             } else {
//                 hour = ((6 + i) - 12) + 'pm'
//             }
//         let currentHour= {};
//         currentHour[hour] =  Math.ceil(this.currentCust(this.minCustomers, this.maxCustomers) * this.avg)
//         this.hourlyCust.push(currentHour);
//         }
//     },
//     hourlyCust: []
// }


// const dubai = {
//     City: 'Dubai',
//     minCustomers: 11,
//     maxCustomers: 38,
//     avg: 3.7,
//     photo: './img/Dubai.jpg',
//     currentCust: function (min, max) {
//         var randomCust = rngMachine(this.minCustomers, this.maxCustomers);
//         return randomCust
//     },
//     currentHourly: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var hour;
//             if(i < 6){
//                 hour = (6 + i) + 'am';
//             } else if ( i === 6){
//                 hour = (6 + i) + 'pm';
//             } else {
//                 hour = ((6 + i) - 12) + 'pm'
//             }
//         let currentHour= {};
//         currentHour[hour] =  Math.ceil(this.currentCust(this.minCustomers, this.maxCustomers) * this.avg)
//         this.hourlyCust.push(currentHour);
//         }
//     },
//     hourlyCust: []
// }

// const paris = {
//     City: 'Paris',
//     minCustomers: 20,
//     maxCustomers: 38,
//     avg: 2.3,
//     photo: './img/Paris.jpg',
//     currentCust: function (min, max) {
//         var randomCust = rngMachine(this.minCustomers, this.maxCustomers);
//         return randomCust
//     },
//     currentHourly: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var hour;
//             if(i < 6){
//                 hour = (6 + i) + 'am';
//             } else if ( i === 6){
//                 hour = (6 + i) + 'pm';
//             } else {
//                 hour = ((6 + i) - 12) + 'pm'
//             }
//         let currentHour= {};
//         currentHour[hour] =  Math.ceil(this.currentCust(this.minCustomers, this.maxCustomers) * this.avg)
//         this.hourlyCust.push(currentHour);
//         }
//     },
//     hourlyCust: []
// }

// const lima = {
//     City: 'Lima',
//     minCustomers: 2,
//     maxCustomers: 16,
//     avg: 4.6,
//     photo: './img/Lima.jpg',
//     currentCust: function (min, max) {
//         var randomCust = rngMachine(this.minCustomers, this.maxCustomers);
//         return randomCust
//     },
//     currentHourly: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var hour;
//             if(i < 6){
//                 hour = (6 + i) + 'am';
//             } else if ( i === 6){
//                 hour = (6 + i) + 'pm';
//             } else {
//                 hour = ((6 + i) - 12) + 'pm'
//             }
//         let currentHour= {};
//         currentHour[hour] =  Math.ceil(this.currentCust(this.minCustomers, this.maxCustomers) * this.avg)
//         this.hourlyCust.push(currentHour);
//         }
//     },
//     hourlyCust: []
// }



// function rngMachine(min, max){
//     var num = Math.floor(Math.random() * (max - min) + min)
//     return num;
// }
// function hourlyRates(minCustomers, maxCustomers) {
//     for ( var i = 0; i < hours.length; i++) {
//     this.HourlyCust.push(Math.round(this.currentCust(this.minCustomers, this.maxCustomers) * this.avg));
//     }
// }



// seattle.currentHourly();
// console.log(seattle);
// tokyo.currentHourly();
// console.log(tokyo);
// dubai.currentHourly();
// console.log(dubai);
// paris.currentHourly();
// console.log(paris);
// lima.currentHourly();
// console.log(lima);

// const randomCity = [dubai, lima, paris, seattle, tokyo];
