import mongoose from 'mongoose'

const careerSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    position: { type: String, required: true },
    headline: { type: String, required: true },
    type: { type: String, required: true },
    qualifications: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    skills: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Career = mongoose.model('Career', careerSchema)

export default Career
