import './TaskCard.css';

function TaskCard({ title, description, status, onDelete, onMoveForward, onMoveBackward }) {
  return (
    <div className="task-card">
      <h4 className="task-card-title">{title}</h4>
      <p className="task-card-description">{description}</p>
      
      <div className="task-card-footer">
        <div className="move-controls">
          {status !== 'To Do' && (
            <button className="arrow-btn" onClick={onMoveBackward}>
              &larr;
            </button>
          )}
          {status !== 'Done' && (
            <button className="arrow-btn" onClick={onMoveForward}>
              &rarr;
            </button>
          )}
        </div>
        <button className="delete-task-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;