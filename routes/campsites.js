import { Router } from 'express'
import * as campsitesCtrl from '../controllers/campsites'

const router = Router()


router.get()

router.post()

router.patch()



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

// Quick way to test a newly mounted router:
// router.get('/', function(req, res) {
//   res.send('Hey, it works!')
// })




