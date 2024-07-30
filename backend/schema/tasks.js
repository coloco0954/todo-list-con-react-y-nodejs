const { Schema } = require('mongoose')

const taskSchema = new Schema({
    title: String,
    description: String,
    priority: String,
    completed: Boolean
})

taskSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id

        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = taskSchema