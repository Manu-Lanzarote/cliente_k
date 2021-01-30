import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import LOGO_FINAL_KALYPSE_W from "./uploads_k/LOGO-FINAL-KALYPSE-W.png";
import image_collage1 from "./uploads_k/image-collage1.jpg";
import image_collage0 from "./uploads_k/image-collage0.jpg";
import image_collage2 from "./uploads_k/image-collage2.jpg";
import image_collage3 from "./uploads_k/image-collage3.jpg";

const Histoire = () => {
  return (
    <div className="main_hist">
      <div className="hero_h">
        <img src={LOGO_FINAL_KALYPSE_W} alt="Kalypse" className="img_hero" />
      </div>
      <Accordion defaultActiveKey="0" className="acordeon">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <p className="histoire">1 – LA POSSIBILITÉ D’UN STYLE</p>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="card_body container">
              <div className="row">
                <div className="col-lg-8">
                  <p>
                    OBJETS D’ART, OBJETS REMARQUABLES, LES COMBINAISONS KALYPSE
                    SUBLIMENT TOUS LES CORPS, FÉMININS OU MASCULINS. NATHALIE
                    SZCZERBINSKI, LA STYLISTE, IMAGINE CHAQUE MODÈLE COMME UNE
                    PIÈCE UNIQUE AUX PROPORTIONS, LIGNES, DÉCOUPES RÉVÉLATRICES
                    D’UN CARACTÈRE PARTICULIER, D’UNE PERSONNALITÉ.
                    <br />
                    <br />
                    Chaque combinaison répond à une exigence d’élégance jamais
                    vue jusqu’à présent : Kalypse est une maison de couture qui
                    allie performance, allure et créativité.
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={image_collage1} alt="" className="img_hist" />
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <p className="histoire">2 – L’AUDACE D’UNE MODÉLISATION 3D</p>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="card_body container">
              <div className="row">
                <div className="col-lg-8">
                  <p>
                    KALYPSE DÉVELOPPE UN SAVOIR-FAIRE RÉVOLUTIONNAIRE. SYSTÈME
                    EXCLUSIF, SON PROCESSUS DE MODÉLISATION PERMET, À PARTIR DE
                    CHAQUE CROQUIS DESSINÉ PAR LA STYLISTE, D’OBTENIR UN PATRON,
                    LEQUEL DONNE ENSUITE NAISSANCE À UNE PIÈCE UNIQUE. CE
                    LOGICIEL* – C’EST L’EXCEPTION KALYPSE, UTILISE DES SCANS 3D
                    POUR METTRE EN VOLUME LE DESSIN, PUIS GÉNÉRER LES
                    EMPIÈCEMENTS 2D AU COURS DE LA MISE À PLAT.
                    <br />
                    <br />
                    La silhouette néoprène finale est ainsi impeccable : la
                    morphologie et ses formes spécifiques sont respectées, le
                    fit & feel est incomparable, la facilité d’habillage inouïe
                    et le confort ventilatoire exceptionnel en plongée.
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={image_collage2} alt="" className="img_hist" />
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              <p className="histoire">3 – LA CULTURE DU SUR-MESURE</p>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="card_body container">
              <div className="row">
                <div className="col-lg-8">
                  <p>
                    LES COMBINAISONS DE PLONGÉE KALYPSE SONT FABRIQUÉES À
                    L’UNITÉ DANS LES ATELIERS DE MONTPELLIER. ELLES SONT
                    NUMÉROTÉES. CHAQUE MODÈLE EST UNIQUE : DE LA CRÉATION DU
                    CROQUIS À L’ASSEMBLAGE DES PIÈCES, ET JUSQU’À LA BRODERIE DU
                    NUMÉRO, LA FABRICATION EST RÉALISÉE À LA MAIN ET LA
                    TRAÇABILITÉ DES MATÉRIAUX EST ASSURÉE.
                    <br />
                    <br />
                    La maison Kalypse noue des liens sincères avec ses clientes
                    et ses clients : après avoir choisi un modèle, chacun
                    personnalise ainsi sa commande dans les moindres détails,
                    jusqu’à choisir les couleurs de néoprène parmi une gamme de
                    haute qualité.
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={image_collage3} alt="" className="img_hist" />
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              <p className="histoire">4 – L’ART DE LA DÉCOUPE</p>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body className="card_body container">
              <div className="row">
                <div className="col-lg-8">
                  <p>
                    UNE COMBINAISON HAUTE COUTURE EST LE RÉSULTAT D’UNE
                    SUCCESSION D’OPÉRATIONS MANUELLES. LE COLLAGE ET LA COUTURE
                    SONT LES DEUX ÉTAPES PRIMORDIALES DANS LA FABRICATION DE
                    CHAQUE MODÈLE. L’UTILISATION DU SYSTÈME APC (AIR PRESS
                    CONTROL) OPTIMISE LE POUVOIR DE LA COLLE EN ÉLIMINANT LES
                    MICRO-BULLES D’AIR.
                    <br />
                    <br />
                    La qualité de la couture en surjet et l’assemblage réalisé à
                    la main dans les ateliers de Montpellier témoignent du
                    savoir-faire, de l’expérience et de la virtuosité de la
                    maison Kalypse.
                  </p>
                </div>
                <div className="col-lg-4">
                  <img src={image_collage0} alt="" className="img_hist" />
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Histoire;
