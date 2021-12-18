import asyncHandler from 'express-async-handler'
import PrivateProject from '../models/privateProjectModel.js'

// @desc    Fetch all Private Project
// @route   GET /api/privateProjects
// @access  Public

const getPrivateProjects = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? { nameOfWork: { $regex: req.query.keyword, $options: 'i' } } : {}

  const count = await PrivateProject.countDocuments({ ...keyword })
  const privateProjects = await PrivateProject.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ privateProjects, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch Private Project
// @route   GET /api/privateProjects/:id
// @access  Public

const getPrivateProjectById = asyncHandler(async (req, res) => {
  const privateProject = await PrivateProject.findById(req.params.id)

  if (privateProject) {
    res.json(privateProject)
  } else {
    res.status(404)
    throw new Error('Private Project  not found')
  }
})

// @desc    Delete a privateProject
// @route   DELETE /api/privateProjects/:id
// @access  Private/Admin
const deletePrivateProject = asyncHandler(async (req, res) => {
  const privateProject = await PrivateProject.findById(req.params.id)

  if (privateProject) {
    await privateProject.remove()
    res.json({ message: 'Private Project  Removed' })
  } else {
    res.status(404)
    throw new Error('Private Project  not Found')
  }
})

// @desc    Create a privateProject
// @route   POST /api/privateProject
// @access  Private/Admin

const createPrivateProject = asyncHandler(async (req, res) => {
  const privateProject = new PrivateProject({
    contact: 'DHA/PRP-107',
    user: req.user._id,
    image: '/equipments/1.jpg',
    valueOfWork: '38097494.747',
    client: 'LGED',
    numReviews: 0,
    nameOfWork: 'Sample name Of Work',
  })

  const createdPrivateProject = await privateProject.save()
  res.status(201).json(createdPrivateProject)
})

// @desc    Update a privateProject
// @route   PUT /api/privateProjects/:id
// @access  Private/Admin

const updatePrivateProject = asyncHandler(async (req, res) => {
  const { contact, valueOfWork, image, client, nameOfWork } = req.body

  const privateProject = await PrivateProject.findById(req.params.id)

  if (privateProject) {
    privateProject.contact = contact
    privateProject.valueOfWork = valueOfWork
    privateProject.client = client
    privateProject.image = image
    privateProject.nameOfWork = nameOfWork

    const updatedPrivateProject = await privateProject.save()
    res.json(updatedPrivateProject)
  } else {
    res.status(404)
    throw new Error('Updated Private Project  not found')
  }
})

// @desc    Create new review
// @route   POST /api/privateProjects/:id/reviews
// @access  Private

const createPrivateProjectReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body
  const privateProject = await PrivateProject.findById(req.params.id)

  if (privateProject) {
    const alreadyReviewed = privateProject.reviews.find((r) => r.user.toString() === req.user._id.toString())
    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Private Project  already reviewed')
    }
    const review = { name: req.user.name, rating: Number(rating), comment, user: req.user._id }

    privateProject.reviews.push(review)
    privateProject.numReviews = privateProject.reviews.length
    privateProject.rating = privateProject.reviews.reduce((acc, item) => item.rating + acc, 0) / privateProject.reviews.length
    await privateProject.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Private Project  not found')
  }
})

// @desc    Get top rated privateProjects
// @route   GET /api/privateProjects/top
// @access  Public

const getTopPrivateProjects = asyncHandler(async (req, res) => {
  const privateProjects = await PrivateProject.find({}).sort({ rating: -1 }).limit(4)
  res.json(privateProjects)
})

export { getPrivateProjects, getPrivateProjectById, deletePrivateProject, createPrivateProject, updatePrivateProject, createPrivateProjectReview, getTopPrivateProjects }

