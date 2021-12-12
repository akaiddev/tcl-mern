import express from 'express'
import { createServiceProduct, deleteServiceProduct, getServiceProductById, getServiceProducts, updateServiceProduct } from '../controllers/ServiceProductController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getServiceProducts).post(protect, admin, createServiceProduct)
router.route('/:id').get(getServiceProductById).delete(protect, admin, deleteServiceProduct).put(protect, admin, updateServiceProduct)

export default router
