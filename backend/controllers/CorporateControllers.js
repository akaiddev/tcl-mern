import asyncHandler from 'express-async-handler'
import Corporate from './../models/CorporateModel.js'

// @desc    Fetch all corporates
// @route   GET /api/corporates
// @access  Public

const getCorporates = asyncHandler(async (req, res) => {
  const corporates = await Corporate.find({})
  res.json(corporates)
})

// @desc    Fetch Corporate
// @route   GET /api/corporates/:id
// @access  Public

const getCorporateById = asyncHandler(async (req, res) => {
  const corporate = await Corporate.findById(req.params.id)

  if (corporate) {
    res.json(corporate)
  } else {
    res.status(404)
    throw new Error('Corporate not found')
  }
})

// @desc    Delete a corporate
// @route   DELETE /api/corporates/:id
// @access  Private/Admin

const deleteCorporate = asyncHandler(async (req, res) => {
  const corporate = await Corporate.findById(req.params.id)

  if (corporate) {
    await corporate.remove()
    res.json({ message: 'Corporate Removed' })
  } else {
    res.status(404)
    throw new Error('Corporate not Found')
  }
})

// @desc    Create a corporate
// @route   POST /api/corporates
// @access  Private/Admin

const createCorporate = asyncHandler(async (req, res) => {
  const corporate = new Corporate({
    name: 'OUR VISION',
    description: ['To the Customers.', 'To the Nation.', 'To the Shareholders.', 'To the Employees.', 'To the other Stakeholders.'],
    user: req.user._id,
  })

  const createdCorporate = await corporate.save()
  res.status(201).json(createdCorporate)
})

// @desc    Update a Corporate
// @route   PUT /api/corporates/:id
// @access  Private/Admin

const updateCorporate = asyncHandler(async (req, res) => {
  const { name, description } = req.body

  const corporate = await Corporate.findById(req.params.id)

  if (corporate) {
    corporate.name = name
    corporate.description = description

    const updatedCorporate = await corporate.save()
    res.json(updatedCorporate)
  } else {
    res.status(404)
    throw new Error('Updated Corporate not found')
  }
})

export { getCorporates, getCorporateById, deleteCorporate, createCorporate, updateCorporate }

