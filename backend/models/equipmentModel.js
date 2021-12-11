import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

const equipmentSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    nameOfEquipment: { type: String, required: true },
    capacity: { type: String, required: true },
    modelNo: { type: String, required: true },
    madeIn: { type: String, required: true },
    image: { type: String, required: true },
    reviews: [reviewSchema],
    quantity: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
)

const Equipment = mongoose.model('Equipment', equipmentSchema)

export default Equipment
