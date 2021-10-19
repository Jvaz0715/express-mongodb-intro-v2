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
});

// creat a new user
router.post('/create-user', function(req, res){
  userController.createUser(req.body, function(err, payload){
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload });
    }
  });
});

// update a user
router.put('/update-user-by-id/:id', function(req,res){
  userController.updateUserById(req.params.id, req.body, function(err, updatedPayload){
    if(err){
      res.status(500).json({ message: "Error", erro: err });
    } else {
      res.json({ message: "success", data: updatedPayload});
    }
  })
})

module.exports = router;
