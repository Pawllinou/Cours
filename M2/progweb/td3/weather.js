cityName = "";
day = 0;
hour = "12H00";
lat = 0;
lng = 0;
latlng = false;

//Fill all the info elements on the page.
function showWeather() {
    let url='';
    if (latlng){
        url = "https://www.prevision-meteo.ch/services/json/lat=" + lat + "lng=" + lng;
    }else{
        url = "https://www.prevision-meteo.ch/services/json/" + cityName;
    }
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        hourlyData = eval("data.fcst_day_" + day + ".hourly_data[hour]");
        document.getElementById("cityName").innerHTML = data.city_info.name + " : " + hourlyData.CONDITION;
        document.getElementById("temperature").innerHTML = "La température est de " + hourlyData.TMP2m + "°C";
        document.getElementById("sun").innerHTML = "Le soleil se lève à " + data.city_info.sunrise + " et se couche à " + data.city_info.sunset;
        document.getElementById("wind").innerHTML = "vent: " + hourlyData.WNDSPD10m + "km/h, direction: " + hourlyData.WNDDIRCARD10;
        document.getElementById("pressure").innerHTML = "pression: " + hourlyData.PRMSL + "Hpa";
        document.getElementById("humidity").innerHTML = "humidité: " + hourlyData.RH2m + "%";
        document.getElementById("next1").innerHTML = "La temperature maximale demain sera de: " + data.fcst_day_1.tmax + "°C";
        document.getElementById("next2").innerHTML = "La temperature maximale après-demain sera de: " + data.fcst_day_2.tmax + "°C";
    }).catch(err => {

    });
}

//Show buttons only if datas are filled
function showBtns(){
    let btn0 = document.getElementById("day_0");
    let btn1 = document.getElementById("day_1");
    let btn2 = document.getElementById("day_2");
    let btn3 = document.getElementById("day_3");
    let btn4 = document.getElementById("hours_4");
    let btn8 = document.getElementById("hours_8");
    let btn12 = document.getElementById("hours_12");
    let btn16 = document.getElementById("hours_16");
    let btn20 = document.getElementById("hours_20");
    btn0.style.visibility='visible';
    btn1.style.visibility='visible';
    btn2.style.visibility='visible';
    btn3.style.visibility='visible';
    btn4.style.visibility='visible';
    btn8.style.visibility='visible';
    btn12.style.visibility='visible';
    btn16.style.visibility='visible';
    btn20.style.visibility='visible';
    btn0.addEventListener('click', function(){day=0; highlightDay(btn0); showWeather();});
    btn1.addEventListener('click', function(){day=1; highlightDay(btn1); showWeather();});
    btn2.addEventListener('click', function(){day=2; highlightDay(btn2); showWeather();});
    btn3.addEventListener('click', function(){day=3; highlightDay(btn3); showWeather();});
    btn4.addEventListener('click', function(){hour="4H00"; highlightHour(btn4); showWeather();});
    btn8.addEventListener('click', function(){hour="8H00"; highlightHour(btn8); showWeather();});
    btn12.addEventListener('click', function(){hour="12H00"; highlightHour(btn12); showWeather();});
    btn16.addEventListener('click', function(){hour="16H00"; highlightHour(btn16); showWeather();});
    btn20.addEventListener('click', function(){hour="20H00"; highlightHour(btn20); showWeather();});
    highlightHour(btn12);
    highlightDay(btn0);
}

function highlightDay(button){
    let btn0 = document.getElementById("day_0");
    let btn1 = document.getElementById("day_1");
    let btn2 = document.getElementById("day_2");
    let btn3 = document.getElementById("day_3");
    btn0.style.background="#0463df";
    btn1.style.background="#0463df";
    btn2.style.background="#0463df";
    btn3.style.background="#0463df";
    button.style.background="#c9df04";
    return;
}

function highlightHour(button){
    let btn4 = document.getElementById("hours_4");
    let btn8 = document.getElementById("hours_8");
    let btn12 = document.getElementById("hours_12");
    let btn16 = document.getElementById("hours_16");
    let btn20 = document.getElementById("hours_20");
    btn4.style.background="#0463df";
    btn8.style.background="#0463df";
    btn12.style.background="#0463df";
    btn16.style.background="#0463df";
    btn20.style.background="#0463df";
    button.style.background="#c9df04";
    return;
}

function topCities(nb){
    let city_name="Paris";
    switch (nb){
        case (2) :
            city_name="Marseille";
            break;
        case (3) :
            city_name="Lyon";
            break;
        case (4) :
            city_name="Bordeaux";
            break;
        case (5) :
            city_name="Brest";
            break;
    }
    let url = "https://www.prevision-meteo.ch/services/json/" + city_name;
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        document.getElementById("city" + nb +"_name").innerHTML = data.city_info.name;
        document.getElementById("city" + nb + "_temp").innerHTML = data.current_condition.tmp + "°C";
        document.getElementById("city" + nb + "_wind").innerHTML = "vent: " + data.current_condition.wnd_spd + "km/h  " + data.current_condition.wnd_dir;
        document.getElementById("city" + nb + "_icon").src = data.current_condition.icon;
        const cityButton = document.getElementById("city" + nb + "_moreinfo");
        cityButton.addEventListener('click', function(){cityName = city_name;latlng=false;showWeather(); showBtns();});
    }).catch(err => {

    });
}

function onMapClick(event){
    lat=event.latlng.lat;
    lng=event.latlng.lng;
    latlng=true;
    showWeather();
    showBtns();
}

function main() {
    var map = L.map('map').setView([46.505, 3.19], 6);
    map.on('click', onMapClick);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    for (let i=1; i<=5; i++){
        topCities(i);
    }
    var map=document.getElementById("map_frame");
    if (map){
        map.addEventListener('load', function(){console.log(map);})
    }
    let showButton = document.getElementById("showBtn");
    let cityInput=document.getElementById("cityInput");
    showButton.addEventListener('click', function(){
        cityName=cityInput.value;
        latlng=false;
        showWeather();
        showBtns();
    });
    cityInput.addEventListener("keypress", function(event){
        if(event.key=="Enter"){
            showButton.click();
        }
    });
}

main();