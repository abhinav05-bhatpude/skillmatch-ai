function RecommendedRoles({
  roles
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
        Recommended Roles
      </h2>

      <div
        className="
        grid
        gap-4
        "
      >

        {roles?.map(
          (role) => (

          <div
            key={role}
            className="
            bg-cyan-500/10
            border
            border-cyan-400/20
            rounded-xl
            p-4
            text-cyan-300
            font-medium
            "
          >
            🚀 {role}
          </div>

        ))}

      </div>

    </div>

  );

}

export default RecommendedRoles;