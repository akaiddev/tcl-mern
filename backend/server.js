import colors from 'colors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import connectDB from './config/database.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import BoardOfDirectorRoutes from './routes/BoardOfDirectorRoutes.js'
import equipmentRoutes from './routes/equipmentRoutes.js'
import privateProjectRoutes from './routes/privateProjectRoutes.js'
import publicProjectRoutes from './routes/publicProjectRoutes.js'
import runningProjects from './routes/runningProjectRoutes.js'
import ServiceProductRoutes from './routes/ServiceProductRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()

const app = express()

if (process.env.NODE_ENV === 'Development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/boardOfDirectors', BoardOfDirectorRoutes)
app.use('/api/serviceProducts', ServiceProductRoutes)
app.use('/api/equipments', equipmentRoutes)
app.use('/api/runningProjects', runningProjects)
app.use('/api/publicProjects', publicProjectRoutes)
app.use('/api/privateProjects', privateProjectRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(colors.bold.yellow(`TCL ${process.env.NODE_ENV} At http://localhost:${PORT}`))
})
