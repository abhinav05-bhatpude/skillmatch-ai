function ATSScoreCard({ score }) {

  let scoreColor =
  "text-red-400";

  if(score >= 70){
    scoreColor =
    "text-green-400";
  }
  else if(score >= 40){
    scoreColor =
    "text-yellow-400";
  }

  return (

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
        text-2xl
        font-bold
        text-white
        mb-4
        "
      >
        ATS Score
      </h2>

      <div
        className={`
        text-6xl
        font-extrabold
        ${scoreColor}
        `}
      >
        {score}
      </div>

      <p
        className="
        text-slate-300
        mt-3
        "
      >
        Resume ATS Rating
      </p>

    </div>

  );
}

export default ATSScoreCard;