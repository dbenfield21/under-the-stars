import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  bio: String, 
  comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
  following: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  favoriteSite: [{type: Schema.Types.ObjectId, ref: "Campsite"}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}