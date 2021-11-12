import { Router } from 'express'
import * as profileCtrl from "../controllers/profiles.js"
import { Profile } from '../models/profile.js'



const router = Router()


function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next ()
  
  }
  res.redirect('/auth/google')
}


router.get('/', isLoggedIn, profileCtrl.index)


router.get('/:id', isLoggedIn, profileCtrl.show)



export {
  router
}

