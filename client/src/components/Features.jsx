import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-8">

      <FeatureCard
        title="Resume Analysis"
        description="Upload resume and extract skills."
      />

      <FeatureCard
        title="Skill Matching"
        description="Match your profile with internships."
      />

      <FeatureCard
        title="Career Growth"
        description="Identify missing skills."
      />

    </div>
  );
}

export default Features;