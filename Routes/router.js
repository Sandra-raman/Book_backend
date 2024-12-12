const express=require('express')
const router=express.Router()
const UserController=require('../Controller/UserController')

router.post('/api/register',UserController.registerAPI)
router.post('/api/login',UserController.loginAPI)

module.exports=router
