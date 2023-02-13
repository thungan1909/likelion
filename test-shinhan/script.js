const $ = document.querySelector.bind(document);

const locationInput = $(".location__Input");
const findBtn = $(".findBtn");

const weatherWrapper = $(".weather__wrapper");
const weatherTitle = $(".weather__title");

let dataBody;
let dataCurrent, dataLocation, dataForecast;
let locationValue;
let weatherTitleValue;

findBtn.addEventListener("click", handleFind);

function checkEmptyValue (value) 
{
    if(value ==="") return false;
    return true;
}
function validateInput() 
{
    if(checkEmptyValue) 
    {
        getData(locationValue);
    }
    if (lo)
}
function handleFind() 
{
  
   
   
}

function getData() 
{
    const response = fetch(`http://api.weatherapi.com/v1/current.json?key=4acb30f8960e480c96131445230802&q=${locationValue}&aqi=no`);
    response.then(res => res.json())
    .then((data) => showTimeZone(data));
}
function findLocation(data) {
    
}
function showTimeZone(data) {
    dataCurrent = data.current;
    dataLocation = data.location;
    dataForecast = data.dataForecast;

    weatherTitleValue = ` 
                        <span>${dataLocation.name}</span>
                        <span>Weather Forecast</span>
                    `;
    weatherTitle.innerHTML += weatherTitleValue;
}
