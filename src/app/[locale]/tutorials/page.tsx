import { ParamsLocaleModel } from "@/types/paramsLocale";
import { TitleAndDescription } from "@/components/TitleAndDescription";
import { getTranslator } from "next-intl/server";
import { CardWithOverlay } from "@/components/CardWithImageOverlay";

interface TutorialsProps extends ParamsLocaleModel {}

export default async function Tutorials({ params }: TutorialsProps) {
  const t = await getTranslator(params.locale, "Tutorials");

  return (
    <main className="m-4">
      <TitleAndDescription title={t("title")} description={t("description")} />
      <div className="grid grid-cols-1 mt-10 gap-5 lg:grid-cols-3">
        <CardWithOverlay
          src="/images/jest.png"
          title={t("jest.title")}
          alt={t("jest.description")}
          description={t("jest.description")}
        />
      </div>
    </main>
  );
}
