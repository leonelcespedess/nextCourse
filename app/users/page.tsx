"use client";

import { useEffect, useState } from "react";
import CustomButton, { CustomButtonSkeleton } from "@/components/CustomButton";
import styles from "../landing.module.css";
import type { User } from "@/interfaces/user";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.squareTitle}>
          <h1 className={styles.bigTitle}>Usuarios</h1>
        </div>
        <ol className={`${styles.buttonGroup} mt-2`}>
          {loading
            ? [...Array(3)].map((_, idx) => (
                <li key={idx} className="w-full flex items-center">
                  <span className="mr-3 min-w-[2em] text-black font-bold text-lg text-left">
                    {idx + 1}.
                  </span>
                  <CustomButtonSkeleton className="w-full" />
                </li>
              ))
            : users.map((user, idx) => (
                <li key={user.id} className="w-full flex items-center">
                  <span className="mr-3 min-w-[2em] text-black font-bold text-lg text-left">
                    {idx + 1}.
                  </span>
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
              href="/users/new"
              colorClass={`bg-green-600 text-white hover:bg-green-700 border border-green-700 w-full ${loading ? "opacity-50 pointer-events-none" : ""}`}
            >
              <span className="font-semibold text-left w-full block">Crear usuario</span>
            </CustomButton>
          </li>
          <li className="w-full flex items-center">
            <span className="mr-3 min-w-[2em]" />
            <CustomButton
              href="/"
              colorClass="bg-red-700 text-white hover:bg-red-800 border border-red-800 w-full"
            >
              <span className="font-semibold text-left w-full block">Volver al inicio</span>
            </CustomButton>
          </li>
        </ol>
      </div>
    </div>
  );
}