const User = require("../model/User");
const bcrypt = require("bcryptjs");

/* async/await will cut down on code, while using Promises under the hood! */

// get all users function
async function getAllUsers(){

};

 // create new user
async function createUser(body){

};

// update existing user by id
async function updateUserById(id, body){

};

// delete existing user by id
async function deleteUserById(id){

};

module.exports = {
   getAllUsers,
   createUser,
   updateUserById,
   deleteUserById,
};