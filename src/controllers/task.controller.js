const Task = require('../models/task');

// 1. Task Save (Create) Karein
exports.createTask = async (req, res) => {
  try {
    const { title, projectId } = req.body;
    const task = await Task.create({
      title,
      project: projectId
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Tasks Get (Read) Karein
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.params.projectId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3. Task Delete Karein
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task kamyabi se delete ho gaya" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};