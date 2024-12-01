const express = require("express");
const app = express();

let port =8080;

app.listen(port,() => {
    console.log(`app is listening on port : ${port}`);
});


// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors()); // Enables CORS for all routes

// app.get('/', (req, res) => {
//     res.send('CORS enabled for all origins');
// });

// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });
