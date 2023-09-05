import { ParamsLocaleModel } from "@/types/paramsLocale";
import { TitleAndDescription } from "@/components/TitleAndDescription";
import { getTranslator } from "next-intl/server";

interface TutorialsJestProps extends ParamsLocaleModel {}

export default async function TutorialsJest({ params }: TutorialsJestProps) {
  const t = await getTranslator(params.locale, "Tutorials");

  return (
    <main className="m-4">
      <TitleAndDescription
        title={t("jest.title")}
        description={t("jest.description")}
      />

      <div className="mt-8">
        <TitleAndDescription
          title={t("jest.unitTitle")}
          description={t("jest.unitDescription")}
          isSubTitle
        />
      </div>

      <div className="mt-8">
        <TitleAndDescription
          title={t("jest.whatToTestTitle")}
          description={t("jest.whatToTestDescription")}
          isSubTitle
        />
      </div>
    </main>
  );
}
