import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  bio: String, 
  comments: [{type: Schema.Types.ObjectId, ref: "Comments"}],
  following: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  favoriteSite: [{type: Schema.Types.ObjectId, ref: "Campsites"}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}