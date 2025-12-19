import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ProjectDetails from './pages/ProjectDetails.jsx';
import AddTask from './pages/AddTask';
import AddProject from './pages/AddProject';
import './styles/general.css'
import { useEffect, useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  
  return (
    <Router>
      <div className="app-container">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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