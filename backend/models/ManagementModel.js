import mongoose from 'mongoose';

const ManagementSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    designation: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Management = mongoose.model('Management', ManagementSchema)

export default Management


