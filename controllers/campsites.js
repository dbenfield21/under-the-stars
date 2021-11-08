import { Campsite } from "../models/campsite.js"
import { Comment } from "../models/comment.js"
import { Profile } from "../models/profile.js"




function campsiteSearch(req, res) {
  console.log(req.body)
  res.redirect("/")
}



export {
  campsiteSearch,
}

