import express from 'express'
import { createCareer, deleteCareer, getCareerById, getCareers, updateCareer } from '../controllers/CareerControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getCareers).post(protect, admin, createCareer)
router.route('/:id').get(getCareerById).delete(protect, admin, deleteCareer).put(protect, admin, updateCareer)

export default router
