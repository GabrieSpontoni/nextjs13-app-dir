import { ParamsLocaleModel } from "@/types/paramsLocale";
import { TitleAndDescription } from "@/app/[locale]/tutorials/components/TitleAndDescription";
import { getTranslator } from "next-intl/server";
import { SnippetGithubActions } from "./components/SnippetGithubActions";

interface TutorialsGithubActionsProps extends ParamsLocaleModel {}

export default async function TutorialsGithubActions({
  params,
}: TutorialsGithubActionsProps) {
  const t = await getTranslator(params.locale, "Tutorials");

  return (
    <main className="m-4">
      <TitleAndDescription
        title={t("githubActions.title")}
        description={t("githubActions.description")}
      />

      <div className="mt-8">
        <TitleAndDescription
          title={t("githubActions.githubActionsTitle")}
          description={t("githubActions.githubActionsDescription")}
          isSubTitle
        />
      </div>

      <div className="mt-8">
        <TitleAndDescription
          title={t("githubActions.setupTitle")}
          description={t("githubActions.setupDescription")}
          isSubTitle
        />
      </div>

      <div className="mt-8">
        <SnippetGithubActions />
      </div>

      <div className="mt-8">{t("githubActions.setupConclusion")}</div>
    </main>
  );
}
