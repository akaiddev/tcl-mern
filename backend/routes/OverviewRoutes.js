import express from 'express'
import { createOverview, deleteOverview, getOverviewById, getOverviews, updateOverview } from '../controllers/OverviewControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getOverviews).post(protect, admin, createOverview)
router.route('/:id').get(getOverviewById).delete(protect, admin, deleteOverview).put(protect, admin, updateOverview)

export default router
