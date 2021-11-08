import { Router } from 'express'
import * as campsitesCtrl from '../controllers/campsites.js'

const router = Router()


// router.get()

// router.post()

// router.patch()



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}


router.post("/campsiteSearch", isLoggedIn, campsitesCtrl.campsiteSearch) 




// Quick way to test a newly mounted router:
// router.get('/', function(req, res) {
//   res.send('Hey, it works!')
// })




export {
  router,
}