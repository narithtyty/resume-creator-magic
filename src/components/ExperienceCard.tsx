interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const ExperienceCard = ({
  title,
  company,
  period,
  description,
}: ExperienceCardProps) => {
  return (
    <div className="mb-6 animate-fade-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <div>
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <p className="text-lg text-gray-600">{company}</p>
        </div>
        <p className="text-accent font-medium">{period}</p>
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;