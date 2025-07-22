import prisma from '@/lib/prisma';
import styles from '../../landing.module.css';

interface Props {
  params: { id: string };
}

export default async function UserInfo({ params }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
    include: { posts: true },
  });

  if (!user) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.bigTitle + " text-black"}>Usuario no encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.squareTitle}>
          <h1 className={styles.bigTitle + " text-black"}>Información del usuario</h1>
        </div>
        <div className="mb-6">
          <p className="text-lg text-black"><strong>Nombre:</strong> {user.name}</p>
          <p className="text-lg text-black"><strong>Email:</strong> {user.email}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-black mb-2">Posts del usuario</h2>
          {user.posts.length === 0 ? (
            <p className="text-black">Este usuario no tiene posts.</p>
          ) : (
            <ul className="list-disc pl-5">
              {user.posts.map((post) => (
                <li key={post.id} className="text-black mb-1">
                  <span className="font-semibold">{post.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}