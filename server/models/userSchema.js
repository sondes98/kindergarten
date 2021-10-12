const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Genders = Object.freeze({
  Male: "male",
  Female: "female",
  Other: "other",
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
    gender: {
      type: String,
      enum: Object.values(Genders),
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
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
    },
  },
  { timestamps: true }
);
Object.assign(UserSchema.statics, {
  Genders,
});

module.exports = mongoose.model("User", UserSchema);
