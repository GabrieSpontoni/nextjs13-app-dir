import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./Providers";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { edu_sa_beginner, inter, roboto_mono } from "./fonts";

export const metadata: Metadata = {
  title: "Gabriel Spontoni",
  description: "Gabriel Spontoni's personal website",
};

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../i18n/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${roboto_mono.variable} ${edu_sa_beginner.variable}`}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
