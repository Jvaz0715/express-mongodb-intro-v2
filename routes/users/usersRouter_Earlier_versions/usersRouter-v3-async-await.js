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
router.get("/get-all-users", async function(req,res){
  try{
    let foundAllUsers = await getAllUsers();
    res.json({ message: "success", foundAllUsers });
  } catch (error){
    res.json({ message: "failure", error: error.message });
  };
});

// creat a new user
router.post('/create-user', async function(req, res){
  try{
    let createdUser = await createUser(req.body);
    res.json({ message: "success", createdUser });
  } catch (error) {
    res.json({ message: "failure", error: error.message });
  }
});

// update a user
router.put('/update-user-by-id/:id', async function(req, res){
  try {
    let updatedUser = await updateUserById(req.params.id, req.body);
    res.json({ message: "success", updatedUser })
  } catch(e){
    res.json({ message: "failure", error: e.message });
  }
});

// delete a user
router.delete("/delete-user-by-id/:id", async function(req, res){
  try {
    let deletedUser = await deleteUserById(req.params.id);
    res.json({ message: "success", deletedUser });
  } catch (e) {
    res.json({ message: "failure", error: e.message });
  }
});

module.exports = router;
