require('dotenv').config()

const connectDB = require('./config/mongo')

connectDB()

const express = require('express')
const app = express()

const cors = require('cors')
const logger = require('./middleware/loggerMiddleware')
const notFound = require('./middleware/notFound')
const handleError = require('./middleware/handleError')

const tasksRouter = require('./routes/tasks')


app.use(express.json())

app.use(cors())

app.use(logger)

app.use('/api/tasks', tasksRouter)

app.use(notFound)

app.use(handleError)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})