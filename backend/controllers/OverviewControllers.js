import asyncHandler from 'express-async-handler'
import Overview from '../models/OverviewModel.js'

// @desc    Fetch all Overviews
// @route   GET /api/overviews
// @access  Public

const getOverviews = asyncHandler(async (req, res) => {
  const overviews = await Overview.find({})
  res.json(overviews)
})

// @desc    Fetch Overview
// @route   GET /api/overviews/:id
// @access  Public

const getOverviewById = asyncHandler(async (req, res) => {
  const overview = await Overview.findById(req.params.id)

  if (overview) {
    res.json(overview)
  } else {
    res.status(404)
    throw new Error('Overview not found')
  }
})

// @desc    Delete a Overview
// @route   DELETE /api/overviews/:id
// @access  Private/Admin

const deleteOverview = asyncHandler(async (req, res) => {
  const overview = await Overview.findById(req.params.id)

  if (overview) {
    await overview.remove()
    res.json({ message: 'Overview Removed' })
  } else {
    res.status(404)
    throw new Error('Overview not Found')
  }
})

// @desc    Create a Overview
// @route   POST /api/overviews
// @access  Private/Admin

const createOverview = asyncHandler(async (req, res) => {
  const overview = new Overview({
    col: '9',
    animation: 'animation-Left',
    description:
      'The success in the field of road construction has been possible due to high quality inputs from high qualified and experienced professionals associated with the company besides skilled technicians and laborers associated with it',
    user: req.user._id,
  })

  const createdoverview = await Overview.save()
  res.status(201).json(createdoverview)
})

// @desc    Update a Overview
// @route   PUT /api/overviews/:id
// @access  Private/Admin

const updateOverview = asyncHandler(async (req, res) => {
  const { col, animation, description } = req.body

  const overview = await Overview.findById(req.params.id)

  if (overview) {
    overview.col = col
    overview.animation = animation
    overview.description = description

    const updatedoverview = await overview.save()
    res.json(updatedoverview)
  } else {
    res.status(404)
    throw new Error('Updated Overview not found')
  }
})

export { getOverviews, getOverviewById, deleteOverview, createOverview, updateOverview }

