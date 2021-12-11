import asyncHandler from 'express-async-handler'
import Equipment from './../models/equipmentModel.js'

// @desc    Fetch all Equipments
// @route   GET /api/equipments
// @access  Public

const getEquipments = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? { itemOfEquipment: { $regex: req.query.keyword, $options: 'i' } } : {}

  const count = await Equipment.countDocuments({ ...keyword })
  const equipments = await Equipment.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ equipments, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch Equipments
// @route   GET /api/Equipments/:id
// @access  Public

const getEquipmentById = asyncHandler(async (req, res) => {
  const equipment = await Equipment.findById(req.params.id)

  if (equipment) {
    res.json(equipment)
  } else {
    res.status(404)
    throw new Error('Equipment Not Found')
  }
})

// @desc    Delete a Equipment
// @route   DELETE /api/equipments/:id
// @access  Private/Admin

const deleteEquipment = asyncHandler(async (req, res) => {
  const equipment = await Equipment.findById(req.params.id)

  if (equipment) {
    await equipment.remove()
    res.json({ message: 'equipment Removed' })
  } else {
    res.status(404)
    throw new Error('equipment not Found')
  }
})

// @desc    Create a Equipment
// @route   POST /api/equipments
// @access  Private/Admin

const createEquipment = asyncHandler(async (req, res) => {
  const equipment = new Equipment({
    nameOfEquipment: 'Computerized Auto Asphalt Batch Mix Plant',
    user: req.user._id,
    image: '/equipments/1.jpg',
    capacity: '120 TPH',
    modelNo: 'ANP-1500',
    quantity: '01 Nos',
    madeIn: 'Amman Apollo India Private Ltd. DM-50',
    numReviews: 0,
  })

  const createdEquipment = await equipment.save()
  res.status(201).json(createdEquipment)
})

// @desc    Update a Equipment
// @route   PUT /api/equipments/:id
// @access  Private/Admin

const updateEquipment = asyncHandler(async (req, res) => {
  const { nameOfEquipment, capacity, image, madeIn,  modelNo, quantity } = req.body

  const equipment = await Equipment.findById(req.params.id)

  if (equipment) {
    equipment.nameOfEquipment = nameOfEquipment
    equipment.capacity = capacity
    equipment.madeIn = madeIn
    equipment.modelNo = modelNo
    equipment.image = image
    equipment.quantity = quantity

    const updatedEquipment = await equipment.save()
    res.json(updatedEquipment)
  } else {
    res.status(404)
    throw new Error('Updated Equipment  not found')
  }
})

// @desc    Create new review
// @route   POST /api/equipments/:id/reviews
// @access  Private

const createEquipmentReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body
  const equipment = await Equipment.findById(req.params.id)

  if (equipment) {
    const alreadyReviewed = equipment.reviews.find((r) => r.user.toString() === req.user._id.toString())
    if (alreadyReviewed) {
      res.status(400)
      throw new Error('equipment already reviewed')
    }
    const review = { name: req.user.name, rating: Number(rating), comment, user: req.user._id }

    equipment.reviews.push(review)
    equipment.numReviews = equipment.reviews.length
    equipment.rating = equipment.reviews.reduce((acc, item) => item.rating + acc, 0) / equipment.reviews.length
    await equipment.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('equipment not found')
  }
})

// @desc    Get top rated equipments
// @route   GET /api/equipments/top
// @access  Public

const getTopEquipments = asyncHandler(async (req, res) => {
  const equipments = await Equipment.find({}).sort({ rating: -1 }).limit(4)
  res.json(equipments)
})

export { getEquipments, getEquipmentById, deleteEquipment, createEquipment, updateEquipment, createEquipmentReview, getTopEquipments }

