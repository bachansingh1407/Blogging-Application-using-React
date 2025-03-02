const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  getUserProfile,
  getUserBlogs,
  deleteBlog,
  updateBlog
} = require("../controllers/blogController");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();
// exports.router = router;

router.post("/", authMiddleware, upload.single("image"), createBlog);
router.get("/", getAllBlogs); // Get All Blogs
router.get("/:id", getBlogById); // Get Blog by ID
// // Route to fetch user profile details
router.get('/user-details/:id', getUserProfile);
router.get("/user/:id", getUserBlogs);
router.delete("/:id",authMiddleware, deleteBlog)
router.put('/update-blog/:id', authMiddleware, updateBlog);

module.exports = router;
