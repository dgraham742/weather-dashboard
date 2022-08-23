var apiKey="b15e816cdb167f0393835f60ed447f93" 
var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={apiKey}"
var searchFunction =document.querySelector("#card")
var geoApiKey = "c3940598db6d977ef0a58084b53752d8"
var geoLocation = "http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}"

    


function getWeatherApi(cityName) {
    fetch(apiUrl)
        
    .then (function(response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);
    })}
