"use client";

import { useState } from "react";
import Navbar from "../componentes/Navbar";

interface Servico {
  id: number;
  nome: string;
  descricao: string;
}

interface Avaliacao {
  id: number;
  cliente: string;
  comentario: string;
  nota: number; 
}

export default function Perfil() {
  const [servicos, setServicos] = useState<Servico[]>([
    { id: 1, nome: "Pedreiro", descricao: "Construção e reformas" },
    { id: 2, nome: "Eletricista", descricao: "Instalação elétrica residencial" },
  ]);

  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([
    { id: 1, cliente: "Maria", comentario: "Trabalho rápido e confiável!", nota: 5 },
    { id: 2, cliente: "João", comentario: "Excelente serviço.", nota: 4 },
  ]);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <Navbar />

      <main className="p-6 max-w-5xl mx-auto flex flex-col gap-10">
        {/* Dados do Trabalhador */}
        <section className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 bg-gray-400 dark:bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
            U
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Nome do Trabalhador</h1>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Serviço: Pedreiro</p>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Bairro: Centro</p>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Contato:{" "}
              <a
                href="https://wa.me/559999999999"
                className="underline text-blue-500 hover:text-blue-400 transition"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </section>

        {/* Portfólio Digital */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Portfólio Digital</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-full h-40 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform"
              ></div>
            ))}
          </div>
        </section>

        {/* Serviços oferecidos */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Serviços Oferecidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicos.map((s) => (
              <div
                key={s.id}
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-1">{s.nome}</h3>
                <p className="text-gray-700 dark:text-gray-300">{s.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Avaliações e reputação */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Avaliações e Reputação</h2>
          <div className="flex flex-col gap-3">
            {avaliacoes.map((a) => (
              <div
                key={a.id}
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold flex items-center gap-2">
                  {a.cliente} -{" "}
                  <span className="text-yellow-400">
                    {"★".repeat(a.nota)}{"☆".repeat(5 - a.nota)}
                  </span>
                </p>
                <p className="text-gray-700 dark:text-gray-300">{a.comentario}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Diferenciais e Capacitação */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Diferenciais</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li className="hover:text-blue-500 transition">Cadastro gratuito e simples</li>
            <li className="hover:text-blue-500 transition">Comunicação direta via WhatsApp</li>
            <li className="hover:text-blue-500 transition">Acesso futuro a treinamentos e capacitação</li>
            <li className="hover:text-blue-500 transition">Confiança e reputação através de avaliações</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
