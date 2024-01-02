/* 
1. Use the inquirer npm package to get user input.
https://www.npmjs.com/package/inquirer
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
https://www.npmjs.com/package/qr-image
3. Create a txt file to save the user input using the native fs node module.
https://nodejs.org/api/fs.html
*/

// Importing necessary modules
import inquirer from "inquirer"; // for user input
import qr from "qr-image"; // for generating QR code
import fs from "fs"; // for file system operations

// Using inquirer to prompt the user for input
inquirer
  .prompt([
    {
      // This is the question object for the prompt
      message: "Type in your URL: ", // The message shown to the user
      name: "URL", // The key name for the answer object
    },
  ])
  .then((answers) => {
    // Handling the user's response
    const url = answers.URL; // Extracting the URL from the user's input

    // Generating a QR code from the URL
    var qr_svg = qr.image(url); // Creating a QR code image from the URL
    qr_svg.pipe(fs.createWriteStream("qr_img.png")); // Saving the QR code as an image file

    // Writing the URL to a text file
    fs.writeFile("URL.txt", url, (err) => {
      // Creating a file and writing the URL to it
      if (err) throw err; // Handling any errors during file writing
      console.log("A file containing your URL has been created!"); // Confirmation message
    });
  })
  .catch((error) => {
    // Error handling for the inquirer prompt
    if (error.isTtyError) {
      // Handling errors related to the terminal environment
    } else {
      // Handling other types of errors
    }
  });
