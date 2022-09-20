let weather = {
    "apikey": "4810434087bceb756d982e303becfbe8",
    fetchweather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data));
    },
    displayweather: function (data) {
        const { name } = data;
        const { icon, discription } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".discription").innerText = discription;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = 
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function(){
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};

document
    .querySelector(".search button")
    .addEventListener("click", function() {
        weather.search(); 
    });
    document.querySelector(".search-bar").addEventListener("keyup",function() {
        if (event.key =="enter"){
            weather.search();
        }
    });

weather.fetchweather("mumbai");