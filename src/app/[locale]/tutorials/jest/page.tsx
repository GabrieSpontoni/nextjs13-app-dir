import { ParamsLocaleModel } from "@/types/paramsLocale";
import { TitleAndDescription } from "@/app/[locale]/tutorials/components/TitleAndDescription";
import { getTranslator } from "next-intl/server";
import { CardWithImageOverlay } from "@/components/CardWithImageOverlay";
import { SnippetAccess } from "./components/SnippetAccess";
import { SnippetCommingSoon } from "./components/SnippetCommingSoon";

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

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <CardWithImageOverlay
          title={"lorem ..."}
          description={"lorem ..."}
          src={""}
          alt={""}
        />
        <CardWithImageOverlay
          title={"lorem ..."}
          description={"lorem ..."}
          src={""}
          alt={""}
          href="#"
        />
      </div>

      <div className="mt-8">
        <TitleAndDescription
          title={t("jest.howToTestTitle")}
          description={t("jest.howToTestDescription")}
          isSubTitle
        />
      </div>

      <div className="mt-8 gap-8 grid grid-cols-1 lg:grid-cols-2">
        <SnippetCommingSoon />
        <SnippetAccess />
      </div>
    </main>
  );
}
