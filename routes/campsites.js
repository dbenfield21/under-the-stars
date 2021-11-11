import { Router } from 'express'
import * as campsitesCtrl from '../controllers/campsites.js'

const router = Router()

//search for a campsite
router.post("/campsiteSearch", isLoggedIn, campsitesCtrl.campsiteSearch) 

//new campsite form 
router.get("/new", isLoggedIn, campsitesCtrl.new)

//makes the new campsite
router.post("/", isLoggedIn, campsitesCtrl.create)

// list all campsites
router.get('/', isLoggedIn, campsitesCtrl.index)


//show each campsite by ID
router.get('/:id', isLoggedIn, campsitesCtrl.show)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

// Quick way to test a newly mounted router:
// router.get('/', function(req, res) {
//   res.send('Hey, it works!')
// })


export {
  router,
}