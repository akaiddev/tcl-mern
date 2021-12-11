import mongoose from 'mongoose'

const serviceProductSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    point: [{ type: String, required: true }],
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const ServiceProduct = mongoose.model('ServiceProduct', serviceProductSchema)

export default ServiceProduct
