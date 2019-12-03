  
//todo add search function for any city, and plug in user response to parameter in api

    // My API key
    var APIKey = "ee7c824d3d58884ff6c816c48daed6f2";

    // The URL to query the database for current weather
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Chicago,Illinois&units=imperial&appid=" + APIKey;

      
    // AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    
      // Store all of the retrieved data inside of an object called "response"
      .then(function(response) {

//todo add UV index (seperate function?), icon, current date    
        // Transfer content to HTML
        $(".city").html("<h3>" + response.name); //+ response.weather.icon
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);
        
    });

    // Log the queryURL
    console.log(queryURL);


    //The URL to query the database for 5-day
    var queryURL2 = "api.openweathermap.org/data/2.5/forecast/daily?" +
      "q=Chicago,Illinois&units=imperial&appid=" + APIKey;
    
    //AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL2,
      method: "GET"
    })

    //Store all of the retrived data inside of an object called ""
    .then(function(response2) {

      //transfer content to HTML
      $(".date2").html(response2.date);
      $(".temp2").text("Temperature (F) " + response2.main.temp);
      $(".humidity2").text("Humidity: " + response.main.humidity);
    });