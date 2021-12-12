import asyncHandler from 'express-async-handler'
import Management from './../models/ManagementModel.js'

// @desc    Fetch all Managements
// @route   GET /api/managements
// @access  Public

const getManagements = asyncHandler(async (req, res) => {
  const managements = await Management.find({})
  res.json(managements)
})

// @desc    Fetch Management
// @route   GET /api/managements/:id
// @access  Public

const getManagementById = asyncHandler(async (req, res) => {
  const management = await Management.findById(req.params.id)

  if (management) {
    res.json(management)
  } else {
    res.status(404)
    throw new Error('Management not found')
  }
})

// @desc    Delete a Management
// @route   DELETE /api/managements/:id
// @access  Private/Admin

const deleteManagement = asyncHandler(async (req, res) => {
  const management = await Management.findById(req.params.id)

  if (management) {
    await management.remove()
    res.json({ message: 'Management Removed' })
  } else {
    res.status(404)
    throw new Error('Management not Found')
  }
})

// @desc    Create a Management
// @route   POST /api/managements
// @access  Private/Admin

const createManagement = asyncHandler(async (req, res) => {
  const management = new Management({
    name: 'Mrs. Parveen Akter',
    email: 'mail@gmail.com',
    designation: 'Chairman',
    user: req.user._id,
    image: '/managements/img_avatar5.png',
  })

  const createdmanagement = await management.save()
  res.status(201).json(createdmanagement)
})

// @desc    Update a Management
// @route   PUT /api/managements/:id
// @access  Private/Admin

const updateManagement = asyncHandler(async (req, res) => {
  const { name,email, designation, image } = req.body

  const management = await Management.findById(req.params.id)

  if (management) {
    management.name = name
    management.email = email
    management.designation = designation
    management.image = image

    const updatedmanagement = await management.save()
    res.json(updatedmanagement)
  } else {
    res.status(404)
    throw new Error('Updated Management not found')
  }
})

export { getManagements, getManagementById, deleteManagement, createManagement, updateManagement }

