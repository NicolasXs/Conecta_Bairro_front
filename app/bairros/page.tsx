"use client";

import { useState } from "react";
import Navbar from "../componentes/Navbar";
import SearchBar from "../componentes/SearchBar";

export default function Page() {

  const cidades = [
    "Itabuna",
    "Ilhéus",
    "Vitória da Conquista",
    "Teixeira de Freitas"
  ];

  const bairrosPorCidade: Record<string, string[]> = {
    "Itabuna": [
      "Bairro de Fátima",
      "Califórnia",
      "Santo Antônio",
      "São Caetano",
      "Monte Cristo",
      "Ferradas",
      "Parque Boa Vista",
      "Góes Calmon",
      "São Pedro",
      "Centro"
    ],

    "Vitória da Conquista": [
      "Alto Maron",
      "Ayrton Senna",
      "Bateias",
      "Boa Vista",
      "Brasil",
      "Campinhos",
      "Candeias",
      "Centro",
      "Cruzeiro",
      "Distrito Industrial"
    ],

    "Ilhéus": [
      "Jardim Atlântico",
      "Hernane Sá",
      "Olivença",
      "Vila Olímpia",
      "São Francisco",
      "Nelson Costa",
      "Pontal"
    ],

    "Teixeira de Freitas": [
      "Centro",
      "São Lourenço",
      "Estância Biquine",
      "Nova Teixeira",
      "Jardim Liberdade",
      "Vila Vargas",
      "Urbis I",
      "Urbis II",
      "Urbis III",
      "Monte Castelo",
      "Redenção",
      "Tancredo Neves",
      "Colina Verde",
      "Santos Guimarães"
    ]
  };

  const [cidade, setCidade] = useState("");
  const [busca, setBusca] = useState("");
  const [bairroSelecionado, setBairroSelecionado] = useState("");

  const bairros = cidade ? bairrosPorCidade[cidade] || [] : [];

  const bairrosFiltrados = bairros.filter((bairro) =>
    bairro.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-3xl mx-auto p-6">

        <div className="mb-6">
          <h1 className="text-2xl font-bold">Localização</h1>
          <p className="text-sm opacity-70">
            Escolha sua cidade e bairro
          </p>
        </div>

        <div
          className="rounded-xl shadow-sm p-5 border"
          style={{
            background: "var(--background)",
            borderColor: "rgba(128,128,128,0.2)"
          }}
        >

          {/* CIDADES */}
          <div className="mb-5">
            <p className="text-sm font-medium opacity-70 mb-2">
              Cidade
            </p>

            <div className="flex flex-wrap gap-2">
              {cidades.map((c, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCidade(c);
                    setBusca("");
                    setBairroSelecionado("");
                  }}
                  className="px-4 py-1.5 rounded-full text-sm border transition"
                  style={{
                    background: cidade === c ? "var(--foreground)" : "transparent",
                    color: cidade === c ? "var(--background)" : "var(--foreground)",
                    borderColor: "rgba(128,128,128,0.3)"
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* BUSCA */}
          {cidade && (
            <div className="mb-5">
              <p className="text-sm font-medium opacity-70 mb-2">
                Bairro
              </p>

              <SearchBar
                placeholder="Digite o nome do bairro..."
                onSearch={(query) => setBusca(query)}
              />
            </div>
          )}

          {/* LISTA DE BAIRROS */}
          {cidade && (
            <div
              className="rounded-lg overflow-hidden border"
              style={{ borderColor: "rgba(128,128,128,0.2)" }}
            >
              {bairrosFiltrados.length > 0 ? (
                bairrosFiltrados.map((bairro, index) => (
                  <div
                    key={index}
                    onClick={() => setBairroSelecionado(bairro)}
                    className="px-4 py-3 cursor-pointer transition border-b last:border-b-0"
                    style={{
                      background:
                        bairroSelecionado === bairro
                          ? "rgba(128,128,128,0.15)"
                          : "transparent",
                      borderColor: "rgba(128,128,128,0.1)"
                    }}
                  >
                    {bairro}
                  </div>
                ))
              ) : (
                <p className="p-3 text-sm opacity-70">
                  Nenhum bairro encontrado
                </p>
              )}
            </div>
          )}
        </div>

        {/* RESULTADO */}
        {bairroSelecionado && (
          <div
            className="mt-4 p-4 rounded-lg border text-sm"
            style={{
              background: "var(--background)",
              borderColor: "rgba(128,128,128,0.2)"
            }}
          >
            📍 {cidade} - <strong>{bairroSelecionado}</strong>
          </div>
        )}
      </main>
    </div>
  );
}