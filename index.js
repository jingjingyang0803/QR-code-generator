/* 
1. Use the inquirer npm package to get user input.
https://www.npmjs.com/package/inquirer
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
https://www.npmjs.com/package/qr-image
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    // Pass your questions
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback
    const url = answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
