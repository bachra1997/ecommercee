 const express = require ("express");
const router = express.Router();
const { signup ,signin ,signout,
requireSignin
 } = require ("../controllers/auth");

const {userSignupValidator} = require ('../validator');

router.post("/signup",userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);


//router.get("/helowala haja eli theb taamlha" ,requireSignin,(req,res) =>{
//	res.send("haja eli theb....");
//})

module.exports = router;    