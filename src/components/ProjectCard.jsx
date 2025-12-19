import './ProjectCard.css';

function ProjectCard({ title, description, tasksCount }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      <div className="tasks-info">
        <span>Tasks: {tasksCount}</span>
      </div>

      <button className="view-tasks-btn">View Tasks</button>
    </div>
  );
}

export default ProjectCard;