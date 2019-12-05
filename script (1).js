  
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

        console.log(response);

//todo add icon, current date    
        // Transfer content to HTML
        $(".city").html("<h3>" + response.name); //+ response.weather.icon
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);

        var lat = response.coord.lat;
        var lon = response.coord.lon;

        var uvQuery = `http://api.openweathermap.org/data/2.5/uvi/forecast?appid=${APIKey}&lat=${lat}&lon=${lon}&cnt=0`;

        $.ajax({
          url: uvQuery,
          method: "GET"
        })
        // Store all of the retrieved data inside of an object called "response"
        .then(function(uvResponse) {
          // TODO: Print this uv value to an HTMl DIV
          console.log(uvResponse);
        });
        
    });

    // Log the queryURL
    console.log(queryURL);


    console.log(APIKey);

    //The URL to query the database for 5-day
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=Chicago,Illinois&units=imperial&appid=" + APIKey;

    //AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL2,
      method: "GET"
    })

    //Store all of the retrived data inside of an object called ""
    .then(function(response2) {

      console.log(response2);

      var temps = response2.list;

      var dayIndex = 0;

      // The idea here is to loop through 5 days of the week
      // and calculate and index into the array of 40 data points given by the call to open weather forecast API
      // For example:
      // Day 1: data points in the array from 0 to 7
      // Day 2: data points in the array from 8 to 15
      // Day 3: data points in the array from 16 to 23
      // Day 4: data points etc etc etc
      for (var i = 0; i < 5; i++) {

        // If you have nested for-loops
        // Outer is i
        // Next one inner is j
        // Next one inner is k

        for (var j = 0; j < 7; j++) {
          var dayTemp = temps[j + (i * 8)].main.temp;
          console.log(`Index = ${j + (i * 8)}`);
        }

        console.log(`Day ${i+1} Temp = ${dayTemp}`);
      }

      var day1Data = response2.list[0];
      var day1DateText = day1Data.dt_txt;
      var day1Humidity = day1Data.main.humidity;
      var day1Temp = day1Data.main.temp;

      //transfer content to HTML
      $(".date1").html(day1DateText);
      $(".temp1").text("Temperature (F) " + day1Temp);
      $(".humidity1").text("Humidity: " + day1Humidity);
    });