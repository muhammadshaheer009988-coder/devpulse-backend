const express = require('express');
const router = express.Router();
const { createWorkspace, getWorkspaces } = require('../controllers/workspace.controller');

// Dummy auth middleware (agar aap middleware use kar rahe hain toh woh import karein)
const authMiddleware = (req, res, next) => {
  req.user = { id: 'dummy_user_id' }; // Testing ke liye
  next();
};

router.post('/', authMiddleware, createWorkspace);
router.get('/', authMiddleware, getWorkspaces);

module.exports = router;