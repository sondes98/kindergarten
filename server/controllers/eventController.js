const cloudinary = require("../helpers/cloudinary");
const event = require("../models/eventSchema");

const addEvent = async (req, res) => {
  try {
    const newBody = JSON.parse(req.body.info);
    const imageInfo = await cloudinary.uploader.upload(req.file.path);
    const newEvent = await event.create({
      title: newBody.title,
      description: newBody.description,
      owner: req.userId,
      image: { imageURL: imageInfo.url, public_id: imageInfo.public_id },
    });
    res.json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const deleteEvent = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  deleteEvent,
  addEvent,
  getEvents,
};
