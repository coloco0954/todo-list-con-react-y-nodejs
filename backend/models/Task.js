const { model } = require('mongoose')

const taskSchema = require('../schema/tasks')

const Task = model('Task', taskSchema)

// const task = new Task({
//     title: 'nueva tarea',
//     description: 'descripcion de la tarea',
//     priority: 'alta',
//     completed: false
// })

// task.save()
//     .then(() => {
//         mongoose.connection.close()
//     })

// Task.find({})
//     .then(tasks => {
//         console.log(tasks)
//         mongoose.connection.close()
//     })

module.exports = Task