//user is coming from the template we created  in the model folder schema
const User = require("../model/User");

// this is exporting object with key: value, functions could be a values
module.exports = {
   getAllUsers: function(callback){
      // User.find is a mongoose function to query the database
      // err is first argument payload is second
      User.find({}, function(err, payload){
         if(err) {
            callback(err, null);
         } else {
            callback(null, payload);
         }
      });
   },
   createUser: function(body, callback){
      let createdUser = new User({
         firstName: body.firstName,
         lastName: body.lastName,
         password: body.password,
         email: body.email,
         username: body.username,
      });

      createdUser.save(function(err, payload){
         if(err){
            callback(err, null);
         } else {
            callback(null, payload);
         }
      })
   }
};