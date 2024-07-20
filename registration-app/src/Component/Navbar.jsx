import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a><img src="" alt="Logo" /></a>  
      </div>
      <ul className="navbar-links">
        <li><Link to="">Add Employee</Link></li>
        <li><Link to="">Update Profile</Link></li>
        <li><Link to="/">Log Out</Link></li>
      </ul>
    </nav>
    
  );
};

export default Navbar;