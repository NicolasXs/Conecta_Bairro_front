"use client"; 

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  return (
    <nav className="px-6 py-4 flex items-center justify-between shadow-md" style={{ background: "var(--background)" }}>
      {/* Logo */}
      <div className="text-xl font-bold" style={{ color: "var(--foreground)" }}>Conecta Bairro</div>

      {/* Links e Perfil */}
      <div className="flex items-center gap-4">
        <Link href="/home" className="font-semibold" style={{ color: "var(--foreground)" }}>Home</Link>
        <Link href="/sobre" className="font-semibold" style={{ color: "var(--foreground)" }}>Sobre</Link>
        <Link href="/contato" className="font-semibold" style={{ color: "var(--foreground)" }}>Contato</Link>

        {/* Perfil */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
            style={{ background: "var(--foreground)", color: "var(--background)" }}
          >
            U
          </button>
          {isProfileOpen && (
            <div
              className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg py-2"
              style={{ background: "var(--foreground)" }}
            >
              <Link
                href="/perfil"
                className="block px-4 py-2 rounded-md"
                style={{ color: "var(--background)" }}
              >
                Perfil
              </Link>
              <Link
                href="/login"
                className="block px-4 py-2 rounded-md"
                style={{ color: "var(--background)" }}
              >
                Sair
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
