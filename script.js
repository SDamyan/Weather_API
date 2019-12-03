  
    // My API key
    var APIKey = "ee7c824d3d58884ff6c816c48daed6f2";

    // The URL to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Chicago,Illinois&units=imperial&appid=" + APIKey;

      
    // AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

//todo add UV index    
        // Transfer content to HTML
        $(".city").html("<h3>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);
    });