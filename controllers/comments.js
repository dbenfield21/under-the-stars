import { Campsite } from "../models/campsite.js"
import { Comment } from "../models/comment.js"
import { Profile } from "../models/profile.js"




function create (req, res) {
  req.body.author = req.user._id;
  req.body.campsite = req.params.id;
  Comment.create(req.body, function(err, comment) {
    Campsite.findById(req.params.id, function (err, campsite){
      campsite.comments.push(comment._id);
      campsite.save(function (err) {
        res.redirect(`/campsites/${campsite.id}`)
      })
    })
  })
}

  
  export {
    create,
  }

