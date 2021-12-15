import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import BoardOfDirectors from './data/BoardOfDirectors.js'
import careers from './data/careers.js'
import contactInfos from './data/contactInfos.js'
import corporates from './data/Corporates.js'
import equipments from './data/equipments.js'
import managements from './data/Managements.js'
import overviews from './data/Overviews.js'
import privateProjects from './data/privateProjects.js'
import publicProjects from './data/publicProjects.js'
import runningProjects from './data/runningProjects.js'
import serviceProducts from './data/serviceProducts.js'
import socialMedias from './data/socialMedias.js'
import users from './data/users.js'
import BoardOfDirector from './models/BoardOfDirectorModel.js'
import Career from './models/careerModel.js'
import ContactInfo from './models/ContactInfoModel.js'
import Corporate from './models/CorporateModel.js'
import Equipment from './models/equipmentModel.js'
import Management from './models/ManagementModel.js'
import Overview from './models/OverviewModel.js'
import PrivateProject from './models/privateProjectModel.js'
import PublicProject from './models/publicProjectModel.js'
import RunningProject from './models/RunningProjectModel.js'
import ServiceProduct from './models/serviceProductModel.js'
import SocialMedia from './models/SocialMediaModel.js'
import User from './models/userModel.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Career.deleteMany()
    await SocialMedia.deleteMany()
    await ContactInfo.deleteMany()
    await Overview.deleteMany()
    await Corporate.deleteMany()
    await Management.deleteMany()
    await BoardOfDirector.deleteMany()
    await ServiceProduct.deleteMany()
    await Equipment.deleteMany()
    await RunningProject.deleteMany()
    await PublicProject.deleteMany()
    await PrivateProject.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleCareer = careers.map((career) => {
      return { ...career, user: adminUser }
    })
    await Career.insertMany(sampleCareer)

    const sampleSocialMedia = socialMedias.map((socialMedia) => {
      return { ...socialMedia, user: adminUser }
    })
    await SocialMedia.insertMany(sampleSocialMedia)

    const sampleContactInfo = contactInfos.map((contactInfo) => {
      return { ...contactInfo, user: adminUser }
    })
    await ContactInfo.insertMany(sampleContactInfo)

    const sampleOverview = overviews.map((overview) => {
      return { ...overview, user: adminUser }
    })
    await Overview.insertMany(sampleOverview)

    const sampleCorporate = corporates.map((corporate) => {
      return { ...corporate, user: adminUser }
    })
    await Corporate.insertMany(sampleCorporate)

    const sampleManagement = managements.map((management) => {
      return { ...management, user: adminUser }
    })
    await Management.insertMany(sampleManagement)

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
    await Career.deleteMany()
    await SocialMedia.deleteMany()
    await ContactInfo.deleteMany()
    await Overview.deleteMany()
    await Corporate.deleteMany()
    await Management.deleteMany()
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
