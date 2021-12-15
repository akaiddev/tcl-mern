import asyncHandler from 'express-async-handler'
import ContactInfo from '../models/ContactInfoModel.js'

// @desc    Fetch all Contact Infos
// @route   GET /api/contactInfos
// @access  Public

const getContactInfos = asyncHandler(async (req, res) => {
  const contactInfos = await ContactInfo.find({})
  res.json(contactInfos)
})

// @desc    Fetch Contact Info
// @route   GET /api/contactInfos/:id
// @access  Public

const getContactInfoById = asyncHandler(async (req, res) => {
  const contactInfo = await ContactInfo.findById(req.params.id)

  if (contactInfo) {
    res.json(contactInfo)
  } else {
    res.status(404)
    throw new Error('Contact Info not found')
  }
})

// @desc    Delete a Contact Info
// @route   DELETE /api/contactInfos/:id
// @access  Private/Admin

const deleteContactInfo = asyncHandler(async (req, res) => {
  const contactInfo = await ContactInfo.findById(req.params.id)

  if (contactInfo) {
    await contactInfo.remove()
    res.json({ message: 'Contact Info Removed' })
  } else {
    res.status(404)
    throw new Error('Contact Info not Found')
  }
})

// @desc    Create a Contact Info
// @route   POST /api/contactInfos
// @access  Private/Admin

const createContactInfo = asyncHandler(async (req, res) => {
  const contactInfo = new ContactInfo({
    title: 'Head Office / Address',
    icon: 'fas fa-map-marker-alt',
    description: 'Managing Director & CEO',
    textColor: 'text-dark',
    user: req.user._id,
  })

  const createdContactInfo = await contactInfo.save()
  res.status(201).json(createdContactInfo)
})

// @desc    Update a Contact Info
// @route   PUT /api/contactInfos/:id
// @access  Private/Admin

const updateContactInfo = asyncHandler(async (req, res) => {
  const { title, icon,description, textColor } = req.body

  const contactInfo = await ContactInfo.findById(req.params.id)

  if (contactInfo) {
    contactInfo.icon = icon
    contactInfo.title = title
    contactInfo.description = description
    contactInfo.textColor = textColor

    const updatedContactInfo = await contactInfo.save()
    res.json(updatedContactInfo)
  } else {
    res.status(404)
    throw new Error('Updated Contact Info not found')
  }
})

export { getContactInfos, getContactInfoById, deleteContactInfo, createContactInfo, updateContactInfo }

