const express = require('express');
const {
  deletePost,
  addPost,
  getPosts,
  updatePost,
  updatePostImage,
  postLikes,
  getSinglePost,
  addComment,

} = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
/* const { CloudinaryStorage } = require('multer-storage-cloudinary');
 */const multer = require('multer');
const router = express.Router();
/* const cloudinary = require('../helpers/Cloudinary');
 */
/* const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'images'
  },
});
 */

/* const upload = multer({ storage });
 */
router.put('/likes/:id', authMiddleware, postLikes);
router.put('/comment/:id', authMiddleware, addComment);
router.post('/addpost', /* upload.single('picture') */ authMiddleware, addPost);
router.get('/', getPosts);
router.get('/getpost/:id', getSinglePost);
router.put('/update/:id', authMiddleware, updatePost);
/* router.put('/uploadimg/:id',upload.single('postImg'), authMiddleware, updatePostImage);
 */router.delete('/:id', deletePost);



module.exports = router;
