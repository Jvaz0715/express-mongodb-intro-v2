//user is coming from the template we created  in the model folder schema
const User = require("../model/User");
const bcrypt = require("bcryptjs"); //<----"brings in bcrypt" hashes password

module.exports = {
   getAllUsers: function(callback){},
   createUser: function(body, callback){},
   updateUserById: function(id, body, callback){},
   deleteUserById: function(id, callback){},
};