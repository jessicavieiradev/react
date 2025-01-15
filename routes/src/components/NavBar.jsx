import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <nav className="space-x-3">
      <Link to="/">Home</Link>
      <Link to="contact">Contact</Link>
    </nav>
  );
}

export default NavBar
