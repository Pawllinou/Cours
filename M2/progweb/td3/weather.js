function showWeather(cityInput) {
    const url = 'https://www.prevision-meteo.ch/services/json/' + cityInput;
    fetch(`https://www.prevision-meteo.ch/services/json/${cityInput}`).then(response => {
        return response.json();
    }).then(data => {
        document.getElementById("cityName").innerHTML = data.city_info.name;
        document.getElementById("temperature").innerHTML = data.current_condition.tmp;
        document.getElementById("soleil").innerHTML = "Le soleil se lève à " + data.city_info.sunrise + " et se couche à " + data.city_info.sunset;
        document.getElementById("condition").innerHTML = data.current_condition.condition;
        document.getElementById("next1").innerHTML = "La temperature maximale demain sera de: " + data.fcst_day_1.tmax + "°C";
        document.getElementById("next2").innerHTML = "La temperature maximale après-demain sera de: " + data.fcst_day_2.tmax + "°C";
        document.getElementById("next3").innerHTML = data.fcst_day_3.tmax;
    }).catch(err => {

    });
}

function main() {
    const cityInput = document.getElementById("cityInput");
    const showButton = document.getElementById("showBtn");
    showButton.addEventListener('click', showWeather(cityInput.value));
}

main();