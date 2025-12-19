import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProject() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = { 
      id: Date.now().toString(),
      title: title, 
      description: desc, 
      tasksCount: 0 
    };

    const savedProjects = JSON.parse(localStorage.getItem('local_projects') || '[]');
    savedProjects.push(newProject);
    localStorage.setItem('local_projects', JSON.stringify(savedProjects));

    navigate('/');
  };

  return (
    <div className="content-area">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>Project Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description:</label>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} required />

        <button type="submit" className="main-button">Save Project</button>
      </form>
    </div>
  );
}

export default AddProject;