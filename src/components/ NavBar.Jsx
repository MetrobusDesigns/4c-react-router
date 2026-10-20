import { Link } from "react-router";

const NavBar = () => {
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
            {/* For React Router, you can use the Link tag to navigate between the application's pages */}
            {/* React Router will swap out the current component with the one we want to navigate to instead of loading a new page entirely. */}
            <Link to="/">Home</Link>
            {/* <a href="/about">About (a tag)</a> */}
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/games">Games</Link>
            {/* for external links, you still use <a> */}
            {/* <a href="https://github.com/">GitHub</a> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;