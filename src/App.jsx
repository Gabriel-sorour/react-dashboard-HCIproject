import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ProjectDetails from './pages/ProjectDetails.jsx';
import AddTask from './pages/AddTask';
import AddProject from './pages/AddProject';

function App() {

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/add-project" element={<AddProject />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;