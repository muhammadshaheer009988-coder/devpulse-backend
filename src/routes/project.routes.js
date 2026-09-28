const express = require('express');
const router = express.Router();
const { createProject, getWorkspaceProjects } = require('../controllers/project.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Check karein middleware sahi se import ho raha hai
if (typeof authMiddleware === 'function') {
  router.use(authMiddleware);
} else if (authMiddleware && typeof authMiddleware.protect === 'function') {
  router.use(authMiddleware.protect);
}

router.post('/', createProject);
router.get('/workspace/:workspaceId', getWorkspaceProjects);

module.exports = router;