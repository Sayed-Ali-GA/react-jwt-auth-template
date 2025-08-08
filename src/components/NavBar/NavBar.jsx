import { Link } from 'react-router-dom'

const NavBar = ({ user, handleSignOut }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: '#1da1f2', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Hootr 🐦
        </Link>
      </div>
      <ul className="nav-links">
        {user ? (
          <>
            <li className="welcome">Welcome, {user.username}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hoots">Hoots</Link></li>
            <li><Link to="/hoots/new">New Hoot</Link></li>
            <li><button className="btn" onClick={handleSignOut}>Sign Out</button></li>
          </>
        ) : (
          <>
            <li><Link to="/sign-up">Sign Up</Link></li>
            <li><Link to="/sign-in">Sign In</Link></li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
