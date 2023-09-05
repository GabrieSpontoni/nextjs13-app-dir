export const metadata = {
  title: "Tutorials - Jest",
  description:
    "Tutorials with Jest, a delightful JavaScript Testing Framework with a focus on simplicity",
};

export default function TutorialsJestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
