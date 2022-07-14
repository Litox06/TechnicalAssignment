const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: "String",
        required: true
    },
    content: {
        type: "String",
        required: false,

    },
    isComplete: {
        type: "String",
        default: false,
        required: false
    }
},
    {
        timestamps: {
            createdAt: 'created_at'
        }

    });

// Esto crea nuestro model del Schema de arriba usando el metodo modelo de Mongoose
let Todo = mongoose.model("Todo", TodoSchema);

// Exporta el model User
module.exports = Todo; 