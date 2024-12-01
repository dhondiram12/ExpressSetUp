const express = require("express");
const app = express();

let port =8080;

app.listen(port,() => {
    console.log(`app is listening on port : ${port}`);
});

First Line (const express = require("express");)
This line imports the Express module, which is a lightweight web application
framework for Node.js. 
It allows you to build web servers and APIs easily.

Second Section (let port = 8080;)
The port variable is declared and assigned the value 8080.
A port number acts as a communication endpoint for the server.
Common port numbers include 3000, 8080, and 80. Here, 8080 is specified,
which means our server will run on port 8080.

Listening on Port (app.listen(port, () => { ... }))

The app.listen function is used to make the application start 
listening for incoming requests on the specified port (8080).
The arrow function passed as the second argument is a callback function. 
Once the server starts successfully, this function is executed,
and it logs a message indicating that the app is listening on the specified port.
Output
When you run the code and the server starts successfully,


it displays the following output in the console:

app is listening on port : 8080

