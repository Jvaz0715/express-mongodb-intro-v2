const User = require("../model/User");
const bcrypt = require("bcryptjs");

/* async/await will cut down on code, while using Promises under the hood! */

// get all users function
async function getAllUsers(req, res){
   try {
      let foundAllUsers = await User.find({});

      res.json({ message: "success", data: foundAllUsers });

   } catch(e) {
      res.status(500).json({ message: "failure", error: e.message});
      
   }
};

 // create new user
async function createUser(req, res){
   const {
      firstName, 
      lastName, 
      password, 
      email, 
      username
   } = req.body;
   
   try {
      let createdSalt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(password, createdSalt);

      let createdUser = new User({
         firstName,
         lastName,
         password: hashedPassword,
         email,
         username,
      });

      let savedUser = await createdUser.save();

      res.json({ message: "success", data: savedUser })
   } catch (e) {
      res.status(500).json({ message: "failure", error: e.message});
   }

};

// update existing user by id
async function updateUserById(req, res){
   const id = req.params.id;
   const body = req.body;
   try {
      let updatedUser = await User.findByIdAndUpdate({_id: id}, body, {new: true});

      res.json({ message: "success", data: updatedUser});
   } catch(e){
      res.status(500).json({ message: "failure", error: e.message});
   }
};

// delete existing user by id
async function deleteUserById(req, res){
   const id = req.params.id;

   try {
      let deletedUser = await User.findByIdAndDelete({_id: id});
      res.json({ message: "success", data: deletedUser});
   } catch(e){
      res.status(500).json({ message: "failure", error: e.message});
   }
};

module.exports = {
   getAllUsers,
   createUser,
   updateUserById,
   deleteUserById,
};