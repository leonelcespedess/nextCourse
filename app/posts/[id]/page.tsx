
import styles from "../../landing.module.css";
import CustomButton from "@/components/CustomButton";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) },
    include: {
      author: true,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.squareTitle}>
          <h1 className={styles.bigTitle + " text-black"}>{post.title}</h1>
        </div>
        <div className="mb-6">
          <p className="text-gray-600 text-center text-lg mb-2">by: {post.author.name}</p>
          <div className="prose prose-gray text-black mt-4">
            {post.content ? (
              <>contenido: {post.content}</>
            ) : (
              "No content available."
            )}
          </div>
        </div>
        <div className="mt-6 w-full">
          <CustomButton href="/posts" colorClass="bg-gray-300 text-black hover:bg-gray-400 w-full">
            Volver a posts
          </CustomButton>
        </div>
      </div>
    </div>
  );
}