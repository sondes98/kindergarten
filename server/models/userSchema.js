const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Genders = Object.freeze({
  Maman: "male",
  Papa: "female",
});
const Gender = Object.freeze({
  Girl: "male",
  Boy: "female",
});

const UserSchema = new schema(
  {
    childsFirstName: {
      type: String,
      required: true,
    },
    childsLastName: {
      type: String,
      required:true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
      trim: true,
    },
    Pgender: {
      type: String,
      enum: Object.values(Genders),
    },
    Cgender: {
      type: String,
      enum: Object.values(Gender),
    },
    parentsFullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      city:{
        type: String,
      },
      Street:{
        type: String,
      },
      code: {
        type: Number,
      },
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      imageURL: {
        type: String,
        default:"https://houstontamilchair.org/wp-content/uploads/2020/07/parent-directory-avatar-2png-avatar-png-256_256.png",
      },
      public_id: {
        type: String,
      },
    },
    role:{
      type:String,
      default:'user', 
      enum:['user','admin']
    },
    phone:{
      type: Number,
    }
  },
  { timestamps: true }
);
Object.assign(UserSchema.statics, {
  Genders, Gender,
});

module.exports = mongoose.model("user", UserSchema);
