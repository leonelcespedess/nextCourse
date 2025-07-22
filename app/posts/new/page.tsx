import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import CustomButton from "@/components/CustomButton";
import styles from "@/app/landing.module.css";

export default async function NewPost() {
  // Obtener autores desde la base de datos
  const authors = await prisma.user.findMany({
    select: { id: true, name: true },
  });

  async function createPost(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const authorId = Number(formData.get("authorId"));

    await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });

    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.squareTitle}>
          <h1 className={styles.bigTitle + " text-black"}>Crear nuevo post</h1>
        </div>
        <form action={createPost} className="flex flex-col gap-6 w-full max-w-xs mx-auto">
          <div>
            <label htmlFor="title" className="block text-lg mb-2 font-semibold text-black">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Título del post"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-lg mb-2 font-semibold text-black">
              Contenido
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Escribe el contenido del post..."
              rows={6}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="authorId" className="block text-lg mb-2 font-semibold text-black">
              Autor
            </label>
            <select
              id="authorId"
              name="authorId"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Selecciona un autor
              </option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>
          <CustomButton type="submit" colorClass="bg-blue-500 hover:bg-blue-600 w-full">
            Crear Post
          </CustomButton>
        </form>
        <div className="mt-6 w-full">
          <CustomButton href="/posts" colorClass="bg-gray-300 text-black hover:bg-gray-400 w-full">
            Volver a posts
          </CustomButton>
        </div>
      </div>
    </div>
  );
}