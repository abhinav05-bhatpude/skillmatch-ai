import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl">SkillMatch AI</h1>
        <div className="flex gap-6">
          <Link to="/">Home</Link>

          <Link to="/resume">Resume</Link>

          <Link to="/internships">Internships</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
