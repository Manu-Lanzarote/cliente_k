import linea from "../landing/uploads_k/linea.png";

const BoutiquePage = () => {
  return (
    <>
      <div className="texto_boutique">
        <h4 className="cabecera">COMBINAISON DE CRÉATEUR</h4>
        <p className="cabecera">Combinaison de plongée sur-mesure</p>
        <img
          src={linea}
          alt="Linea decorativa"
          width="200px"
          className="linea"
        />
        <div className="parrafos">
          <div className="sub_parr">
            <h5>Néoprène couture</h5>
            <p>
              Kalypse est une maison de couture qui crée des vêtements pour
              l’océan : des vêtements pour plonger, des vêtements pour surfer,
              des vêtements pour nager. Chaque pièce est unique, conçue pour
              allier allure, performance et confort en action : Kalypse est une
              marque audacieuse, qui valorise le design et l’innovation. Elle
              utilise des technologies innovantes, dont un outil exclusif de
              conception 3D associé à des dispositifs de production modernes.
              Elle crée ainsi des secondes peaux aquatiques, des combinaisons
              exclusives, élégantes, fabriquées sur mesure et personnalisables à
              l’infini.
            </p>
          </div>
          <div className="sub_parr">
            <h5>Made in France</h5>
            <p>
              Maison d’excellence, Kalypse fabrique ses collections
              intégralement en France : chacune de ses pièces est issue de son
              atelier de Montpellier et naît d’une collaboration entre un comité
              d’experts – des professionnels de la plongée – et le bureau
              d’étude Kalypse. Le design est confié à Nathalie Szczerbinski,
              styliste. L’assemblage est réalisé par des professionnels au
              savoir-faire unique. Chaque étape de la production est maîtrisée,
              la qualité certifiée : les combinaisons Kalypse sont garanties 3
              ans.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoutiquePage;
