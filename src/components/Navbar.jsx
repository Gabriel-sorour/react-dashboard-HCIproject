import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isDarkMode, setIsDarkMode }) {

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <nav className="navbar">

      <ul className="navbar-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/add-task">Add Task</Link>
        </li>
        <li>
          <Link to="/add-project">Add Project</Link>
        </li>
      </ul>

      <div className="navbar-actions">
        <button
          className="dark-mode-button"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode ' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;