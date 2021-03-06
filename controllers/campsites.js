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
      console.log(err)
      return res.redirect("/")
    }
    res.redirect(`campsites/${campsite.id}`)
  }) 
}

//shows individual campsites finds them by their unique ID
function show(req, res) {
  Campsite.findById(req.params.id)
  .then(campsite =>{
    Comment.find({
      campsite: campsite._id
    })
    .populate("author")
    .then(comments => {
      res.render("campsites/show", {
        campsite, 
        title: "Campsite Details", 
        user: req.user,
        comments, 
      })
    })
  })
  .catch(err => {
    console.log(err) 
      res.redirect('/campsites/index')
  })
}

//shows all the campsites
function index (req, res) {
  Campsite.find({})
  .then(campsites => {
    res.render("campsites/index", {
      title: "campsites",
      user: req.user, 
      campsites,
    })
  })
  .catch(err => {
    console.log(err) 
      res.redirect('/campsites/index')
  })

}

function deleteCampsite (req, res) {
  Campsite.findByIdAndDelete(req.params.id, function(err, campsite) {
    res.redirect('/campsites')
  })
}

function edit(req, res) {
  Campsite.findById(req.params.id, function(err, campsite) {
    res.render('campsites/edit', {
      title: 'Edit Campsite',
      err, 
      user: req.user, 
      campsite,
    })
  })
}

function update (req, res) {
    for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Campsite.findByIdAndUpdate(req.params.id, req.body, function(err, campsite) {
    res.redirect(`/campsites/${campsite.id}`)
  })
}





export {
  campsiteSearch,
  campsiteNew as new,
  create,
  show,
  index,
  deleteCampsite as delete,
  update,
  edit, 
}


