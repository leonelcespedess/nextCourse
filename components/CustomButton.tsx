import Link from "next/link";
import React from "react";

type CustomButtonProps =
  | ({
      href: string;
      children: React.ReactNode;
      colorClass?: string;
      type?: never;
    })
  | ({
      type: "button" | "submit" | "reset";
      children: React.ReactNode;
      colorClass?: string;
      href?: never;
    });

export default function CustomButton(props: CustomButtonProps) {
  if ("href" in props) {
    const { href, children, colorClass = "bg-blue-600 hover:bg-blue-700" } = props as { href: string; children: React.ReactNode; colorClass?: string };
    return (
      <Link
        href={href}
        className={`w-full px-4 py-2 rounded-md text-white text-base font-semibold shadow transition text-center ${colorClass}`}
      >
        {children}
      </Link>
    );
  } else {
    const { type, children, colorClass = "bg-blue-600 hover:bg-blue-700" } = props;
    return (
      <button
        type={type}
        className={`w-full px-4 py-2 rounded-md text-white text-base font-semibold shadow transition text-center ${colorClass}`}
      >
        {children}
      </button>
    );
  }
}

// Skeleton para CustomButton
export function CustomButtonSkeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full px-4 py-2 rounded-md bg-gray-300 animate-pulse ${className}`}
      style={{ minHeight: 40 }}
    />
  );
}
