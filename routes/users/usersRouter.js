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
router.get("/get-all-users", function(req,res){
  getAllUsers()
    .then((payload) => {
      res.json({ message: "success", data: payload });
    })
    .catch((error) => {
      res.status(500).json({ message: "error", error });
    })
});

// creat a new user
router.post('/create-user', function(req, res){
  createUser(req.body)
    .then((payload) =>{
      res.json({ message: "success", data: payload });
    })
    .catch((error) =>{
      res.status(500).json({ message: "error", error });
    })
});

// update a user
router.put('/update-user-by-id/:id', function(req,res){
  updateUserById(req.params.id, req.body)
    .then((updatedPayload) =>{
      res.json({ message: "success", data: updatedPayload});
    })
    .catch((error)=>{
      res.status(500).json({ message: "error", error });
    })
});

// delete a user
router.delete("/delete-user-by-id/:id", function(req, res){
  deleteUserById(req.params.id)
    .then((deletedPayload) =>{
      res.json({ message: "success", data: deletedPayload });
    })
    .catch((error)=> {
      res.status(500).json({ message: "error", error });
    })
});

module.exports = router;
