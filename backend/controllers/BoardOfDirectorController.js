import asyncHandler from 'express-async-handler'
import BoardOfDirector from './../models/BoardOfDirectorModel.js'

// @desc    Fetch all Board of Directors
// @route   GET /api/boardOfDirectors
// @access  Public

const getBoardOfDirectors = asyncHandler(async (req, res) => {
  const boardOfDirectors = await BoardOfDirector.find({})
  res.json(boardOfDirectors)
})

// @desc    Fetch Board of Director
// @route   GET /api/boardOfDirectors/:id
// @access  Public

const getBoardOfDirectorById = asyncHandler(async (req, res) => {
  const boardOfDirector = await BoardOfDirector.findById(req.params.id)

  if (boardOfDirector) {
    res.json(boardOfDirector)
  } else {
    res.status(404)
    throw new Error('Board of Director not found')
  }
})

// @desc    Delete a Board of Director
// @route   DELETE /api/boardOfDirectors/:id
// @access  Private/Admin

const deleteBoardOfDirector = asyncHandler(async (req, res) => {
  const boardOfDirector = await BoardOfDirector.findById(req.params.id)

  if (boardOfDirector) {
    await boardOfDirector.remove()
    res.json({ message: 'Board of Director Removed' })
  } else {
    res.status(404)
    throw new Error('Board of Director not Found')
  }
})

// @desc    Create a Board of Director
// @route   POST /api/boardOfDirectors
// @access  Private/Admin

const createBoardOfDirector = asyncHandler(async (req, res) => {
  const boardOfDirector = new BoardOfDirector({
    name: 'Mrs. Parveen Akter',
    designation: 'Chairman',
    user: req.user._id,
    image: '/managements/img_avatar5.png',
  })

  const createdBoardOfDirector = await boardOfDirector.save()
  res.status(201).json(createdBoardOfDirector)
})

// @desc    Update a Board of Director
// @route   PUT /api/boardOfDirectors/:id
// @access  Private/Admin

const updateBoardOfDirector = asyncHandler(async (req, res) => {
  const { name, designation, image } = req.body

  const boardOfDirector = await BoardOfDirector.findById(req.params.id)

  if (boardOfDirector) {
    boardOfDirector.name = name
    boardOfDirector.designation = designation
    boardOfDirector.image = image

    const updatedboardOfDirector = await boardOfDirector.save()
    res.json(updatedboardOfDirector)
  } else {
    res.status(404)
    throw new Error('Updated Board of Director not found')
  }
})

export { getBoardOfDirectors, getBoardOfDirectorById, deleteBoardOfDirector, createBoardOfDirector, updateBoardOfDirector }

