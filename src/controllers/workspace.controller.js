const Workspace = require('../models/workspace');

// Workspace Banayein (Save)
exports.createWorkspace = async (req, res) => {
  try {
    const { name } = req.body;
    const workspace = await Workspace.create({
      name,
      owner: req.user.id
    });
    res.status(201).json(workspace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tamam Workspaces Haasil Karein (Get)
exports.getWorkspaces = async (req, res) => {
  try {
    const workspaces = await Workspace.find({ owner: req.user.id });
    res.status(200).json(workspaces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};