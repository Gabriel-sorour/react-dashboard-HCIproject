import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function AddTask() {
  const location = useLocation();
  const navigate = useNavigate();

  const preSelectedId = location.state?.preSelectedId || '';

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  
  const [projectId, setProjectId] = useState(preSelectedId);
  
  const [status, setStatus] = useState('To Do');
  
  const [projects] = useState(() => {
    return JSON.parse(localStorage.getItem('local_projects') || '[]');
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { 
      id: Date.now().toString(), 
      title, 
      description: desc, 
      projectId, 
      status 
    };

    const savedTasks = JSON.parse(localStorage.getItem('local_tasks') || '[]');
    savedTasks.push(newTask);
    localStorage.setItem('local_tasks', JSON.stringify(savedTasks));

    const updatedProjects = projects.map(p => {
      if (p.id === projectId) {
        return { ...p, tasksCount: (p.tasksCount || 0) + 1 };
      }
      return p;
    });
    localStorage.setItem('local_projects', JSON.stringify(updatedProjects));

    navigate(`/project/${projectId}`);
  };

  return (
    <div className="content-area">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>Task Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description:</label>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} required />

        <label>Select Project:</label>
        <select value={projectId} onChange={(e) => setProjectId(e.target.value)} required>
          <option value="">-- Choose Project --</option>
          {projects.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
        </select>

        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <button type="submit" className="main-button">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;