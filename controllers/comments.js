import { Campsite } from "../models/campsite.js"
import { Comment } from "../models/comment.js"
import { Profile } from "../models/profile.js"




function createComment (req, res) {
  Campsite.findById(req.params.id, function (err, campsite){
    req.body.userID = req.user._id;
    req.body.userName = req.user.name;
    campsite.comments.push(req.body);
    campsite.save(function (err) {
      res.redirect(`/campsites/${campsite.id}`)
    })
  })
  }

  
  export {
    createComment,
  }