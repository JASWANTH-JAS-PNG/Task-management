const express = require('express');
const { body } = require('express-validator');
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const { handleValidationErrors } = require('../middleware/validation');

const router = express.Router();

// Register
router.post(
  '/register',
  [
    body('name', 'Name is required').trim().isLength({ min: 2 }),
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  handleValidationErrors,
  register
);

// Login
router.post(
  '/login',
  [
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password is required').exists(),
  ],
  handleValidationErrors,
  login
);

// Get current user
router.get('/me', protect, getMe);

module.exports = router;
