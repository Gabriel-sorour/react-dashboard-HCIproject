import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ id, title, description, tasksCount, DeleteFn }) {
  const navigate = useNavigate();
  const handleViewTasks = () => {
    navigate(`/project/${id}`); 
  };

  return (
    <div className="project-card">

      <button
        className="delete-btn"
        onClick={() => DeleteFn(id)}
      >
        x
      </button>

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