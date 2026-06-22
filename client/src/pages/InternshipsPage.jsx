function InternshipsPage() {
return ( <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

```
  <div
    className="
    max-w-4xl
    w-full
    bg-slate-900/60
    backdrop-blur-xl
    border
    border-purple-500/20
    rounded-3xl
    p-10
    shadow-2xl
    "
  >

    {/* Badge */}

    <div
      className="
      inline-block
      px-4
      py-2
      rounded-full
      bg-purple-500/10
      border
      border-purple-500/30
      text-purple-300
      text-sm
      font-semibold
      mb-6
      "
    >
      🚀 Future Upgrade
    </div>

    {/* Heading */}

    <h1
      className="
      text-5xl
      font-extrabold
      text-white
      mb-4
      "
    >
      Resume vs Job Description
    </h1>

    {/* Subtitle */}

    <p
      className="
      text-slate-400
      text-lg
      leading-relaxed
      mb-10
      "
    >
      Upload your resume and paste any job description to instantly
      discover how well you match the role and what improvements can
      increase your chances of getting shortlisted.
    </p>

    {/* Features Grid */}

    <div
      className="
      grid
      md:grid-cols-2
      gap-5
      "
    >

      <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700">
        <h3 className="text-green-400 font-semibold text-lg">
          ✅ Match Percentage
        </h3>

        <p className="text-slate-400 mt-2">
          See how closely your resume matches a specific job description.
        </p>
      </div>

     

     

      <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700">
        <h3 className="text-green-400 font-semibold text-lg">
          ✅ Learning Recommendations
        </h3>

        <p className="text-slate-400 mt-2">
          Receive personalized suggestions to improve your profile.
        </p>
      </div>

      <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700 md:col-span-2">
        <h3 className="text-green-400 font-semibold text-lg">
          ✅ Interview Readiness Insights
        </h3>

        <p className="text-slate-400 mt-2">
          Understand your strengths, weaknesses, and preparation areas
          before applying.
        </p>
      </div>

    </div>

    {/* Footer CTA */}

    <div
      className="
      mt-10
      p-6
      rounded-2xl
      bg-gradient-to-r
      from-purple-500/10
      to-cyan-500/10
      border
      border-white/10
      "
    >

      <h2 className="text-white text-xl font-bold mb-2">
        Coming Soon 🚀
      </h2>

      <p className="text-slate-300">
        SkillMatch AI will help students compare their resume against
        real job descriptions and improve their chances of landing
        internships faster.
      </p>

    </div>

  </div>

</div>


);
}

export default InternshipsPage;
