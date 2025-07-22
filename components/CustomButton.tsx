import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  href: string;
  children: React.ReactNode;
  colorClass?: string;
}

export default function CustomButton({ href, children, colorClass = "bg-blue-600 hover:bg-blue-700" }: CustomButtonProps) {
  return (
    <Link
      href={href}
      className={`w-full px-4 py-2 rounded-md text-white text-base font-semibold shadow transition text-center ${colorClass}`}
    >
      {children}
    </Link>
  );
}
