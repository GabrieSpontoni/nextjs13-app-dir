import React from "react";
import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { Providers } from "@/app/[locale]/Providers";
import messages from "@/i18n/pt.json";

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <NextIntlClientProvider locale="pt" messages={messages}>
      <Providers>{ui}</Providers>
    </NextIntlClientProvider>
  );
};

export default renderWithProviders;
