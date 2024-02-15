// declaration
const $ = document.querySelector.bind(document);

const page = $("#page");
const formInput = document.getElementById("inputForm");

const contentWrapper = $(".contentWrapper");
const weatherCurrent = $(".weather__current");
const weatherDetail = $(".weather__detail");
const cardWrapper = $(".cardWrapper");
const degC__Btn = $(".degC__Btn");
const degF__Btn = $(".degF__Btn");
const toast = $("#toast");
//
const locationTime = $(".location___time");
const weatherTemperature = $(".weather__temperature");
const tempIcon = $(".temp__icon");
const conditionIcon = $(".condition__icon");
const locationName = $(".location__name");
const nextdaysWrapper = $(".nextdaysWrapper");
const banner = $("#banner");
const inputForm = $("#inputForm");
const inputText = $(".input__text");
const locationInput = $(".location__Input");
const currentStatus = $(".current__status");
const degBtnSeperate = $(".deg__Btn--seperate");

let weatherCurrentValue;
let locationInputValue;
let defaultLocationValue = "VietNam";


let weatherDetailInDayArray;


//variable to save element
let iconStatusElement;
let currentStatusElement;
let weatherDetailElement;
let cardWrapperElement;
let weatherCurrentElement;
let nextdaysWrapperElement;
let inputFormElement;

let degIcon = "&degC";
let degValue;

//Handle to load default value when load window
window.onload = function (e) {
    getData(defaultLocationValue);
}
formInput.onsubmit  = function handleSubmit (e) 
{
    e.preventDefault();
    handleGetWeather();
}
degC__Btn.addEventListener("click", changeDegToC);
degF__Btn.addEventListener("click", changeDegToF);

//function to check value is empty or not
function checkEmptyValue (value) 
{
    if (value === "") 
    {
        return true;
    }
    else
    {
        return false;
    }
}

//function to validate input
function validateInput(value) 
{
    if(!checkEmptyValue(value)) 
    {
        getData(value);
    }
    else 
    {
       showEmptyToast();
    }
}
//function to get value from search input, validate and show
function handleGetWeather() 
{   
    locationInputValue = locationInput.value;
    validateInput(locationInputValue);
    
}

//function to get data from api and show to ui
function getData(value) 
{
    const response = fetch(`https://api.weatherapi.com/v1/forecast.json?key=4acb30f8960e480c96131445230802&q=${value}&days=10&aqi=yes&alerts=no`);
    response.then(res => res.json())
    .then((data) =>
    {
        if(data.error)
        {
            showNotExistToast(value);
        }
       else
       {    
            showWeatherCurrent(data);
            showWeatherDetail(data);
            showNextday(data);
            showWeatherInADay(data);
       }
    })
    .catch((error) => 
    {
        showCanNotGetApi();
    })
}

//SHOW TO UI
//function to show detail (wind, humidity, uv, feelLike) of current weather

