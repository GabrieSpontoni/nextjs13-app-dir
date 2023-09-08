import { ParamsLocaleModel } from "@/types/paramsLocale";
import { TitleAndDescription } from "@/app/[locale]/tutorials/components/TitleAndDescription";
import { getTranslator } from "next-intl/server";
import { TutorialsCardsList } from "@/app/[locale]/tutorials/components/TutorialsCardsList";

interface TutorialsProps extends ParamsLocaleModel {}

export default async function Tutorials({ params }: TutorialsProps) {
  const t = await getTranslator(params.locale, "Tutorials");

  return (
    <main className="m-4">
      <TitleAndDescription title={t("title")} description={t("description")} />
      <TutorialsCardsList />
    </main>
  );
}
