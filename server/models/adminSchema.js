const mongoose = require("mongoose");
const schema = mongoose.Schema;



const AdminSchema = new schema(
  {
    username: {
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


module.exports = mongoose.model("Admin", AdminSchema);
