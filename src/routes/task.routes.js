const express = require('express');
const router = express.Router();
const { createTask, getProjectTasks } = require('../controllers/task.controller');
const authMiddleware = require('../middlewares/auth.middleware');

if (typeof authMiddleware === 'function') {
  router.use(authMiddleware);
} else if (authMiddleware && typeof authMiddleware.protect === 'function') {
  router.use(authMiddleware.protect);
}

router.post('/', createTask);
router.get('/project/:projectId', getProjectTasks);

module.exports = router;