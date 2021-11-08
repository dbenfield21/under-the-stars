import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  rating: Number,
  content: String, 
  campsite: [{type: Schema.Types.ObjectId, ref: "Campsite"}],
  author: [{type: Schema.Types.ObjectId, ref: "Profile"}],
}, {
  timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema)

export {
  Comment,
}