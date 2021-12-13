import express from 'express'
import {
  createPublicProject,
  createPublicProjectReview,
  deletePublicProject,
  getPublicProjectById,
  getPublicProjects,
  getTopPublicProjects,
  updatePublicProject,
} from '../controllers/publicProjectControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').get(getPublicProjects).post(protect, admin, createPublicProject)
router.route('/:id/reviews').post(protect, createPublicProjectReview)
router.get('/top', getTopPublicProjects)
router.route('/:id').get(getPublicProjectById).delete(protect, admin, deletePublicProject).put(protect, admin, updatePublicProject)

export default router
