const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

// Send a request to the URL to download the data
request(url, function(error, response, body) {
  if (error) {
    console.error(error);
  } else {
    // Save the downloaded data to a file
    fs.writeFile(path, body, function(error) {
      if (error) {
        console.error(error);
      } else {
        console.log(`Downloaded and saved data to ${path}`);
      }
    });
  }
});