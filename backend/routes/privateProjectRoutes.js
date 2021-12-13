import express from 'express'
import {
  createPrivateProject,
  createPrivateProjectReview,
  deletePrivateProject,
  getPrivateProjectById,
  getPrivateProjects,
  getTopPrivateProjects,
  updatePrivateProject,
} from '../controllers/privateProjectControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').get(getPrivateProjects).post(protect, admin, createPrivateProject)
router.route('/:id/reviews').post(protect, createPrivateProjectReview)
router.get('/top', getTopPrivateProjects)
router.route('/:id').get(getPrivateProjectById).delete(protect, admin, deletePrivateProject).put(protect, admin, updatePrivateProject)

export default router
