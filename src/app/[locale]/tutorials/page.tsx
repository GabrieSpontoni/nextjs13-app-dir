import { ParamsLocaleModel } from "@/types/paramsLocale";

interface TutorialsProps extends ParamsLocaleModel {}

export default async function Tutorials({}: TutorialsProps) {
  return (
    <main>
      <div className="hero min-h-screen relative z-0">
        Tutoriais em construção... / Tutorials under construction... 😁
      </div>
    </main>
  );
}
