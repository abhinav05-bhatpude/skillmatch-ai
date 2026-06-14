import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="
      min-h-screen
      bg-black
      text-white
      relative
      overflow-hidden
      "
    >

      {/* Purple Glow */}

      <div
        className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-purple-600
        rounded-full
        blur-[180px]
        opacity-20
        "
      />

      {/* Cyan Glow */}

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-cyan-500
        rounded-full
        blur-[180px]
        opacity-20
        "
      />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        py-10
        "
      >

        {/* Navbar */}

        <div
          className="
          flex
          justify-between
          items-center
          mb-20
          "
        >

          <h1
            className="
            text-3xl
            font-extrabold
            "
          >
            SkillMatch
            <span
              className="
              text-cyan-400
              "
            >
              AI
            </span>
          </h1>

          <Link
            to="/resume"
            className="
            bg-white
            text-black
            px-6
            py-3
            rounded-xl
            font-semibold
            hover:scale-105
            transition-all
            "
          >
            Get Started
          </Link>

        </div>

        {/* Hero */}

        <div
          className="
          text-center
          mt-20
          "
        >

          <div
            className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-white/10
            border
            border-white/20
            text-sm
            mb-8
            "
          >
            🚀 AI Powered Resume Analysis
          </div>

          <h1
            className="
            text-6xl
            md:text-8xl
            font-extrabold
            leading-tight
            mb-8
            "
          >
            Turn Your Resume
            <br />

            Into Your

            <span
              className="
              block
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-cyan-400
              "
            >
              Next Internship
            </span>

          </h1>

          <p
            className="
            text-slate-300
            text-xl
            max-w-3xl
            mx-auto
            mb-12
            "
          >
            Upload your resume,
            detect your skills,
            identify missing technologies,
            receive AI-powered suggestions,
            and discover the best internship
            roles for your profile.
          </p>

          <div
            className="
            flex
            flex-col
            md:flex-row
            justify-center
            gap-5
            "
          >

            <Link
              to="/resume"
              className="
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-cyan-500
              font-semibold
              text-lg
              hover:scale-105
              transition-all
              shadow-lg
              "
            >
              Analyze Resume
            </Link>

            <button
              className="
              px-8
              py-4
              rounded-2xl
              border
              border-white/20
              bg-white/5
              font-semibold
              text-lg
              hover:bg-white/10
              transition-all
              "
            >
              Learn More
            </button>

          </div>

        </div>

        {/* Stats */}

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          mt-28
          "
        >

          <div
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
            backdrop-blur-md
            "
          >
            <h2
              className="
              text-4xl
              font-bold
              text-cyan-400
              "
            >
              AI
            </h2>

            <p
              className="
              mt-3
              text-slate-300
              "
            >
              Smart resume analysis
              using modern AI models.
            </p>
          </div>

          <div
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
            backdrop-blur-md
            "
          >
            <h2
              className="
              text-4xl
              font-bold
              text-purple-400
              "
            >
              Skills
            </h2>

            <p
              className="
              mt-3
              text-slate-300
              "
            >
              Detect technologies
              directly from uploaded resumes.
            </p>
          </div>

          <div
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
            backdrop-blur-md
            "
          >
            <h2
              className="
              text-4xl
              font-bold
              text-pink-400
              "
            >
              Careers
            </h2>

            <p
              className="
              mt-3
              text-slate-300
              "
            >
              Discover internship roles
              best suited for your profile.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;