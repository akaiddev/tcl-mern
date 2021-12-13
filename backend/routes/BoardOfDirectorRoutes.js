import express from 'express'
import {
    createBoardOfDirector,
    deleteBoardOfDirector,
    getBoardOfDirectorById,
    getBoardOfDirectors,
    updateBoardOfDirector
} from '../controllers/BoardOfDirectorControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getBoardOfDirectors).post(protect, admin, createBoardOfDirector)
router.route('/:id').get(getBoardOfDirectorById).delete(protect, admin, deleteBoardOfDirector).put(protect, admin, updateBoardOfDirector)

export default router
