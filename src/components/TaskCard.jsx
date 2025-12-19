import './TaskCard.css';

function TaskCard({ title, description, status, onDelete }) {
  return (
    <div className="task-card">
      <h4 className="task-card-title">{title}</h4>
      <p className="task-card-description">{description}</p>
      <div className="task-card-footer">
        <span className="task-status-tag">{status}</span>
        <button className="delete-task-btn" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;