var express = require('express');
var router = express.Router();
const userController = require("../users/controller/userController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// get all users
router.get("/get-all-users", function(req,res){
  userController.getAllUsers(function(err, payload) {
    if (err) {
      res.status(500).json({message: "Error", error: err});
    } else {
      res.json({message: "success", data: payload})
    }
  })
})

module.exports = router;
