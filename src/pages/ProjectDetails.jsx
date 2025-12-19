import { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetails.css';

function ProjectDetails() {
  const { id } = useParams();

  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('local_tasks') || '[]');
  });

  const savedProjects = JSON.parse(localStorage.getItem('local_projects') || '[]');
  const currentProject = savedProjects.find(p => p.id === id);
  const projectName = currentProject ? currentProject.title : "Loading...";
  const filteredTasks = tasks.filter(task => task.projectId === id);

  useEffect(() => {
    if (tasks.length === 0) {
      fetch('https://6943e6d87dd335f4c35e8b56.mockapi.io/api/v1/tasks')
        .then(res => res.json())
        .then(allTasks => {
          setTasks(allTasks);
          localStorage.setItem('local_tasks', JSON.stringify(allTasks));
        });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('local_tasks', JSON.stringify(updatedTasks));
    const updatedProjects = savedProjects.map(project => {
      if (project.id === id) {
        return { ...project, tasksCount: Math.max(0, (project.tasksCount || 0) - 1) };
      }
      return project;
    });
    localStorage.setItem('local_projects', JSON.stringify(updatedProjects));
  };

  return (
    <div className="content-area">
      <div className="project-header">
        <h2>Project: {projectName}</h2>
        <Link to="/add-task">
          <button className="main-button">+ Add New Task</button>
        </Link>
      </div>

      <div className="tasks-board">
        {['To Do', 'In Progress', 'Done'].map(status => (
          <div className="task-column" key={status}>
            <h3 className="column-title">{status}</h3>
            {filteredTasks.filter(t => t.status === status).map(task => (
              <TaskCard 
                key={task.id} 
                title={task.title} 
                description={task.description} 
                status={task.status} 
                onDelete={() => deleteTask(task.id)} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;