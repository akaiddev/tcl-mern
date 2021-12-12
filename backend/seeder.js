import colors from 'colors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import equipments from './data/equipments.js'
import privateProjects from './data/privateProjects.js'
import serviceProducts from './data/serviceProducts.js'
import publicProjects from './data/publicProjects.js'
import runningProjects from './data/runningProjects.js'
import BoardOfDirectors from './data/BoardOfDirectors.js'
import users from './data/users.js'
import Equipment from './models/equipmentModel.js'
import PrivateProject from './models/privateProjectModel.js'
import ServiceProduct from './models/serviceProductModel.js'
import PublicProject from './models/publicProjectModel.js'
import RunningProject from './models/RunningProjectModel.js'
import BoardOfDirector from './models/BoardOfDirectorModel.js'
import User from './models/userModel.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await BoardOfDirector.deleteMany()
    await ServiceProduct.deleteMany()
    await Equipment.deleteMany()
    await RunningProject.deleteMany()
    await PublicProject.deleteMany()
    await PrivateProject.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id



    const sampleBoardOfDirector = BoardOfDirectors.map((BoardOfDirector) => {
      return { ...BoardOfDirector, user: adminUser }
    })
    await BoardOfDirector.insertMany(sampleBoardOfDirector)




    const sampleServiceProduct = serviceProducts.map((serviceProduct) => {
      return { ...serviceProduct, user: adminUser }
    })
    await ServiceProduct.insertMany(sampleServiceProduct)  
    
    

    const sampleEquipment = equipments.map((equipment) => {
      return { ...equipment, user: adminUser }
    })
    await Equipment.insertMany(sampleEquipment)

    const sampleRunningProject = runningProjects.map((runningProject) => {
      return { ...runningProject, user: adminUser }
    })
    await RunningProject.insertMany(sampleRunningProject)

    const samplePublicProject = publicProjects.map((publicProject) => {
      return { ...publicProject, user: adminUser }
    })
    await PublicProject.insertMany(samplePublicProject)

    const samplePrivateProject = privateProjects.map((privateProject) => {
      return { ...privateProject, user: adminUser }
    })
    await PrivateProject.insertMany(samplePrivateProject)

    console.log(colors.green.inverse.bold('Data Imported!'))
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await BoardOfDirector.deleteMany()
    await ServiceProduct.deleteMany()
    await Equipment.deleteMany()
    await RunningProject.deleteMany()
    await PublicProject.deleteMany()
    await PrivateProject.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
