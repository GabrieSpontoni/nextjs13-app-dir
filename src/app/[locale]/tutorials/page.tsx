import { ParamsLocaleModel } from "@/types/paramsLocale";
import { TitleAndDescription } from "@/components/TitleAndDescription";
import { getTranslator } from "next-intl/server";

interface TutorialsProps extends ParamsLocaleModel {}

export default async function Tutorials({ params }: TutorialsProps) {
  const t = await getTranslator(params.locale, "Tutorials");
  return (
    <main className="px-8 pt-4">
      <TitleAndDescription title={t("title")} description={t("description")} />
    </main>
  );
}
