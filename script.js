  
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
         console.log(queryURL);

//todo add icon, current date    
        // Transfer content to HTML
         $(".date").text(response.dt);
        var icon = response.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png"
        $(".icon").html(`<img src=${iconUrl} />`); 
        $(".city").html("<h3>" + response.name); 
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".temp").text("Temperature " + response.main.temp + " F");
        
        

        var lat = response.coord.lat;
        var lon = response.coord.lon;

        var uvQuery = `http://api.openweathermap.org/data/2.5/uvi/forecast?appid=${APIKey}&lat=${lat}&lon=${lon}&cnt=0`;

        $.ajax({
          url: uvQuery,
          method: "GET"
        })

        // Store all of the retrieved data inside of an object called "response"
        .then(function(uvResponse) {

          //transfer content to HTML
          $(".uv").html("UV index: " + uvResponse[0].value);

          
          //console.log(uvResponse);
        });

         
    });

    // Log the queryURL
    // console.log(queryURL);


    // console.log(APIKey);

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
      // Day 1: data points in the array from 0 to 7 etc.
      for (var i = 0; i < 5; i++) {

        for (var j = 0; j < 7; j++) {
          var dayTemp = temps[j + (i * 8)].main.temp;
          console.log(`Index = ${j + (i * 8)}`);
        }

        console.log(`Day ${i+1} Temp = ${dayTemp}`);
      }

      //day1 variables
      var day1Data = response2.list[0];
      var day1DateText = day1Data.dt_txt;
      var day1Humidity = day1Data.main.humidity;
      var day1Temp = day1Data.main.temp;

      //transfer content to HTML
      $(".date1").html(day1DateText);
      $(".temp1").text("Temp: " + day1Temp + " F");
      $(".humidity1").text("Humidity: " + day1Humidity + "%");

//todo: display date correctly
      //day2 variables and html transfers
      var day2Data = response2.list[8];
      var day2DateText = day2Data.dt_txt;
      var day2Humidity = day2Data.main.humidity;
      var day2Temp = day2Data.main.temp;

//todo: add in icon for each day
      /* //icon
      var icon1 = response2.weather[0].icon;
        var iconUrl1 = "http://openweathermap.org/img/wn/" + icon1 + ".png"
        $(".icon1").html(`<img src=${iconUrl1} />`);  */

      //transfer content to HTML
      $(".date2").html(day2DateText);
      $(".temp2").text("Temp: " + day2Temp + " F");
      $(".humidity2").text("Humidity: " + day2Humidity + "%");


      //day3 variables and html transfers
      var day3Data = response2.list[16];
      var day3DateText = day3Data.dt_txt;
      var day3Humidity = day3Data.main.humidity;
      var day3Temp = day3Data.main.temp;

      //transfer content to HTML
      $(".date3").html(day3DateText);
      $(".temp3").text("Temp: " + day3Temp + " F");
      $(".humidity3").text("Humidity: " + day3Humidity + "%");
      
     //day4 variables and html transfers
     var day4Data = response2.list[24];
     var day4DateText = day4Data.dt_txt;
     var day4Humidity = day4Data.main.humidity;
     var day4Temp = day4Data.main.temp;

     //transfer content to HTML
     $(".date4").html(day4DateText);
     $(".temp4").text("Temp: " + day4Temp + " F");
     $(".humidity4").text("Humidity: " + day4Humidity + "%");
     
     //day5 variables and html transfers
     var day5Data = response2.list[32];
     var day5DateText = day5Data.dt_txt;
     var day5Humidity = day5Data.main.humidity;
     var day5Temp = day5Data.main.temp;

     //transfer content to HTML
     $(".date5").html(day5DateText);
     $(".temp5").text("Temp: " + day5Temp + " F");
     $(".humidity5").text("Humidity: " + day5Humidity + "%");

    });