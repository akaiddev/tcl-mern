import asyncHandler from 'express-async-handler'
import RunningProject from '../models/runningProjectModel.js'

// @desc    Fetch all Running Projects
// @route   GET /api/runningProjects
// @access  Public

const getRunningProjects = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? { nameOfWork: { $regex: req.query.keyword, $options: 'i' } } : {}

  const count = await RunningProject.countDocuments({ ...keyword })
  const runningProjects = await RunningProject.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ runningProjects, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch  Running Projects
// @route   GET /api/runningProjects/:id
// @access  Public

const getRunningProjectById = asyncHandler(async (req, res) => {
  const runningProject = await RunningProject.findById(req.params.id)

  if (runningProject) {
    res.json(runningProject)
  } else {
    res.status(404)
    throw new Error('Running  Project not found')
  }
})

// @desc    Delete a Running Project
// @route   DELETE /api/runningProjects/:id
// @access  Private/Admin

const deleteRunningProject = asyncHandler(async (req, res) => {
  const runningProject = await RunningProject.findById(req.params.id)

  if (runningProject) {
    await runningProject.remove()
    res.json({ message: 'Running Project  Removed' })
  } else {
    res.status(404)
    throw new Error('Running Project  not Found')
  }
})

// @desc    Create a Running Project
// @route   POST /api/RunningProjects
// @access  Private/Admin

const createRunningProject = asyncHandler(async (req, res) => {
  const runningProject = new RunningProject({
    contact: 'DHA/PRP-107',
    user: req.user._id,
    image: '/equipments/1.jpg',
    valueOfWork: '38097494.747',
    client: 'LGED',
    numReviews: 0,
    nameOfWork: 'Sample name Of Work',
  })

  const createdRunningProject = await runningProject.save()
  res.status(201).json(createdRunningProject)
})
// @desc    Update a Running Project
// @route   PUT /api/runningProjects/:id
// @access  Private/Admin

const updateRunningProject = asyncHandler(async (req, res) => {
  const { contact, valueOfWork, image, client, nameOfWork } = req.body

  const runningProject = await RunningProject.findById(req.params.id)

  if (runningProject) {
    runningProject.contact = contact
    runningProject.valueOfWork = valueOfWork
    runningProject.client = client
    runningProject.image = image
    runningProject.nameOfWork = nameOfWork

    const updatedRunningProject = await runningProject.save()
    res.json(updatedRunningProject)
  } else {
    res.status(404)
    throw new Error('Updated running Project not found')
  }
})

// @desc    Create new review
// @route   POST /api/runningProjects/:id/reviews
// @access  Private

const createRunningProjectReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body
  const runningProject = await RunningProject.findById(req.params.id)

  if (runningProject) {
    const alreadyReviewed = runningProject.reviews.find((r) => r.user.toString() === req.user._id.toString())
    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Running Project already reviewed')
    }
    const review = { name: req.user.name, rating: Number(rating), comment, user: req.user._id }

    runningProject.reviews.push(review)
    runningProject.numReviews = runningProject.reviews.length
    runningProject.rating = runningProject.reviews.reduce((acc, item) => item.rating + acc, 0) / runningProject.reviews.length
    await runningProject.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Running Project not found')
  }
})

// @desc    Get top rated runningProjects
// @route   GET /api/runningProjects/top
// @access  Public

const getTopRunningProjects = asyncHandler(async (req, res) => {
  const runningProjects = await RunningProject.find({}).sort({ rating: -1 }).limit(4)
  res.json(runningProjects)
})

export { getRunningProjects, getRunningProjectById, deleteRunningProject, createRunningProject, updateRunningProject, createRunningProjectReview, getTopRunningProjects }

