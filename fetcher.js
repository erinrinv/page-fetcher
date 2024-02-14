// imports request module which allows for HTTP requests
const request = require('request');
// imports node.js file system module 
const fs = require("fs");

// Retrieve command-line arguments
const domain = process.argv[2];
const filePath = process.argv[3];


// Make HTTP request to the specified domain
request(domain, (error, response, body) => {
  if (error) {
    console.error('Error occurred during the request:', error);
    return;
  }

  // Write response body to the specified file
  fs.writeFile(filePath, body, (writeError) => {
    if (writeError) {
      console.error('Error occurred while writing to file:', writeError);
      return;
    }
    // Log success message
    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${filePath}`);
  });
});