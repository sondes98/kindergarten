const Message = require("../models/messageSchema");

const addMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const newMessage = await Message.create({ message, name: req.userId });
    const messages = await newMessage.save();
    
    res.json(messages);
  } catch (error) {
    io.emit('message', req.body);
    res.status(500).json({ erros: error });
  }
};

const getMessage = async (req, res) => {
  const message = req.query.message;
  try {
      let messages;
      if (message){
          messages = await Message.find({message});
      }else{
          messages = await Message.find();
      }
      res.status(200).json(messages);
  } catch (err) {
      res.status(500).json({ message: err })
      
  }
};

module.exports = { addMessage, getMessage };
