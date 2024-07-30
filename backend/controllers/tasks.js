const Task = require('../models/Task')

class TaskController {
    static async getAll(req, res, next) {
        try {
            const tasks = await Task.find({})

            res.json(tasks)
        } catch (error) {
            next(error)
        }
    }

    static async getById(req, res, next) {
        try {
            const id = req.params.id
            const task = await Task.findById(id)

            if (!task) {
                return res.status(404).json({ error: 'task not found' })
            }

            res.status(200).json(task)
        } catch (error) {
            next(error)
        }
    }

    static async create(req, res, next) {
        try {
            const task = req.body

            if (!task || !task.title || !task.description) {
                return res.status(400).json({ error: 'req.title or req.description is missing' })
            }

            const newTask = new Task({
                title: task.title,
                description: task.description,
                priority: task.priority ? task.priority : 'baja',
                completed: false
            })

            const saveNewTask = await newTask.save()
            res.status(201).json(saveNewTask)
        } catch (error) {
            next(error)
        }
    }

    static async update(req, res, next) {
        try {
            const id = req.params.id
            const newTaskInfo = req.body

            if (!newTaskInfo || !newTaskInfo.title || !newTaskInfo.description) {
                return res.status(400).json({ error: 'req.title or req.description is missing' })
            }

            const newInfo = {
                title: newTaskInfo.title,
                description: newTaskInfo.description,
                priority: newTaskInfo.priority ? newTaskInfo.priority : 'baja'
            }

            const task = await Task.findByIdAndUpdate(id, newInfo, { new: true })

            if (!task) {
                return res.status(404).json({ error: 'task not found' })
            }

            res.status(200).json(task)
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const id = req.params.id
            const task = await Task.findById(id)

            if (!task) {
                return res.status(404).json({ error: 'task not found' })
            }

            await Task.findByIdAndDelete(id)
            res.status(200).json(task)

        } catch (error) {
            next(error)
        }
    }

    static async updateCheck(req, res, next) {
        try {
            const id = req.params.id
            const check = req.body

            if (!check) {
                return res.status(400).json({ error: 'req.completed is missing' })
            }

            const newCheck = {
                completed: check.completed
            }

            const task = await Task.findByIdAndUpdate(id, newCheck, { new: true })

            if (!task) {
                return res.status(404).json({ error: 'task not found' })
            }

            res.status(200).json(task)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TaskController