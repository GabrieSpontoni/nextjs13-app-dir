export const metadata = {
  title: "Tutorials - i18n",
  description:
    "i18n with Next.js, a delightful JavaScript Testing Framework with a focus on simplicity",
};

export default function I18nLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
