import TaskCard from '../components/TaskCard';
import { Link } from 'react-router-dom';
import './ProjectDetails.css';

function ProjectDetails() {
  return (
    <div className="content-area">
      <div className="project-header">
        <h2>Project: Portfolio Website</h2>
        <Link to="/add-task">
          <button className="main-button">+ Add New Task</button>
        </Link>
      </div>

      <div className="tasks-board">
        {/* To Do */}
        <div className="task-column">
          <h3 className="column-title">To Do</h3>
          <TaskCard title="Fix Navbar CSS" description="Make it responsive for PC" status="To Do" />
        </div>

        {/* In Progress */}
        <div className="task-column">
          <h3 className="column-title">In Progress</h3>
          <TaskCard title="React Router Setup" description="Link all pages together" status="In Progress" />
        </div>

        {/* Done */}
        <div className="task-column">
          <h3 className="column-title">Done</h3>
          <TaskCard title="Project Setup" description="Initialize Vite project" status="Done" />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;