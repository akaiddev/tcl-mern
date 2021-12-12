import mongoose from 'mongoose'

const BoardOfDirectoSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    designation: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const BoardOfDirector = mongoose.model('BoardOfDirector', BoardOfDirectoSchema)

export default BoardOfDirector
