import { Campsite } from "../models/campsite.js"
import { Comment } from "../models/comment.js"
import { Profile } from "../models/profile.js"

function campsiteSearch(req, res) {
  console.log(req.body)
  res.redirect("/")
}

// the form to make a new campsite
function campsiteNew(req, res) {
  res.render("campsites/new", {title: "New Campsite", user: req.user,})
}

function create (req, res) {
  const campsite = new Campsite(req.body)
  campsite.save(function(err) {
		if (err) {
      return res.redirect("/")
    }
    res.redirect(`/campsites/${campsite._id}`)
  }) 
}

function show(req, res) {
  Campsite.findById(req.params.id)
  res.render("campsites/show", {
    Campsite, 
    title: "Campsite Details", 
  })
}

function index (req, res) {
  Campsite.find({})
  .then(campsites => {
    res.render("campsites/index", {
      title: "campsites",
    })
  })
}


export {
  campsiteSearch,
  campsiteNew as new,
  create,
  show,
  index,
}


