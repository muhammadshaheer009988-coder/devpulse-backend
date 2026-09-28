const express = require('express');
const { createWorkspace, getUserWorkspaces } = require('../controllers/workspace.controller');
const { authenticateUser } = require('../middlewares/auth.middleware');

const router = express.Router();

// Sensitive routes me auth middleware zaroori hai
router.post('/', authenticateUser, createWorkspace);
router.get('/', authenticateUser, getUserWorkspaces);

module.exports = router;