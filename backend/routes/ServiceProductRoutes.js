import express from 'express'
import { getServiceProducts } from '../controllers/ServiceProductController.js'
const router = express.Router()

router.route('/').get(getServiceProducts)

export default router
