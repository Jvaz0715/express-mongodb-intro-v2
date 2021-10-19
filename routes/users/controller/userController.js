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
   },
   updateUserById: function(id, body, callback){
      User.findByIdAndUpdate(
         {_id: id}, 
         body, 
         {new: true}, // <---- if you don't put this. when the res.json returns, it'll show old data rather than new data or change
         function(err, updatedPayload){
            if (err){
               callback(err, null);
            } else {
               callback(null, updatedPayload);
            }
         }
      );


   },
   deleteUserById: function(id, callback){
      User.findByIdAndRemove({_id: id}, function(err, deletedPayload){
         if(err){
            callback(err, null);
         } else {
            callback(null, deletedPayload);
         }
      })
   },
};