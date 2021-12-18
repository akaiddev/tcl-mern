import express from 'express'
import { createContactInfo, deleteContactInfo, getContactInfoById, getContactInfos, updateContactInfo } from '../controllers/ContactInfoControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getContactInfos).post(protect, admin, createContactInfo)
router.route('/:id').get(getContactInfoById).delete(protect, admin, deleteContactInfo).put(protect, admin, updateContactInfo)

export default router
