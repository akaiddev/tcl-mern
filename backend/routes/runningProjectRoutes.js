import express from 'express'
import {
  createRunningProject,
  createRunningProjectReview,
  deleteRunningProject,
  getRunningProjectById,
  getRunningProjects,
  getTopRunningProjects,
  updateRunningProject,
} from '../controllers/runningProjectController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getRunningProjects).post(protect, admin, createRunningProject)
router.route('/:id/reviews').post(protect, createRunningProjectReview)
router.get('/top', getTopRunningProjects)
router.route('/:id').get(getRunningProjectById).delete(protect, admin, deleteRunningProject).put(protect, admin, updateRunningProject)

export default router
