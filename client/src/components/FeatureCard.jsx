function FeatureCard({
    title,
    description,
}) {
    return(
        <div className="p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-bold">
            {title}
            </h2>

            <p className="mt-2">
{description}
            </p>

        </div>
    );
}

export default FeatureCard;