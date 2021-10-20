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
   createUser: function(body){
      return new Promise((resolve, reject) => {
         bcrypt
            .genSalt(10)
            .then((salt) => {
               return bcrypt.hash(body.password, salt);
            })
            .then((hashedPassword)=>{
               let createdUser = new User({
                  firstName: body.firstName,
                  lastName: body.lastName,
                  password: hashedPassword,
                  email: body.email,
                  username: body.username,
               });

               return createdUser.save();
            })
            .then(createdUser => {
               resolve(createdUser);
            })
            .catch((error) => {
               reject(error);
            });
      });
   },
   // update existing user by id
   updateUserById: function(id, body, callback){},
   // delete existing user by id
   deleteUserById: function(id, callback){},
};