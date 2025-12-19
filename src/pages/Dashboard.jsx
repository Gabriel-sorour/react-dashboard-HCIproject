import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="content-area">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>Projects Dashboard</h1>
        <Link to="/add-project">
          <button className="main-button">+ Add New Project</button>
        </Link>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ProjectCard 
          title="Portfolio Website" 
          description="A personal website to showcase skills." 
          tasksCount={3} 
        />
        <ProjectCard 
          title="E-Commerce App" 
          description="Online store with payment gateway." 
          tasksCount={5} 
        />
      </div>
    </div>
  );
}

export default Dashboard;