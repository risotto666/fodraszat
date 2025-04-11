"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout = () => {
    signOut({ callbackUrl: "/admin/login" });
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
    >
      Kijelentkezés
    </button>
  );
}
