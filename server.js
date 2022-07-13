const express = require('express');
const path = require("path")
const mongoose = require("mongoose");

let app = express();
const PORT = process.env.PORT || 5000 // Server port (same as proxy property in the ./client folder)

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // JSON response

// Requiring files to utilize routes in Express
require("./route/apiRoutes")(app);

app.listen(PORT, () => {
    console.log("Server successfully listening at: http://localhost:" + PORT);
});