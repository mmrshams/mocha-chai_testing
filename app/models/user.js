let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//user schema definition
let UserSchema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    code: { type: Number, required: true },
    age: { type: Number, required: true},
    createdAt: { type: Date, default: Date.now },    
  }, 
  { 
    versionKey: false
  }
);

// Sets the createdAt parameter equal to the current time
UserSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

//Exports the UserSchema for use elsewhere.
module.exports = mongoose.model('user', UserSchema);