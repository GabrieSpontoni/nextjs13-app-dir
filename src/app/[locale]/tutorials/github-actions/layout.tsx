export const metadata = {
  title: "Tutorials - GitHub Actions",
  description:
    "Tutorials with GitHub Actions, a powerful tool that allows you to automate tasks within your software development life cycle.",
};

export default function TutorialsJestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
