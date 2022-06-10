const express = require('express');
const {
  deleteEvent,
  addEvent,
  getEvents,

} = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
/* const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer'); */
const router = express.Router();
/* const cloudinary = require('../helpers/cloudinary');
 */
/* const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'events'
  },
});


const upload = multer({ storage }); */


router.post('/addEvent'/* , upload.single('photo') */, authMiddleware, addEvent);
router.get('/', getEvents);
router.delete('/:id', deleteEvent);


module.exports = router;
