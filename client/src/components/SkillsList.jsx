function SkillsList({ skills }) {
  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold mb-4">
        Detected Skills
      </h2>

      {skills.length === 0 ? (
        <p className="text-gray-500">
          No skills detected yet.
        </p>
      ) : (
        <div className="flex flex-wrap gap-3">

          {skills.map((skill) => (
            <span
              key={skill}
              className="
              bg-green-100
              text-green-700
              px-4
              py-2
              rounded-full
              font-medium
              "
            >
              {skill}
            </span>
          ))}

        </div>
      )}

    </div>
  );
}

export default SkillsList;