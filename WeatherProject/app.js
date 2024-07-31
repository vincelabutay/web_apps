const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=london&appid=41632e65957528ef70adc51819cd28ad&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      //   console.log(weatherData);
      console.log(temp);
    });
  });

  res.send("Server is up and running");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
