const mongoose = require('mongoose');
const schema = mongoose.Schema;

const eventSchema = new schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'admin',
    required: true,
  },
  image: {
    imageURL: {
      type: String,
    },
    public_id: {
      type: String,
    },
  },
});
module.exports = mongoose.model('event', eventSchema);
