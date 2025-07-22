import prisma from '@/lib/prisma'

export default async function Users() {
    const users = await prisma.user.findMany();
    return (
        <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center -mt-16">
            <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
                Superblog
            </h1>
            <div className="bg-orange-400 rounded-lg shadow-lg p-6 border-t border-b border-black/10 border-4 border-orange-600">
                <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
                    {users.map((user) => (
                        <li key={user.id} className="mb-2">
                            {user.name}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}