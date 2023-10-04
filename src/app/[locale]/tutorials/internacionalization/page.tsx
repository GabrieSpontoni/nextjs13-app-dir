import { ParamsLocaleModel } from "@/types/paramsLocale";
import { TitleAndDescription } from "@/app/[locale]/tutorials/components/TitleAndDescription";
import { getTranslator } from "next-intl/server";

interface i18nProps extends ParamsLocaleModel {}

export default async function i18n({ params }: i18nProps) {
  const t = await getTranslator(params.locale, "Tutorials");

  return (
    <main className="m-4">
      <TitleAndDescription
        title={t("i18n.title")}
        description={t("i18n.description")}
      />

      <div className="mt-8">
        <TitleAndDescription
          title={t("i18n.i18nTitle")}
          description={t("i18n.i18nDescription")}
          isSubTitle
        />
      </div>
    </main>
  );
}
