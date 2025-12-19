import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [projects, setProjects] = useState(() => {
    return JSON.parse(localStorage.getItem('local_projects') || '[]');
  });

  useEffect(() => {
    if (projects.length === 0) {
      const apiUrl = 'https://6943e6d87dd335f4c35e8b56.mockapi.io/api/v1/projects';

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setProjects(data);
          localStorage.setItem('local_projects', JSON.stringify(data));
        })
        .catch((error) => {
          console.error('Error fetching projects:', error);
        });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDeleteProject = (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      // delete the project itself and update
      const updatedProjects = projects.filter(p => p.id !== projectId);
      setProjects(updatedProjects);
      localStorage.setItem('local_projects', JSON.stringify(updatedProjects));
      // Delete the tasks related to that project
      const allTasks = JSON.parse(localStorage.getItem('local_tasks') || '[]');
      const remainingTasks = allTasks.filter(t => t.projectId !== projectId);
      localStorage.setItem('local_tasks', JSON.stringify(remainingTasks));
    }
  };

  return (
    <div className="content-area">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>Projects Dashboard</h1>
        <Link to="/add-project">
          <button className="main-button">+ Add New Project</button>
        </Link>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            tasksCount={project.tasksCount}
            DeleteFn={handleDeleteProject}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;