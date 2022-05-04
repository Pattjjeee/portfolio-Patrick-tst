import { Footer } from '../../components/footer';
import { Navigatie } from '../../components/navigatie';
import styles from '../../styles/containers.module.css';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>HELLLOOO</h1>
        <p>Ik kan dit gewoon.</p>
        <Footer />
      </main>
    </>
  );
};
