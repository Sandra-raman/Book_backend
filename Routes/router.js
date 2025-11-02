const express=require('express')
const UserController=require('../Controller/UserController')
const ReviewController=require('../Controller/ReviewController')
const jwtMiddlewares = require('../Middlewares/jwtMiddleware')
const multerMiddleware=require('../Middlewares/multerMiddleware')
const router=express.Router()

router.post('/api/register',UserController.registerAPI)

router.post('/api/login',UserController.loginAPI)

router.post('/api/addreview',jwtMiddlewares,multerMiddleware.single('bookImg'), ReviewController.addReviewAPI)

router.get('/api/getAllUserreview',jwtMiddlewares,ReviewController.getAllUserreviewAPI)

router.get('/api/getHomereview',ReviewController.getHomereviewAPI)

router.get('/api/getAUserreview',ReviewController.getUserreviewAPI)

router.put('/api/editreview/:reviewId',jwtMiddlewares,multerMiddleware.single('bookImg'),ReviewController.editReviewAPI)

router.delete('/api/deletereview/:reviewId',jwtMiddlewares,ReviewController.deletereviewAPI)

module.exports=router
