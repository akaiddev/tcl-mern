import mongoose from 'mongoose'

const contactInfoSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    textColor: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const ContactInfo = mongoose.model('ContactInfo', contactInfoSchema)

export default ContactInfo
