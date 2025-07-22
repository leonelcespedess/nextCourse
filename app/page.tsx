

import CustomButton from "@/components/CustomButton";
import styles from "./landing.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.squareTitle}>
          <h1 className={styles.bigTitle}>Bienvenido a NextCourse</h1>
        </div>
        <div className={styles.buttonGroup}>
          <CustomButton href="/users">Ir a Usuarios</CustomButton>
          <CustomButton href="/posts" colorClass="bg-green-600 hover:bg-green-700">Ir a Posts</CustomButton>
        </div>
      </div>
    </div>
  );
}
