const Project = require('../models/project');

const createProject = async (req, res) => {
  try {
    const { name, workspaceId } = req.body;
    const project = await Project.create({
      name,
      workspace: workspaceId
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ workspace: req.params.workspaceId });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createProject, getProjects };