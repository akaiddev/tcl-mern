import express from 'express'
import { createSocialMedia, deleteSocialMedia, getSocialMediaById, getSocialMedias, updateSocialMedia } from '../controllers/SocialMediaControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getSocialMedias).post(protect, admin, createSocialMedia)
router.route('/:id').get(getSocialMediaById).delete(protect, admin, deleteSocialMedia).put(protect, admin, updateSocialMedia)

export default router
