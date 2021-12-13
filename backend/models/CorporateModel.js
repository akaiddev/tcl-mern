import mongoose from 'mongoose'

const CorporateSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    description: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
)

const Corporate = mongoose.model('Corporate', CorporateSchema)

export default Corporate
