'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




const seattle = {
    City: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avg: 6.3,
    photo: './img/Seattle.jpg',
    currentCust: function (min, max) {
        var randomCust = rngMachine(this.minCustomers, this.maxCustomers);
        return randomCust
    },
    currentHourly: function () {
        for (var i = 0; i < hours.length; i++) {
            var hour;
            if(i < 6){
                hour = (6 + i) + 'am';
            } else if ( i === 6){
                hour = (6 + i) + 'pm';
            } else {
                hour = ((6 + i) - 12) + 'pm'
            }
        let currentHour= {};
        currentHour[hour] =  Math.ceil(this.currentCust(this.minCustomers, this.maxCustomers) * this.avg)
        this.hourlyCust.push(currentHour);
        }
    },
    hourlyCust: []
}


    

const tokyo = {
    City: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avg: 1.2,
    photo: './img/Tokyo.jpg',
    currentCust: function (min, max) {
        var randomCust = rngMachine(this.minCustomers, this.maxCustomers);
        return randomCust
    },
    currentHourly: function () {
        for (var i = 0; i < hours.length; i++) {
            var hour;
            if(i < 6){
                hour = (6 + i) + 'am';
            } else if ( i === 6){
                hour = (6 + i) + 'pm';
            } else {
                hour = ((6 + i) - 12) + 'pm'
            }
        let currentHour= {};
        currentHour[hour] =  Math.ceil(this.currentCust(this.minCustomers, this.maxCustomers) * this.avg)
        this.hourlyCust.push(currentHour);
        }
    },
    hourlyCust: []
}


const dubai = {
    City: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avg: 3.7,
    photo: './img/Dubai.jpg',
    currentCust: function (min, max) {
        var randomCust = rngMachine(this.minCustomers, this.maxCustomers);
        return randomCust
    },
    currentHourly: function () {
        for (var i = 0; i < hours.length; i++) {
            var hour;
            if(i < 6){
                hour = (6 + i) + 'am';
            } else if ( i === 6){
                hour = (6 + i) + 'pm';
            } else {
                hour = ((6 + i) - 12) + 'pm'
            }
        let currentHour= {};
        currentHour[hour] =  Math.ceil(this.currentCust(this.minCustomers, this.maxCustomers) * this.avg)
        this.hourlyCust.push(currentHour);
        }
    },
    hourlyCust: []
}

const paris = {
    City: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avg: 2.3,
    photo: './img/Paris.jpg',
    currentCust: function (min, max) {
        var randomCust = rngMachine(this.minCustomers, this.maxCustomers);
        return randomCust
    },
    currentHourly: function () {
        for (var i = 0; i < hours.length; i++) {
            var hour;
            if(i < 6){
                hour = (6 + i) + 'am';
            } else if ( i === 6){
                hour = (6 + i) + 'pm';
            } else {
                hour = ((6 + i) - 12) + 'pm'
            }
        let currentHour= {};
        currentHour[hour] =  Math.ceil(this.currentCust(this.minCustomers, this.maxCustomers) * this.avg)
        this.hourlyCust.push(currentHour);
        }
    },
    hourlyCust: []
}

const lima = {
    City: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avg: 4.6,
    photo: './img/Lima.jpg',
    currentCust: function (min, max) {
        var randomCust = rngMachine(this.minCustomers, this.maxCustomers);
        return randomCust
    },
    currentHourly: function () {
        for (var i = 0; i < hours.length; i++) {
            var hour;
            if(i < 6){
                hour = (6 + i) + 'am';
            } else if ( i === 6){
                hour = (6 + i) + 'pm';
            } else {
                hour = ((6 + i) - 12) + 'pm'
            }
        let currentHour= {};
        currentHour[hour] =  Math.ceil(this.currentCust(this.minCustomers, this.maxCustomers) * this.avg)
        this.hourlyCust.push(currentHour);
        }
    },
    hourlyCust: []
}



function rngMachine(min, max){
    var num = Math.floor(Math.random() * (max - min) + min)
    return num;
}
function hourlyRates(minCustomers, maxCustomers) {
    for ( var i = 0; i < hours.length; i++) {
    this.HourlyCust.push(Math.ceiling(this.currentCust(this.minCustomers, this.maxCustomers) * this.avg));
    }
}



seattle.currentHourly();
console.log(seattle);
tokyo.currentHourly();
console.log(tokyo);
dubai.currentHourly();
console.log(dubai);
paris.currentHourly();
console.log(paris);
lima.currentHourly();
console.log(lima);

const randomCity = [dubai, lima, paris, seattle, tokyo];

function renderCities(city) {
  
    // create an article
    const articleEle = document.createElement('article');
    let cityDiv = document.getElementById("cityProfiles")
    cityDiv.appendChild(articleEle);
    // create an image
    const imgEle = document.createElement('img');
    imgEle.src = city.photo;
    articleEle.appendChild(imgEle);
    // create an h2  name
    const h2Ele = document.createElement('h2');
    h2Ele.textContent = city.name;
    articleEle.appendChild(h2Ele);
    // h3 with color
    // create a p for age
    const ulEle = document.createElement('ul');
    articleEle.appendChild(ulEle);

    var sum = 0;
    for (let i = 0; i < city.hourlyCust.length; i++) {
      let currenthour = city.hourlyCust[i];
      const liEle = document.createElement('li');
      let key = Object.keys(city.hourlyCust[i])[0];
      let num = city.hourlyCust[i][key]
      liEle.textContent = key + ' - ' + num;
      ulEle.appendChild(liEle);
      sum += num;
    }
    const devEle = document.createElement('li');
    devEle.textContent = 'Total' + ' - ' + sum;
    ulEle.appendChild(devEle);
  }

    function renderAllCities() {
    // loops through kitten array and calls render on each kitten
    for (let i = 0; i < randomCity.length; i++) {
      let currentCity = randomCity[i];
      renderCities(currentCity);
    }
  }
  
  renderAllCities();
