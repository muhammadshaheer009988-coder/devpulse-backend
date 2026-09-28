const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('./src/routes/auth.routes');
const workspaceRoutes = require('./src/routes/workspace.routes');
const projectRoutes = require('./src/routes/project.routes');
const taskRoutes = require('./src/routes/task.routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes Connections
app.use('/api/auth', authRoutes);
app.use('/api/workspaces', workspaceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: "DevPulse Backend bilkul sahi chal raha hai!",
    timestamp: new Date()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server chalu ho gaya hai: http://localhost:${PORT}`);
});