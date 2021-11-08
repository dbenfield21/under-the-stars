import mongoose from 'mongoose'

const Schema = mongoose.Schema

const campsiteSchema = new mongoose.Schema({
  name: String,
  location: String,
  rating: Number,
  camped: Boolean, 
  comments: [{type: Schema.Types.ObjectId, ref: "Comments"}],
  savedBy: [{type: Schema.Types.ObjectId, ref: "Profile"}],
}, {
  timestamps: true
})

const Campsite = mongoose.model('Campsite', campsiteSchema)

export {
  Campsite
}