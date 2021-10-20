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
async function createUser(){};

// update existing user by id
async function updateUserById(){};

// delete existing user by id
async function deleteUserById(){};

module.exports = {
   getAllUsers,
   createUser,
   updateUserById,
   deleteUserById,
};