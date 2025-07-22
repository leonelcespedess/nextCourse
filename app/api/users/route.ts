import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email } = data;
    if (!name || !email) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }
    const user = await prisma.user.create({ data: { name, email } });
    return NextResponse.json(user, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Error al crear usuario' }, { status: 500 });
  }
}
