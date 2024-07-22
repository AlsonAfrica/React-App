import './Navbar.css'
import { Link } from 'react-router-dom';
import img1 from '../Images/SportsLogo.png'
const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a><img src={img1} alt="Logo" className="logo-nav" /></a>  
      </div>
      <ul className="navbar-links">
      <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Form">Add Employee</Link></li>
        {/* <li><Link to="">Update Profile</Link></li> */}
        <li><Link to="/">Log Out</Link></li>
      </ul>
    </nav>
    
  );
};

export default Navbar;