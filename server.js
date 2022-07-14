const express = require('express');
const path = require("path")
const mongoose = require("mongoose");

let app = express();
const PORT = process.env.PORT || 5000 // Puerto del servidor (igual a la propiedad proxy en el folder ./client)
const MONGODB_URI = "mongodb+srv://litox06:todolist@cluster0.c474q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // URL de conneccion MONGODB Atlas

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Respuesta como JSON

// Requiriendo archivo para utilizar rutas en express
require("./route/apiRoutes")(app);

mongoose.connect(MONGODB_URI);
app.listen(PORT, () => {
    console.log("Server successfully listening at: http://localhost:" + PORT);
});