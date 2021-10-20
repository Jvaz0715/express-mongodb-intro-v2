var express = require('express');
var router = express.Router();
const {
  getAllUsers,
  createUser,
  updateUserById,
  deleteUserById,

} = require("./controller/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({test: true});
});

// get all users
router.get("/get-all-users", function(req,res){});

// creat a new user
router.post('/create-user', function(req, res){});

// update a user
router.put('/update-user-by-id/:id', function(req,res){});

// delete a user
router.delete("/delete-user-by-id/:id", function(req, res){});

module.exports = router;
