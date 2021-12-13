import express from 'express'
import { createCorporate, deleteCorporate, getCorporateById, getCorporates, updateCorporate } from '../controllers/CorporateControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getCorporates).post(protect, admin, createCorporate)
router.route('/:id').get(getCorporateById).delete(protect, admin, deleteCorporate).put(protect, admin, updateCorporate)

export default router
