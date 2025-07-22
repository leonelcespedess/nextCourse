// app/not-found.tsx
import Link from 'next/link';
import CustomButton from "@/components/CustomButton";
import styles from "./landing.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.squareTitle}>
          <h1 className={styles.bigTitle + " text-black"}>404 - Página No Encontrada</h1>
        </div>
        <p className="text-black text-center mb-6">
          Lo sentimos, no pudimos encontrar la página que buscas.
        </p>
        <CustomButton href="/" colorClass="bg-red-700 text-white hover:bg-red-800 border border-red-800 w-full">
          Volver al inicio
        </CustomButton>
      </div>
    </div>
  );
}