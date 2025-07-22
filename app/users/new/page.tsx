"use client";
import CustomButton from '@/components/CustomButton';
import styles from '../../landing.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NewUser() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    setLoading(false);
    if (res.ok) {
      router.push('/users');
    } else {
      setError('Error al crear usuario');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.squareTitle}>
          <h1 className={styles.bigTitle + ' text-black'}>Crear nuevo usuario</h1>
        </div>
        <form className="flex flex-col gap-6 w-full max-w-xs mx-auto" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg mb-2 font-semibold text-black">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre del usuario"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg mb-2 font-semibold text-black">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md bg-green-600 text-white text-base font-semibold shadow hover:bg-green-700 transition text-center"
            disabled={loading}
          >
            {loading ? 'Creando...' : 'Crear usuario'}
          </button>
          {error && <p className="text-red-600 text-center mt-2">{error}</p>}
        </form>
        <div className="mt-6 w-full">
          <CustomButton href="/users" colorClass="bg-gray-300 text-black hover:bg-gray-400 w-full">
            Volver
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
