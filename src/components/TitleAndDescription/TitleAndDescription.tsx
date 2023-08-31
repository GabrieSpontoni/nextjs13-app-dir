interface TitleAndDescriptionProps {
  title: string;
  description: string;
}

export function TitleAndDescription({
  title,
  description,
}: TitleAndDescriptionProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      <div className="hero relative z-0">{description}</div>
    </div>
  );
}
