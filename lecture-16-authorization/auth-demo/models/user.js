let mongoose = require('mongoose')
let bcrypt = require('bcrypt')

let userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true} // THIS IS OMGWTFBBQ TERRIBLE 
})

// DO NOT USE AN ARROW FUNCTION HERE
userSchema.methods.hashPassword = function(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return reject(err)
      this.password = hash
      resolve(this)
    })
  })
}

module.exports = mongoose.model('user', userSchema)
