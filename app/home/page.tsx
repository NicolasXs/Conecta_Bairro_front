"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../componentes/Navbar";
import SearchBar from "../componentes/SearchBar";

interface WorkCard {
  id: number;
  title: string;
  description: string;
  path: string;
}

export default function Home() {
  const allCards: WorkCard[] = [
    { id: 1, title: "Bairros", description: "Escolha os bairros da sua cidade", path: "/bairros" },
    { id: 2, title: "Comercios", description: "Veja os comercios próximos nos bairros da sua cidade", path: "/comercios" },
    { id: 3, title: "Serviços", description: "Veja os serviços que estão disponíveis no seu bairro", path: "/servicos" },
    { id: 4, title: "Trabalhadores", description: "Escolha o trabalhador de sua preferência", path: "/trabalhadores" },
  ];

  const [filteredCards, setFilteredCards] = useState<WorkCard[]>(allCards);

  const handleSearch = (query: string) => {
    const filtered = allCards.filter((card) =>
      card.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Navbar />

      <main className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">
          Conecta Bairro
        </h1>

        <p className="mb-6 text-center max-w-md">
          A plataforma que aproxima trabalhadores, clientes e comércios locais, transformando habilidades em oportunidades e fortalecendo a economia do seu bairro.
        </p>

        <div className="w-full max-w-md mb-6">
          <SearchBar placeholder="Buscar recursos..." onSearch={handleSearch} />
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {filteredCards.map((card) => (
            <Link key={card.id} href={card.path}>
              <div
                className="w-64 p-4 rounded-lg shadow-md cursor-pointer"
                style={{ background: "var(--background)", color: "var(--foreground)", border: "1px solid #ccc" }}
              >
                <h2 className="font-bold mb-2">{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </Link>
          ))}

          {filteredCards.length === 0 && (
            <p className="mt-4">
              Nenhum recurso encontrado.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
