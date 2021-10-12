const express = require('express');
const {
  addPost,
  getPosts,
  updatePost,
  updatePostImage,
  postLikes,
  getSinglePost,
  addComment,
} = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const router = express.Router();
const cloudinary = require('../helpers/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'DEV',
  },
});
// 0

const upload = multer({ storage });

router.put('/likes/:id', authMiddleware, postLikes);
router.put('/comment/:id', authMiddleware, addComment);
router.post('/addpost', upload.single('photo'), authMiddleware, addPost);
router.get('/', getPosts);
router.get('/getpost/:id', getSinglePost);
router.put('/update/:id', authMiddleware, updatePost);
router.put('/uploadimg/:id', upload.single('postImg'), authMiddleware, updatePostImage);

module.exports = router;
