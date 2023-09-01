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
      <h1 className="text-4xl font-bold">{title}</h1>
      <div>{description}</div>
    </div>
  );
}
