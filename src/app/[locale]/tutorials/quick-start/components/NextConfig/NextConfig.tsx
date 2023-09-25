"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export function NextConfig() {
  const t = useTranslations("Tutorials");
  return (
    <div>
      <div>
        1. {t("nextJs.step1Title")}
        <Link
          className="link link-primary"
          href="https://github.com/GabrieSpontoni/nextjs13-app-dir"
          target="_blank"
        >
          https://github.com/GabrieSpontoni/nextjs13-app-dir
        </Link>
      </div>
      <div className="mockup-code mt-4">
        <pre data-prefix="$">
          <code>yarn</code>
        </pre>
      </div>

      <div className="mt-8">2. {t("nextJs.step2Title")}</div>
      <div className="mockup-code mt-4">
        <pre data-prefix="$">
          <code>yarn dev</code>
        </pre>
      </div>
    </div>
  );
}
