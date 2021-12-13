import mongoose from 'mongoose'

const OverviewSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    col: { type: Number, required: true },
    animation: { type: String, required: true },
    description: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
)

const Overview = mongoose.model('Overview', OverviewSchema)

export default Overview
