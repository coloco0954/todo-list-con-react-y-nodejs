const { Router } = require('express')
const TaskController = require('../controllers/tasks')

const tasksRouter = Router()

tasksRouter.get('/', TaskController.getAll)

tasksRouter.get('/:id', TaskController.getById)

tasksRouter.post('/', TaskController.create)

tasksRouter.put('/:id', TaskController.update)

tasksRouter.delete('/:id', TaskController.delete)

tasksRouter.patch('/:id/completed', TaskController.updateCheck)

module.exports = tasksRouter