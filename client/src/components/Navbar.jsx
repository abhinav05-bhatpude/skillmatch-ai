import { Link } from "react-router-dom";

function Navbar() {
return ( <nav
   className="
   sticky
   top-0
   z-50
   backdrop-blur-xl
   bg-slate-900/80
   border-b
   border-white/10
   "
 > <div
     className="
     max-w-7xl
     mx-auto
     px-6
     py-4
     flex
     justify-between
     items-center
     "
   >

```
    {/* Logo */}

    <Link to="/">
      <h1
        className="
        text-2xl
        font-extrabold
        text-white
        "
      >
        

        <span
          className="
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-purple-400
          via-pink-400
          to-cyan-400
          "
        >
    
        </span>
      </h1>
    </Link>

    {/* Nav Links */}

    <div
      className="
      hidden
      md:flex
      items-center
      gap-8
      text-slate-300
      "
    >
      <Link
        to="/"
        className="
        hover:text-white
        transition-all
        duration-300
        "
      >
        Home
      </Link>

      <Link
        to="/resume"
        className="
        hover:text-white
        transition-all
        duration-300
        "
      >
        Resume Analysis
      </Link>

      <Link
        to="/internships"
        className="
        hover:text-white
        transition-all
        duration-300
        "
      >
        Future Improvements
      </Link>
    </div>

    {/* CTA Button */}

    <Link
      to="/resume"
      className="
      bg-gradient-to-r
      from-purple-500
      to-cyan-500
      px-5
      py-2.5
      rounded-xl
      font-semibold
      hover:scale-105
      transition-all
      duration-300
      shadow-lg
      text-white
      "
    >
      Analyze Resume
    </Link>

  </div>
</nav>


);
}

export default Navbar;
