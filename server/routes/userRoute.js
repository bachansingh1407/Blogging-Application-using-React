const express = require('express');
const router = express.Router();
const { deleteAccount,updateUser,updatePassword } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Ensure authentication middleware is used

// Delete account route
router.delete('/delete-account/:id', authMiddleware, deleteAccount);
router.put('/update-user/:id', authMiddleware, updateUser)
router.put('/update-password/:id', authMiddleware, updatePassword);


module.exports = router;