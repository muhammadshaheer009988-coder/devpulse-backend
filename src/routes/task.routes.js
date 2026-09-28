const express = require('express');
const router = express.Router();
const { createTask, getTasks, deleteTask } = require('../controllers/task.controller');

router.post('/', createTask);
router.get('/:projectId', getTasks);
router.delete('/:id', deleteTask);

module.exports = router;