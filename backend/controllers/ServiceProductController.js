import asyncHandler from 'express-async-handler'
import ServiceProduct from '../models/serviceProductModel.js'

// @desc    Fetch all Service Products
// @route   GET /api/ServiceProducts
// @access  Public

const getServiceProducts = asyncHandler(async (req, res) => {
  const serviceProducts = await ServiceProduct.find({})
  res.json(serviceProducts)
})

export { getServiceProducts }

