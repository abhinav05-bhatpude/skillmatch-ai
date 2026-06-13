function SkillsList({ skills }) {
  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold mb-4">
        Detected Skills
      </h2>

      {skills.length === 0 ? (
       <div
className="
bg-yellow-50
border
border-yellow-200
rounded-lg
p-4
"
>

<p
className="
text-yellow-700
"
>

Upload a resume to
see detected skills.

</p>

</div>
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