export const metadata = {
  title: "Tutorials - Quick Start",
  description:
    "Tutorials with Next.js, a delightful JavaScript Testing Framework with a focus on simplicity",
};

export default function QuickStartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
