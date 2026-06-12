const calculateMatch=(
    resumeSkills,
    requiredSkills
) => {
    const matched = requiredSkills.filter(skill=> resumeSkills.includes(skill));

    const score=Math.round((
        matched.length / requiredSkills.length
    ) * 100 );

    return {
        score,
        matched
    };
};

module.export = calculateMatch;