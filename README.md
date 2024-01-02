# QR-code-generator

#

## **Overview**

This project is a simple Node.js application that allows users to generate QR codes from URLs. It utilizes the **`inquirer`**, **`qr-image`**, and **`fs`** (File System) modules to prompt users for a URL, generate a QR code, and save both the URL and QR code image to the local file system.

## **Features**

- **User Input for URLs**: Easily input any URL to convert into a QR code.
- **QR Code Generation**: Converts a URL into a QR code image.
- **File Saving**: Saves the QR code as a PNG image and the original URL in a text file.

## **Installation**

Before running this project, make sure Node.js is installed on your system. If not, download and install it from [Node.js Official Site](https://nodejs.org/).

To set up the project, follow these steps:

1. Clone the repository:
2. Navigate to the project directory:
3. Install the dependencies: `npm install`

## **Usage**

To run the application, use the command `node index.js` in the terminal from the project directory:

Follow the on-screen prompt to enter a URL. The application will generate a QR code image (**`qr_img.png`**) and a text file (**`URL.txt`**) containing the input URL in your project directory.

## **Dependencies**

- **inquirer**: For interactive command line user interfaces.
- **qr-image**: For generating QR codes from text.
- **fs**: Node.js native file system module for file operations.
