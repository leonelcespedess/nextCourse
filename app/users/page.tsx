import prisma from '@/lib/prisma';
import CustomButton from '@/components/CustomButton';
import styles from '../landing.module.css';

export default async function Users() {
  const users = await prisma.user.findMany();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.squareTitle}>
          <h1 className={styles.bigTitle}>Usuarios</h1>
        </div>
        <ol className={`${styles.buttonGroup} mt-2`}>
          {users.map((user, idx) => (
            <li key={user.id} className="w-full flex items-center">
              <span className="mr-3 min-w-[2em] text-black font-bold text-lg text-left">{idx + 1}.</span>
              <CustomButton
                href={`/users/${user.id}`}
                colorClass="bg-blue-500 text-white hover:bg-blue-600 border border-blue-600 w-full"
              >
                <span className="font-semibold text-left w-full block">{user.name}</span>
              </CustomButton>
            </li>
          ))}
          <li className="w-full flex items-center">
            <span className="mr-3 min-w-[2em]" />
            <CustomButton
              href="/"
              colorClass="bg-red-700 text-white hover:bg-red-800 border border-red-800 w-full"
            >
              <span className="font-semibold text-left w-full block">Volver al inicio</span>
            </CustomButton>
          </li>
          <li className="w-full flex items-center">
            <span className="mr-3 min-w-[2em]" />
            <CustomButton
              href="/users/new"
              colorClass="bg-green-600 text-white hover:bg-green-700 border border-green-700 w-full"
            >
              <span className="font-semibold text-left w-full block">Crear usuario</span>
            </CustomButton>
          </li>
        </ol>
      </div>
    </div>
  );
}