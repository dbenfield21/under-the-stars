import mongoose from 'mongoose'

const Schema = mongoose.Schema

const campsiteSchema = new Schema({
  name: String,
  location: String,
  rating: {type: Number, enum: [0, 1, 2, 3, 4, 5]},
  comments: [{type: Schema.Types.ObjectId, ref: "Comments"}],
  savedBy: [{type: Schema.Types.ObjectId, ref: "Profile"}],
}, {
  timestamps: true
})

const Campsite = mongoose.model('Campsite', campsiteSchema)

export {
  Campsite
}