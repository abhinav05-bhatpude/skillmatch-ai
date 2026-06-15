function MissingSkills({
  skills
}) {

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
        mb-6
        "
      >
        Missing Skills
      </h2>

      <div
        className="
        flex
        flex-wrap
        gap-3
        "
      >

        {skills?.map(
          (skill) => (

          <span
            key={skill}
            className="
            bg-red-500/20
            text-red-300
            px-4
            py-2
            rounded-full
            "
          >
            {skill}
          </span>

        ))}

      </div>

    </div>

  );

}

export default MissingSkills;