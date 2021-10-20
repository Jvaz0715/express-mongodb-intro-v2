//user is coming from the template we created  in the model folder schema
const User = require("../model/User");
const bcrypt = require("bcryptjs"); //<----"brings in bcrypt" hashes password

module.exports = {
   // get all users function
   getAllUsers: function(){
      return new Promise((resolve, reject) => {
         
         User.find({})
            .then(payload =>{
               resolve(payload);
            })
            .catch(error =>{
               reject(error);
            })
      });
   },

   // create new user
   createUser: function(body, callback){},
   // update existing user by id
   updateUserById: function(id, body, callback){},
   // delete existing user by id
   deleteUserById: function(id, callback){},
};