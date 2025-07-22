import CustomButton from "@/components/CustomButton";
import styles from "../landing.module.css";
import prisma from "@/lib/prisma";

export default async function Posts() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.squareTitle}>
          <h1 className={styles.bigTitle + " text-black"}>Posts</h1>
        </div>
        <ul className={`${styles.buttonGroup} mt-2`}>
          {posts.map((post, idx) => (
            <li key={post.id} className="w-full flex items-center">
              <span className="mr-3 min-w-[2em] text-black font-bold text-lg text-left">
                {idx + 1}.
              </span>
              <CustomButton
                href={`/posts/${post.id}`}
                colorClass="bg-blue-500 text-white hover:bg-blue-600 border border-blue-600 w-full"
              >
                <div className="flex flex-col w-full text-left">
                  <span className="font-semibold w-full block">{post.title}</span>
                  <span className="text-sm text-blue-100/90 block">by {post.author?.name ?? "Sin autor"}</span>
                </div>
              </CustomButton>
            </li>
          ))}
          <li className="w-full flex items-center">
            <span className="mr-3 min-w-[2em]" />
            <CustomButton
              href="/posts/new"
              colorClass="bg-green-600 text-white hover:bg-green-700 border border-green-700 w-full"
            >
              <span className="font-semibold text-left w-full block">
                Agregar Post
              </span>
            </CustomButton>
          </li>
          <li className="w-full flex items-center">
            <span className="mr-3 min-w-[2em]" />
            <CustomButton
              href="/"
              colorClass="bg-red-700 text-white hover:bg-red-800 border border-red-800 w-full"
            >
              <span className="font-semibold text-left w-full block">
                Volver al inicio
              </span>
            </CustomButton>
          </li>
        </ul>
      </div>
    </div>
  );
}