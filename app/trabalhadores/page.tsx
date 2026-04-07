"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../componentes/Navbar";
import SearchBar from "../componentes/SearchBar";

interface Trabalhador {
  id: number;
  nome: string;
  profissao: string;
  imagem: string;
}

export default function Page() {

  const trabalhadores: Trabalhador[] = [
    { id: 1, nome: "João da Silva", profissao: "Pedreiro", imagem: "/imgs/user1.jpg" },
    { id: 2, nome: "Maria Souza dos Santos", profissao: "Diarista", imagem: "/imgs/user2.jpg" },
    { id: 3, nome: "Roberto Carlos Pereira", profissao: "Eletricista", imagem: "/imgs/user3.jpg" },
    { id: 4, nome: "Ana Castela", profissao: "Carpinteira", imagem: "/imgs/user4.jpg" },
    { id: 5, nome: "Zoro dos Santos", profissao: "Encanador", imagem: "/imgs/user5.jpg" }
  ];

  const [busca, setBusca] = useState("");

  const filtrados = trabalhadores.filter((t) =>
    t.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <main className="max-w-xl mx-auto p-6">

        <h1 className="text-2xl font-bold mb-4">
          Trabalhadores
        </h1>

        <SearchBar
          placeholder="Buscar trabalhador..."
          onSearch={(q) => setBusca(q)}
        />

        <div className="mt-6 space-y-3">

          {filtrados.map((t) => (
            <Link
              key={t.id}
              href={t.id === 1 ? "/user1" : "#"}
            >
              <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition">

                <img
                  src={t.imagem}
                  alt={t.nome}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">
                    {t.nome}
                  </p>
                  <p className="text-sm opacity-70">
                    {t.profissao}
                  </p>
                </div>

              </div>
            </Link>
          ))}

          {filtrados.length === 0 && (
            <p className="text-center mt-4 opacity-70">
              Nenhum trabalhador encontrado.
            </p>
          )}

        </div>

      </main>
    </div>
  );
}
