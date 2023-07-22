import NextImage from "next/image";

export function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200 relative z-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <NextImage
            src="/images/gabriel-spontoni.jpg"
            alt="Picture of the author"
            className="max-w-sm rounded-lg shadow-2xl filter brightness-75"
            width={280}
            height={200}
          />
        </div>

        <div className="animate-flip-up">
          <h1 className="text-5xl font-bold">Gabriel Spontoni</h1>
          <p className="py-6">
            Desenvolvedor front-end, com habilidades em HTML, CSS e JavaScript.
            Sua paixão pela criação de interfaces atraentes e funcionais
            impulsiona-o a oferecer soluções criativas para projetos. Ele
            valoriza o aprendizado contínuo e trabalha bem em equipe,
            colaborando efetivamente com designers e desenvolvedores. Sua
            dedicação à excelência e a busca por aprimoramento fazem dele um
            profissional valorizado no cenário de desenvolvimento front-end.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
