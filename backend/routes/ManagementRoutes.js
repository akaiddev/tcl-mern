import express from 'express'
import { createManagement, deleteManagement, getManagementById, getManagements, updateManagement } from '../controllers/ManagementControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getManagements).post(protect, admin, createManagement)
router.route('/:id').get(getManagementById).delete(protect, admin, deleteManagement).put(protect, admin, updateManagement)

export default router
