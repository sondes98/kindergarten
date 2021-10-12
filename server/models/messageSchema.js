const mongoose = require("mongoose");
const schema = mongoose.Schema;

const messageSchema = new schema(
  {
    name: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
