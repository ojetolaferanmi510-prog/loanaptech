import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="home-nav">
      <NavLink className="home-logo" to="/">LoanAptech</NavLink>
      <nav className="home-links" aria-label="Main navigation">
        <NavLink end to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/loans" className={({ isActive }) => (isActive ? 'active' : '')}>
          Loans
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) => 'signup-link' + (isActive ? ' active' : '')}
        >
          Sign Up
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;