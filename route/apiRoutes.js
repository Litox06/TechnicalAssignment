const db = require("../models");

module.exports = (app) => {
    // Agarrar todos los To-dos existentes en DB (Mongo)

    app.get("/todo", function (req, res) {
        db.Todo.find().then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json({ message: "Database error" })
            console.log(err);
        });
    });

    // Create todo
    app.post("/todo", function (req, res) {
        console.log('route hit')
        console.log(req.body)
        db.Todo.create(req.body).then((data) => {
            // Data del nuevo to-do creado por Mongo (variable data)
            console.log(data);
            console.log("To-do: " + req.body.text + " was created.");
            // Envia response al requester (client) 
            res.send("Success.")
        }).catch(function (err) {
            res.json({ message: "Database error." })
            console.log(err);
        });
    });

    app.put("/todo/:id", function (req, res) {
        const id = req.params.id;
        // FindOneAndUpdate parameters : Filtro para buscar elemento (1), que se va a cambiar en el elemento (2).
        db.Todo.findOneAndUpdate({ "_id": id }, { title: req.body.title, content: req.body.content }).then((data) => {
            res.json(data);
        }).catch(function (err) {
            res.json({ message: "Database error" })
            console.log(err);
        });
    });


    app.put("/status/:id", function (req, res) {
        console.log(req.body)
        const id = req.params.id;
        // FindOneAndUpdate parameters : Filtro para buscar elemento (1), que se va a cambiar en el elemento (2).
        db.Todo.findOneAndUpdate({ "_id": id }, { isComplete: req.body.isComplete === true }).then((data) => {
            res.json(data);
        }).catch(function (err) {
            res.json({ message: "Database error" })
            console.log(err);
        });
    });
    // Ejemplo de request : /todo/A8dd8f9d9s0d7
    // A8dd8f9d9s0d7 seria :id que puede ser 
    // obtenido desde req.params.id
    app.delete("/todo/:id", function (req, res) {
        // EJEMPLO: req.params = {"id" : "A8dd8f9d9s0d7"}
        // Acceso con req.params.id
        const id = req.params.id;
        // FindOneAndDele parameters : Filtro para buscar elemento (1).
        db.Todo.findByIdAndDelete({ "_id": id }).then((data) => {
            res.json({ message: "Todo deleted successfully" });
        }).catch(function (err) {
            res.json({ message: "Database error" })
            console.log(err);
        });
    });





} 