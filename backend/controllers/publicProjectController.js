import asyncHandler from 'express-async-handler'
import PublicProject from '../models/publicProjectModel.js'

// @desc    Fetch all Public Project
// @route   GET /api/publicProjects
// @access  Public

const getPublicProjects = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? { nameOfWork: { $regex: req.query.keyword, $options: 'i' } } : {}

  const count = await PublicProject.countDocuments({ ...keyword })
  const publicProjects = await PublicProject.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ publicProjects, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch Public Project
// @route   GET /api/publicProjects/:id
// @access  Public

const getPublicProjectById = asyncHandler(async (req, res) => {
  const publicProject = await PublicProject.findById(req.params.id)

  if (publicProject) {
    res.json(publicProject)
  } else {
    res.status(404)
    throw new Error('Public Project not found')
  }
})

// @desc    Delete a publicProject
// @route   DELETE /api/publicProjects/:id
// @access  Private/Admin
const deletePublicProject = asyncHandler(async (req, res) => {
  const publicProject = await PublicProject.findById(req.params.id)

  if (publicProject) {
    await publicProject.remove()
    res.json({ message: 'Public Project Removed' })
  } else {
    res.status(404)
    throw new Error('Public Project not Found')
  }
})

// @desc    Create a publicProject
// @route   POST /api/publicProject
// @access  Private/Admin

const createPublicProject = asyncHandler(async (req, res) => {
  const publicProject = new PublicProject({
    contact: 'DHA/PRP-107',
    user: req.user._id,
    image: '/equipments/1.jpg',
    valueOfWork: '38097494.747',
    client: 'LGED',
    numReviews: 0,
    nameOfWork: 'Sample name Of Work',
  })

  const createdPublicProject = await publicProject.save()
  res.status(201).json(createdPublicProject)
})

// @desc    Update a publicProject
// @route   PUT /api/publicProjects/:id
// @access  Private/Admin

const updatePublicProject = asyncHandler(async (req, res) => {
  const { contact, valueOfWork, image, client, nameOfWork } = req.body

  const publicProject = await PublicProject.findById(req.params.id)

  if (publicProject) {
    publicProject.contact = contact
    publicProject.valueOfWork = valueOfWork
    publicProject.client = client
    publicProject.image = image
    publicProject.nameOfWork = nameOfWork

    const updatedPublicProject = await publicProject.save()
    res.json(updatedPublicProject)
  } else {
    res.status(404)
    throw new Error('Updated Public Project not found')
  }
})

// @desc    Create new review
// @route   POST /api/publicProjects/:id/reviews
// @access  Private

const createPublicProjectReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body
  const publicProject = await PublicProject.findById(req.params.id)

  if (publicProject) {
    const alreadyReviewed = publicProject.reviews.find((r) => r.user.toString() === req.user._id.toString())
    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Public Project already reviewed')
    }
    const review = { name: req.user.name, rating: Number(rating), comment, user: req.user._id }

    publicProject.reviews.push(review)
    publicProject.numReviews = publicProject.reviews.length
    publicProject.rating = publicProject.reviews.reduce((acc, item) => item.rating + acc, 0) / publicProject.reviews.length
    await publicProject.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Public Project not found')
  }
})

// @desc    Get top rated publicProjects
// @route   GET /api/publicProjects/top
// @access  Public

const getTopPublicProjects = asyncHandler(async (req, res) => {
  const publicProjects = await PublicProject.find({}).sort({ rating: -1 }).limit(4)
  res.json(publicProjects)
})

export { getPublicProjects, getPublicProjectById, deletePublicProject, createPublicProject, updatePublicProject, createPublicProjectReview, getTopPublicProjects }

