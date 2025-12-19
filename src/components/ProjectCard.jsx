import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ id, title, description, tasksCount }) {
  const navigate = useNavigate();
  const handleViewTasks = () => {
    navigate(`/project/${id}`); 
  };

  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      
      <div className="tasks-info">
        <span>Tasks: {tasksCount}</span>
      </div>

      <button className="view-tasks-btn" onClick={handleViewTasks}>
        View Tasks
      </button>
    </div>
  );
}

export default ProjectCard;