var apiKey="4fedd68b8e63edc633d408c361a04e03"
var apiUrl =https//api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apiKey}
function getWeatherApi(cityName) {
    fetch(apiUrl)
        
    .then (function(response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);
    });
}

