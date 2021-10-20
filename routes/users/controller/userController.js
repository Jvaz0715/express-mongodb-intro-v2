const User = require("../model/User");
const bcrypt = require("bcryptjs");

/* async/await will cut down on code, while using Promises under the hood! */

// get all users function
async function getAllUsers(){
   try{
      let foundAllUsers = await User.find({});
      return foundAllUsers;
   } catch(error) {
      return error;
   };
};

 // create new user
async function createUser(body){
   try {
      // for bcrypt docs visit below:
         // https://www.npmjs.com/package/bcryptjs
      let createdSalt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(body.password, createdSalt);

      let createdUser = new User({
         firstName: body.firstName,
         lastName: body.lastName,
         password: hashedPassword,
         email: body.email,
         username: body.username,
      });

      return await createdUser.save();
   } catch (error) {
      return error;
   }
};

// update existing user by id
async function updateUserById(id, body){
   try {
      let updatedUser = await User.findByIdAndUpdate({_id: id}, body, {new: true});
      return updatedUser;
   } catch(e) {
      return e;
   }
};

// delete existing user by id
async function deleteUserById(id){
   try{
      let deletedUser = await User.findByIdAndDelete({_id: id});
      return deletedUser;
   } catch(e) {
      return e;
   }
};

module.exports = {
   getAllUsers,
   createUser,
   updateUserById,
   deleteUserById,
};