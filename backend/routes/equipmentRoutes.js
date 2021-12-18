import express from 'express'
import {
    createEquipment,
    createEquipmentReview,
    deleteEquipment,
    getEquipmentById,
    getEquipments,
    getTopEquipments,
    updateEquipment
} from '../controllers/equipmentControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getEquipments).post(protect, admin, createEquipment)
router.route('/:id/reviews').post(protect, createEquipmentReview)
router.get('/top', getTopEquipments)
router.route('/:id').get(getEquipmentById).delete(protect, admin, deleteEquipment).put(protect, admin, updateEquipment)

export default router
