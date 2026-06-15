function SuggestionsCard({
  suggestions
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
        AI Suggestions
      </h2>

      <div
        className="
        space-y-4
        "
      >

        {suggestions?.map(
          (item,index) => (

          <div
            key={index}
            className="
            flex
            items-start
            gap-3
            text-slate-300
            "
          >

            <span>
              ✅
            </span>

            <span>
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default SuggestionsCard;