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

const privateProjectSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    contact: { type: String, required: true },
    client: { type: String, required: true },
    valueOfWork: { type: String, required: true },
    nameOfWork: { type: String, required: true },
    image: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
)

const PrivateProject = mongoose.model('PrivateProject', privateProjectSchema)

export default PrivateProject