function showWeatherDetail(data)
{
    weatherDetailInDayArray = data.forecast.forecastday[0].hour;
                weatherDetailElement =  `
                
                <span class="detail__info detail__info--seperate">
                    <span class="detail__title">Wind</span>
                    <span>${data.current.wind_mph}mph</span>
                </span>
                <span class="detail__info detail__info--seperate">
                    <span class="detail__title">Humidity</span>
                    <span>${data.current.humidity}</span>
                </span>
                <span class="detail__info detail__info--seperate">
                    <span class="detail__title">UV</span>
                    <span>${data.current.uv}</span>
                </span>
                <span class="detail__info">
                    <span class="detail__title">Real Feel</span>
                    <span>${data.current.feelslike_c}&deg;C</span>
                </span>
            `;
            weatherDetail.innerHTML = weatherDetailElement;
}
//function to show current weather
function showWeatherCurrent(data) 
{
 
    showBackground(data);
    degValue = data.current.temp_c;

    inputText.innerHTML =   `Right now in`;
    locationInput.style.borderBottom = "1px solid";
    locationInput.style.borderColor = "inherit";
    locationInput.innerHTML = `placeholder="your location"`;
    currentStatus.innerHTML = `. It's is  ${data.current.condition.text}.`;
    

    locationTime.innerHTML = `${data.location.localtime}`;
    weatherTemperature.innerHTML = `${degValue}`;
    tempIcon.innerHTML = `${degIcon}`;
    conditionIcon.innerHTML =  '';
    iconStatusElement = document.createElement('img');
    iconStatusElement.classList.add("condition__icon--img");
    iconStatusElement.src = `${data.current.condition.icon}`;
    conditionIcon.appendChild(iconStatusElement);

    showButtonChangeDeg();
    locationName.innerHTML = `${data.location.name}, ${data.location.country}`;
}
//function to show button Change Temperature 
function showButtonChangeDeg () 
{   
    degC__Btn.innerHTML =  `
            <span> &deg;</span>
            <i class="fa-solid fa-c"></i>
    `;
    degBtnSeperate.style.borderRight = "1px solid";
    degBtnSeperate.style.borderColor = "inherit";
    degF__Btn.innerHTML = `
            <span> &deg;</span>
            <i class="fa-solid fa-f"></i>
    `
}
//function to show the next days weather
function showNextday(data) 
{
    let day1 = data.forecast.forecastday[1];
    let day2 = data.forecast.forecastday[2];
    let day3 = data.forecast.forecastday[3];
    nextdaysWrapperElement = `
    <span class="cardTitle"> <span class="fontBold">3 days</span> <span class="fontThin">Forecast</span></span>
    <div class="dayCard">
        <div class="card__info">
            <div class="card__time">${day1.date}</div>
            <div class="card__temperature">${day1.day.avgtemp_c}&deg;C</div>
        </div>
        <div class="card__condition">
            <img class="card__icon" src="${day1.day.condition.icon}"></img>
            <div class="card__status">${day1.day.condition.text}</div>
       </div>
    </div>
    <div class="dayCard">
        <div class="card__condition">
            <img class="card__icon" src="${day2.day.condition.icon}"></img>
            <div class="card__status">${day2.day.condition.text}</div>
       </div>
        <div class="card__info">
            <div class="card__time">${day2.date}</div>
            <div class="card__temperature">${day2.day.avgtemp_c}&deg;C</div>
        </div>
       
    </div>
    <div class="dayCard">
        <div class="card__info">
            <div class="card__time">${day3.date}</div>
            <div class="card__temperature">${day3.day.avgtemp_c}&deg;C</div>
        </div>
        <div class="card__condition">
            <img class="card__icon" src="${day3.day.condition.icon}"></img>
            <div class="card__status">${day3.day.condition.text}</div>
       </div>
    </div>
    `;
    nextdaysWrapper.innerHTML = nextdaysWrapperElement;
}
//function to show the chart of weather detail (temperature, wind, humidity) in this day
function showWeatherInADay(data)
{
    let weatherToday = data.forecast.forecastday[0].hour;

    let temp = [];
    let wind = [];
    let humidity = [];
    
    for (let i = 0; i < 24; i++)
    {
        temp[i] = weatherToday[i].temp_c;
        wind[i] = weatherToday[i].wind_mph;
        humidity[i] = weatherToday[i].humidity;
      
    };
    var options = {
            series: [
            {
            name: 'Temperature',
            data: temp
            },
            {
                name: 'Wind',
                data: wind
            },
            {
                name: 'Humidity',
                data: humidity
            }
            ],
            chart: {
            height: 350,
            type: 'area'
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00",  "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],

            labels: {
                format: 'HH:mm',
            }
        },
        title: {
            text: "How is the weather today?",
            align: 'center',
            style: {
                fontSize: '28px',
                fontWeight: 'normal',
                fontFamily: 'inherit'   
            },
            
        }
        
    };
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

}
//function to show background
function showBackground(data)
{
   
    if (data.current.is_day === 1)
    {
      
        banner.style.animation = "slideInLeft ease 1s";
        banner.style.backgroundImage = "url('./assets/anhmay.jpg')"
        banner.style.color = "#000";
    }
    else if (data.current.is_day === 0){
        banner.style.backgroundImage = "url('./assets/night.jpg')";
        banner.style.color = "#FFF";
    }
}


//CHANGE DEG
//function to change deg to F
function changeDegToF() {

    if (degIcon === "&degC")
    {
        degValue = Math.round((degValue * 1.8) + 32);
        degIcon = "&degF";
        weatherTemperature.innerHTML = `${degValue}`;
        tempIcon.innerHTML = `${degIcon}`;
    }
    else {
        showNotChangeDegToast();
    }
    
}
//function to change deg to C
function changeDegToC () {

    if(degIcon === "&degF")
    {
        degValue= Math.round((degValue-32) / 1.8);
        degIcon = "&degC";
        weatherTemperature.innerHTML = `${degValue}`;
        tempIcon.innerHTML = `${degIcon}`;
    }
    else {
        showNotChangeDegToast();
    }
}

// TOAST
//function to handle toast
function handleToast({message}) {


    const toastValue = document.createElement('div');
    //Auto remove toast
    const autoRemoveID = setTimeout(function () {
        toast.removeChild(toastValue);
    },4000);

    toastValue.onclick = function (e) {
        if (e.target.closest('.toast__close')) {
            toast.removeChild(toastValue);
            clearTimeout(autoRemoveID); //để settimeout kh chạy nữa
        }
    }
    toastValue.classList.add('toastWrapper');
    toastValue.innerHTML = `
                   
                        <div class="toast__icon">
                             <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div class="toast__body">
                            <h3 class="toast__title">Error</h3>
                            <p class="toast__msg">${message}</p>
                        </div>
                        <div class="toast__close">
                            <i class="fas fa-times-circle"></i>
                        </div>
                 
                `;

    toast.appendChild(toastValue);
}
//function to show not exist location toast
function showNotExistToast(value) {
    handleToast(
        {
            message:    `Sorry, we couldn't found ${value}. Please try another location again!`,
        }
    );
}
//function to show empty input toast
function showEmptyToast() {
        handleToast (
            {
                message:   `This input is empty. Please try again later!`
            }
        )
}
//function to show can't change temperature toast
function showNotChangeDegToast() {
    handleToast (
        {
            message:   `Sorry, we can't change to ${degIcon}`
        }
    )
}
//function to show can't get api
function showCanNotGetApi() 
{
    handleToast (
        {
            message: `No internet. Please try again later! `
        }
    )
}

