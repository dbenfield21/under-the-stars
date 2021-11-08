import { Campsite } from "../models/campsite.js"
import { Comment } from "../models/comment.js"
import { Profile } from "../models/profile.js"




function campsiteSearch(req, res) {
  console.log(req.body)
  res.redirect("/")
}


function campsiteNew(req, res) {
  res.render("campsites/new", {title: "New Campsite", user: req.user,})
}

// function createNew (req, res) {
//   // for (let key in req.body) {
//   //   if (req.body[key] === '') delete req.body[key]
//   // }
//   // const campsite = new Campsite(req.body)
//   // campsite.save(function(err) {
// 	// 	if (err) {
//   //     return res.redirect('/campsites/new')
//   //   }
//   //   res.redirect(`/campsites/${campsite._id}`)
//     console.log(dog)
//   // }) 
// }


export {
  campsiteSearch,
  campsiteNew as new,
  // createNew as new,
}

