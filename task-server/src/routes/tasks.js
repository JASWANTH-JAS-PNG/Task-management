const express = require('express');
const { body } = require('express-validator');
const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
} = require('../controllers/taskController');
const { protect } = require('../middleware/auth');
const { handleValidationErrors } = require('../middleware/validation');

const router = express.Router();

// All task routes require authentication
router.use(protect);

// Create task
router.post(
  '/',
  [
    body('title', 'Title is required and must be at least 3 characters').trim().isLength({ min: 3 }),
    body('description', 'Description must be a string').optional().trim(),
    body('priority', 'Priority must be low, medium, or high')
      .optional()
      .isIn(['low', 'medium', 'high']),
  ],
  handleValidationErrors,
  createTask
);

// Get all tasks
router.get('/', getTasks);

// Get single task
router.get('/:id', getTask);

// Update task
router.put(
  '/:id',
  [
    body('title', 'Title must be at least 3 characters').optional().trim().isLength({ min: 3 }),
    body('status', 'Status must be pending or completed')
      .optional()
      .isIn(['pending', 'completed']),
    body('priority', 'Priority must be low, medium, or high')
      .optional()
      .isIn(['low', 'medium', 'high']),
  ],
  handleValidationErrors,
  updateTask
);

// Delete task
router.delete('/:id', deleteTask);

// Toggle task status
router.patch('/:id/toggle', toggleTaskStatus);

module.exports = router;
