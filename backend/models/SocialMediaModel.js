import mongoose from 'mongoose'

const socialMediaSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    url: { type: String, required: true },
    icon: { type: String, required: true },
    animation: { type: String, required: true },
    iconColor: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const SocialMedia = mongoose.model('SocialMedia', socialMediaSchema)

export default SocialMedia
