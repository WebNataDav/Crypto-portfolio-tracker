import AppLayout from '@/components/layout';
import styles from "./styles.module.scss";

const Home = () => {
  return (
      <AppLayout>
        <main className={styles.wrapper}>
        <p>Init project</p>
      </main>
      </AppLayout>
  );
};

export default Home;
