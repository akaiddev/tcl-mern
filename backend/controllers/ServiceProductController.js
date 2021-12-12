import asyncHandler from 'express-async-handler'
import ServiceProduct from '../models/serviceProductModel.js'

// @desc    Fetch all Service Products
// @route   GET /api/ServiceProducts
// @access  Public

const getServiceProducts = asyncHandler(async (req, res) => {
  const serviceProducts = await ServiceProduct.find({})
  res.json(serviceProducts)
})

// @desc    Fetch Service Product
// @route   GET /api/serviceProducts/:id
// @access  Public

const getServiceProductById = asyncHandler(async (req, res) => {
  const serviceProduct = await ServiceProduct.findById(req.params.id)

  if (serviceProduct) {
    res.json(serviceProduct)
  } else {
    res.status(404)
    throw new Error('Service Product not found')
  }
})

// @desc    Delete a Service Product
// @route   DELETE /api/serviceProducts/:id
// @access  Private/Admin

const deleteServiceProduct = asyncHandler(async (req, res) => {
  const publicProject = await ServiceProduct.findById(req.params.id)

  if (publicProject) {
    await publicProject.remove()
    res.json({ message: 'Service Product Removed' })
  } else {
    res.status(404)
    throw new Error('Service Product not Found')
  }
})

// @desc    Create a Service Product
// @route   POST /api/ServiceProducts
// @access  Private/Admin

const createServiceProduct = asyncHandler(async (req, res) => {
  const serviceProduct = new ServiceProduct({
    title: 'OUR PRODUCTS & SERVICES',
    user: req.user._id,
    image: '/equipments/1.jpg',
    description:
      'TCL is a reputed civil engineering company operating in Bangladesh mainly engaged in constructions and maintenance of large and medium type projects Road & High Ways, Water Plant, Airport, Electrical Plant etc. both in Private and Public Sector.TCL is offering various products and services which include the followings:',
    point: [
      'Successful track record in the construction industry.',
      'Privileged to have associated projects which are financed by IDA, ADB, WORLD Bank & JAICA.',
      'Large fleet of Road and Building Equipments, Machineries and Plants of renowned brands around the world.',
      'Capable to handle any mega projects.',
      'Proven ability to penetrate new markets.',
      'Financial capability.',
    ],
    numReviews: 0,
  })

  const createdServiceProduct = await serviceProduct.save()
  res.status(201).json(createdServiceProduct)
})

// @desc    Update a Service Product
// @route   PUT /api/serviceProducts/:id
// @access  Private/Admin

const updateServiceProduct = asyncHandler(async (req, res) => {
  const { title, description, image, point } = req.body

  const serviceProduct = await ServiceProduct.findById(req.params.id)

  if (serviceProduct) {
    serviceProduct.title = title
    serviceProduct.description = description
    serviceProduct.point = point
    serviceProduct.image = image

    const updatedServiceProduct = await serviceProduct.save()
    res.json(updatedServiceProduct)
  } else {
    res.status(404)
    throw new Error('updated Service Product not found')
  }
})

export { getServiceProducts, getServiceProductById, deleteServiceProduct, createServiceProduct, updateServiceProduct }

