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

// This creates our model from the above schema, using mongoose's model method
let Todo = mongoose.model("Todo", TodoSchema);

// Export the User model
module.exports = Todo; 