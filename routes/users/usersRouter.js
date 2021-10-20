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
router.get("/get-all-users", getAllUsers);

// creat a new user
router.post('/create-user', createUser);

// update a user
router.put('/update-user-by-id/:id', updateUserById);

// delete a user
router.delete("/delete-user-by-id/:id", deleteUserById);

module.exports = router;
