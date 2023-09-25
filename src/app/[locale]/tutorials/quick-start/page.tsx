import { ParamsLocaleModel } from "@/types/paramsLocale";
import { TitleAndDescription } from "@/app/[locale]/tutorials/components/TitleAndDescription";
import { getTranslator } from "next-intl/server";
import { NextConfig } from "./components/NextConfig";

interface TutorialsQuickStartProps extends ParamsLocaleModel {}

export default async function TutorialsQuickStart({
  params,
}: TutorialsQuickStartProps) {
  const t = await getTranslator(params.locale, "Tutorials");

  return (
    <main className="m-4">
      <TitleAndDescription
        title={t("nextJs.title")}
        description={t("nextJs.description")}
      />

      <div className="mt-8">
        <TitleAndDescription
          title={t("nextJs.quickStartTitle")}
          description={t("nextJs.quickStartDescription")}
          isSubTitle
        />
      </div>

      <div className="mt-8">
        <NextConfig />
      </div>
    </main>
  );
}
