import { ParamsLocaleModel } from "@/types/paramsLocale";
import { TitleAndDescription } from "@/app/[locale]/tutorials/components/TitleAndDescription";
import { getTranslator } from "next-intl/server";

interface TutorialsJestProps extends ParamsLocaleModel {}

export default async function TutorialsJest({ params }: TutorialsJestProps) {
  const t = await getTranslator(params.locale, "Tutorials");

  return (
    <main className="m-4">
      <TitleAndDescription
        title={t("githubActions.title")}
        description={t("githubActions.description")}
      />
    </main>
  );
}
