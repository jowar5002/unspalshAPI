// Access key
// HpcG2QldwgetaNDhPACElmxp_d6Riomxk6Zg90FTBjc

// secret key
// A2sTJv6UDb2UCuOf465IrFL1XB4FqT78SrYqLtcQQq4

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

// const unspalshData = [];

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

  const url = "https://api.unsplash.com/search/photos?query=London&client_id=HpcG2QldwgetaNDhPACElmxp_d6Riomxk6Zg90FTBjc&sponsorship=null";

  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      // console.log(JSON.parse(data));
      const jsonDATA = JSON.parse(data).results;

      for (i = 0; i < jsonDATA.length; i++) {
        console.log(jsonDATA[i].urls.raw);
        // text += jsonDATA[i] + "<br>";
      }

      // document.each(jsonDATA, function(i, result) {
      //   console.log(result.urls.raw);
      // });
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
  // https.get(url, function(response) {
  //   console.log(response);
  //
  //   response.on("data", function(data) {
  //     // console.log(data);
  //     // const unspalshData = JSON.parse(document.getElementsByName("created_at").innerHTML);
  //     const uData = JSON.parse(data);
  //     // console.log(JSON.stringify(uData));
  //
  //     // const object = {
  //     //     username : ""
  //     // }
  //
  //   });
  // });
});



// https://api.unsplash.com/photos/?client_id=HpcG2QldwgetaNDhPACElmxp_d6Riomxk6Zg90FTBjc


app.listen(3000, function(req, res) {
  console.log("server is running in port 3000");
})
