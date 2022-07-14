const db = require("../models");

module.exports = (app) => {
    // Agarrar todos los todos existentes en db (mongo)
    
    app.get("/todo", function(req, res) {
        db.Todo.find().then(function(data){
            res.json(data);
        }).catch(function(err){
            res.json({message: "Database error"})
            console.log(err);
        });
    });

    // Create todo
    app.post("/todo", function(req, res) {
        console.log('route hit')
        console.log(req.body)
        db.Todo.create(req.body).then((data) => {
            // data of new todo created by mongo (data variable)
            console.log(data);
            console.log("Todo: " + req.body.text + " was created.");     
            // send response to the requester (client)
            res.send("Success. Yo ass did it")   
        }).catch(function(err){
            res.json({message: "Database error"})
            console.log(err);
        });
    });

    app.put("/todo/:id",  function(req, res) {
        const id = req.params.id;
        // FindOneAndUpdate parameters : Filtro para buscar elemento (1), que se va a cambiar en el elemento (2).
        db.Todo.findOneAndUpdate({"_id": id}, {title: req.body.title, content: req.body.content}).then((data) => {
            res.json(data);
        }).catch(function(err){
            res.json({message: "Database error"})
            console.log(err);
        });
    });


    app.put("/status/:id",  function(req, res) {
        console.log(req.body)
        const id = req.params.id;
        // FindOneAndUpdate parameters : Filtro para buscar elemento (1), que se va a cambiar en el elemento (2).
        db.Todo.findOneAndUpdate({"_id": id}, {isComplete: req.body.isComplete===true}).then((data) => {
            res.json(data);
        }).catch(function(err){
            res.json({message: "Database error"})
            console.log(err);
        });
    });
        // Example of request : /todo/A8dd8f9d9s0d7
        // A8dd8f9d9s0d7 would be :id which can be
        // retrieved from req.params.id 
    app.delete("/todo/:id",  function(req, res) {
        // EXAMPLE: req.params = {"id" : "A8dd8f9d9s0d7"}
        // acceso con req.params.id
        const id = req.params.id;
        // FindOneAndDele parameters : Filtro para buscar elemento (1).
        db.Todo.findByIdAndDelete({"_id": id}).then((data) => {
            res.json({message: "Todo deleted successfully"});
        }).catch(function(err){
            res.json({message: "Database error"})
            console.log(err);
        });
    });



    

} 