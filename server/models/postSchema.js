const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postSchema = new schema({
  createdAt: {
    type: Date,
    default: new Date(),
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
    ref: 'user',
    required: true,
  },
  likes: {
    type: [mongoose.Types.ObjectId],
    default: [],
  },
  image: {
    imageURL: {
      type: String,
    },
    public_id: {
      type: String,
    },
  },
  comments: [
    {
      commentOwner: { type: mongoose.Types.ObjectId, ref: 'User' },
      desc: String,
      createdAt: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});
module.exports = mongoose.model('post', postSchema);
