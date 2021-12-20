import asyncHandler from 'express-async-handler'
import Career from '../models/careerModel.js'

// @desc    Fetch all Career
// @route   GET /api/careers/
// @access  Public

const getCareers = asyncHandler(async (req, res) => {
  const careers = await Career.find({})
  res.json(careers)
})

// @desc    Fetch Career
// @route   GET /api/careers/:id
// @access  Public

const getCareerById = asyncHandler(async (req, res) => {
  const career = await Career.findById(req.params.id)

  if (career) {
    res.json(career)
  } else {
    res.status(404)
    throw new Error('Career not found')
  }
})

// @desc    Delete a Career
// @route   DELETE /api/careers/:id
// @access  Private/Admin
const deleteCareer = asyncHandler(async (req, res) => {
  const career = await Career.findById(req.params.id)

  if (career) {
    await career.remove()
    res.json({ message: 'Career Removed' })
  } else {
    res.status(404)
    throw new Error('Career not Found')
  }
})

// @desc    Create a Career
// @route   POST /api/careers
// @access  Private/Admin

const createCareer = asyncHandler(async (req, res) => {
  const career = new Career({
    position: 'Manager',
    user: req.user._id,
    headline: 'Construction Management',
    type: 'Full-Time',
    qualifications: 'professionally',
    experience: '3 years',
    salary: 'Negotiable',
    skills: 'microsoft  office , excle',
    description:
      'A project manager is a professional in the field of project management. Project managers have the responsibility of the planning, procurement and execution of a project, in any undertaking that has a defined scope, defined start and a defined finish; regardless of industry. Project managers are first point of contact for any issues or discrepancies arising from within the heads of various departments in an organization before the problem escalates to higher authorities, as project representative',
  })

  const createdCareer = await career.save()
  res.status(201).json(createdCareer)
})

// @desc    Update a Career
// @route   PUT /api/careers/:id
// @access  Private/Admin

const updateCareer = asyncHandler(async (req, res) => {
  const { position, headline, type, qualifications, experience, salary, skills, description } = req.body

  const career = await Career.findById(req.params.id)

  if (career) {
    career.position = position
    career.headline = headline
    career.type = type
    career.qualifications = qualifications
    career.experience = experience
    career.salary = salary
    career.description = description
    career.skills = skills

    const updatedCareer = await career.save()
    res.json(updatedCareer)
  } else {
    res.status(404)
    throw new Error('Updated Career not found')
  }
})

// @desc    Create new review
// @route   POST /api/careers/:id/reviews
// @access  Private

export { getCareers, getCareerById, deleteCareer, createCareer, updateCareer }

