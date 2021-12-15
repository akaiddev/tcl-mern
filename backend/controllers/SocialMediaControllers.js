import asyncHandler from 'express-async-handler'
import SocialMedia from '../models/SocialMediaModel.js'

// @desc    Fetch all Social Medias
// @route   GET /api/socialMedias
// @access  Public

const getSocialMedias = asyncHandler(async (req, res) => {
  const socialMedias = await SocialMedia.find({})
  res.json(socialMedias)
})

// @desc    Fetch Social Media
// @route   GET /api/socialMedias/:id
// @access  Public

const getSocialMediaById = asyncHandler(async (req, res) => {
  const socialMedia = await SocialMedia.findById(req.params.id)

  if (socialMedia) {
    res.json(socialMedia)
  } else {
    res.status(404)
    throw new Error('Social Media not found')
  }
})

// @desc    Delete a Social Media
// @route   DELETE /api/socialMedias/:id
// @access  Private/Admin

const deleteSocialMedia = asyncHandler(async (req, res) => {
  const socialMedia = await SocialMedia.findById(req.params.id)

  if (socialMedia) {
    await socialMedia.remove()
    res.json({ message: 'Social Media Removed' })
  } else {
    res.status(404)
    throw new Error('Social Media not Found')
  }
})

// @desc    Create a Social Media
// @route   POST /api/socialMedias
// @access  Private/Admin

const createSocialMedia = asyncHandler(async (req, res) => {
  const socialMedia = new SocialMedia({
    name: 'facebook',
    url: 'https://www.facebook.com',
    name: 'fab fa-facebook',
    animation: 'animation-Right',
    iconColor: 'text-dark',
    user: req.user._id,
  })

  const createdSocialMedia = await SocialMedia.save()
  res.status(201).json(createdSocialMedia)
})

// @desc    Update a Social Media
// @route   PUT /api/socialMedias/:id
// @access  Private/Admin

const updateSocialMedia = asyncHandler(async (req, res) => {
  const { icon, name,animation, iconColor, url } = req.body

  const socialMedia = await SocialMedia.findById(req.params.id)

  if (socialMedia) {
    socialMedia.name = name
    socialMedia.icon = icon
    socialMedia.url = url
    socialMedia.animation = animation
    socialMedia.iconColor = iconColor

    const updatedSocialMedia = await socialMedia.save()
    res.json(updatedSocialMedia)
  } else {
    res.status(404)
    throw new Error('Updated Social Media not found')
  }
})

export { getSocialMedias, getSocialMediaById, deleteSocialMedia, createSocialMedia, updateSocialMedia }

