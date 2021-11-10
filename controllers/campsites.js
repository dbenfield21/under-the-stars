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

function create (req, res) {
  const campsite = new Campsite(req.body)
  campsite.save(function(err) {
		if (err) {
      return res.redirect('/campsites/new')
    }
    res.redirect(`/campsites/${campsite._id}`)
  }) 
}

function show(req, res) {
  Campsite.findById(req.params.id)
  res.render("campsites/show", {
    campsite, 
    title: "Campsite Details", 
  })
}



export {
  campsiteSearch,
  campsiteNew as new,
  create,
  show,
}


