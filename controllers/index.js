import { Campsite } from "../models/campsite.js"
import { Comment } from "../models/comment.js"
import { Profile } from "../models/profile.js"


function index(req, res) {
  res.render('index', {
    title: 'Latest Activity',
    user: req.user ? req.user : null 
  })
}


export {
  index,
}