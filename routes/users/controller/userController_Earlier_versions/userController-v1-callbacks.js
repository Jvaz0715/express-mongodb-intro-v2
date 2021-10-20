//user is coming from the template we created  in the model folder schema
const User = require("../model/User");
const bcrypt = require("bcryptjs"); //<----"brings in bcrypt" hashes password

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
   // right now, the below is building into callback hell, going deeper to the right, which can make code unreadable and harder to edit/find bugs
   createUser: function(body, callback){
      // do the bcrypt hashing password process here
      bcrypt.genSalt(10, function(err, salt){
         if (err) {
            callback(err, null);
         } else {
            bcrypt.hash(body.password, salt, function(err, hash){
               if (err) {
                  callback(err, null);
               } else {
                  // Creates a mongodb user object it will assign a unique ID for the user
                  let createdUser = new User({
                     firstName: body.firstName,
                     lastName: body.lastName,
                     password: hash,
                     email: body.email,
                     username: body.username,
                  });

                  // the save function will save it to the database
                  createdUser.save(function(err, payload){
                     if(err){
                        callback(err, null);
                     } else {
                        callback(null, payload);
                     }
                  });
               }
            });
         }
         
      });
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