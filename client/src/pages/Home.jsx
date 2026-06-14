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
          mb-16
          "
        >

          <h1
            className="
            text-2xl
            font-extrabold
            "
          >
            SkillMatch
            <span className="text-cyan-400">
              AI
            </span>
          </h1>

          <Link
            to="/resume"
            className="
            bg-white
            text-black
            px-5
            py-2.5
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
          mt-16
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
            mb-6
            "
          >
            🚀 AI Powered Resume Analysis
          </div>

          <h1
            className="
            text-4xl
            md:text-6xl
            font-extrabold
            leading-tight
            mb-6
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
            text-base
            md:text-lg
            max-w-2xl
            mx-auto
            mb-10
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
            gap-4
            "
          >

            <Link
              to="/resume"
              className="
              px-7
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-cyan-500
              font-semibold
              hover:scale-105
              transition-all
              shadow-lg
              "
            >
              Analyze Resume
            </Link>

            <button
              className="
              px-7
              py-3
              rounded-2xl
              border
              border-white/20
              bg-white/5
              font-semibold
              hover:bg-white/10
              transition-all
              "
            >
              Learn More
            </button>

          </div>

        </div>

        {/* Stats Section */}

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          mt-24
          "
        >

          <div
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            backdrop-blur-md
            "
          >
            <h2
              className="
              text-3xl
              font-bold
              text-cyan-400
              "
            >
              AI
            </h2>

            <p className="mt-3 text-slate-300">
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
            p-6
            backdrop-blur-md
            "
          >
            <h2
              className="
              text-3xl
              font-bold
              text-purple-400
              "
            >
              Skills
            </h2>

            <p className="mt-3 text-slate-300">
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
            p-6
            backdrop-blur-md
            "
          >
            <h2
              className="
              text-3xl
              font-bold
              text-pink-400
              "
            >
              Careers
            </h2>

            <p className="mt-3 text-slate-300">
              Discover internship roles
              best suited for your profile.
            </p>
          </div>

        </div>

        {/* Feature Cards */}

        <div className="mt-32">

          <h2
            className="
            text-4xl
            font-bold
            text-center
            mb-12
            "
          >
            Why Choose SkillMatch AI?
          </h2>

          <div
            className="
            grid
            md:grid-cols-3
            gap-8
            "
          >

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">
                📄
              </div>

              <h3 className="text-xl font-bold mb-3">
                Resume Analysis
              </h3>

              <p className="text-slate-300">
                Upload your resume and
                instantly detect skills.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">
                🤖
              </div>

              <h3 className="text-xl font-bold mb-3">
                AI Suggestions
              </h3>

              <p className="text-slate-300">
                Discover missing skills and
                improve your profile.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">
                🚀
              </div>

              <h3 className="text-xl font-bold mb-3">
                Career Matching
              </h3>

              <p className="text-slate-300">
                Get internship recommendations
                based on your profile.
              </p>
            </div>

          </div>

        </div>

        {/* How It Works */}

        <div className="mt-32">

          <h2
            className="
            text-4xl
            font-bold
            text-center
            mb-16
            "
          >
            How It Works
          </h2>

          <div
            className="
            grid
            md:grid-cols-3
            gap-10
            "
          >

            <div className="text-center">

              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl mx-auto mb-6">
                1
              </div>

              <h3 className="text-xl font-bold mb-3">
                Upload Resume
              </h3>

              <p className="text-slate-300">
                Upload your PDF resume securely.
              </p>

            </div>

            <div className="text-center">

              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-3xl mx-auto mb-6">
                2
              </div>

              <h3 className="text-xl font-bold mb-3">
                Analyze Skills
              </h3>

              <p className="text-slate-300">
                AI extracts technologies
                from your resume.
              </p>

            </div>

            <div className="text-center">

              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-3xl mx-auto mb-6">
                3
              </div>

              <h3 className="text-xl font-bold mb-3">
                Get Recommendations
              </h3>

              <p className="text-slate-300">
                Receive career suggestions
                and internship matches.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;