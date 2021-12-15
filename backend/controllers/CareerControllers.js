import asyncHandler from 'express-async-handler'
import Career from '../models/careerModel.js'

// @desc    Fetch all Career
// @route   GET /api/careers/
// @access  Public

const getCareers = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? { position: { $regex: req.query.keyword, $options: 'i' } } : {}

  const count = await Career.countDocuments({ ...keyword })
  const careers = await Career.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ careers, page, pages: Math.ceil(count / pageSize) })
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
    headline: 'Identify leads, nurture lasting relationships, and discover growth opportunities',
    type: 'Full-Time',
    qualifications: 'professionally',
    experience: '3 years',
    salary: 'Negotiable',
    skills: 'microsoft  office , excle',
    description:
      'At COdesign, designers create visual experience across all platforms for a variety of brands to help develop next-generation content, ideas, product and technologies to tackle issues of the status quo and to simplify the lives around us. We’re looking for a designer who takes responsibility and discipline to a high standard and sets an example to his team. You’re perfect for COdesign if you are consistently and constantly evolving and challenging the best in the concepts and taking lead by learning and loving the people you work with, and the work you do. As a UI/UX Designer at COdesign, you need to have the ability to push the limitations of the web/mobile to create innovative visual solutions that support user needs and business objectives. You need an understanding on how to leverage layout design, composition, iconography, typography, color, spacing and texture together to provide clients and end-users with a seamless product experience. You should have a strong focus on pixel perfect visual communication and intuitive user interaction to produce high-quality experiences across multiple products and the platforms on the web/mobile',
  })

  const createdCareer = await Career.save()
  res.status(201).json(createdCareer)
})

// @desc    Update a Career
// @route   PUT /api/careers/:id
// @access  Private/Admin

const updateCareer = asyncHandler(async (req, res) => {
  const { position, headline, type, qualifications, experience, salary , skills, description} = req.body

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

