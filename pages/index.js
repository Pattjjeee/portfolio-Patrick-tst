import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import Lely from '../public/plaatjes/lely.svg';
import { Navigatie } from '../components/navigatie';
import { Footer } from '../components/footer';
import { Projectkaart } from '../components/projectkaart';
import { Verhaalkaart } from '../components/verhaalkaart';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>
          Hi, ik ben Patrick. Vandaag geef ik een college bij De Haagse
          Hogeschool 🏫
        </h1>
        <section className={styles.cardContainer}>
          {/* <Projectkaart
            titel="Lely Nederland"
            beschrijving="Development"
            Plaatje={Lely}
            paginaUrl="/projecten/lely"
          />
          <Projectkaart
            titel="Lely Nederland"
            beschrijving="Development"
            Plaatje={Lely}
            paginaUrl="/projecten/lely"
          /> */}

          <Verhaalkaart>
            <h2>Donutttss</h2>
            <p>
              dit is een lange lompe tekst die hoort te gaan over de donut
              hieronder.
            </p>
            <img src="https://i.postimg.cc/c4cXBhg9/Donut-V2.png" />
            <figcaption> foto van een 3D donut van tekst</figcaption>
          </Verhaalkaart>
        </section>
      </main>

      <Footer />
    </>
  );
};
