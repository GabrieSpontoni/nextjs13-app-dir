interface TitleAndDescriptionProps {
  title: string;
  description: string;
  isSubTitle?: boolean;
}

export function TitleAndDescription({
  title,
  description,
  isSubTitle = false,
}: TitleAndDescriptionProps) {
  const titleClass = isSubTitle ? "text-2xl font-bold" : "text-4xl font-bold";

  return (
    <div>
      <h1 className={titleClass}>{title}</h1>
      <div>{description}</div>
    </div>
  );
}
