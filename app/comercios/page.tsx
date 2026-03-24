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
      "Bairro de Fátima", "Califórnia", "Santo Antônio", "São Caetano",
      "Monte Cristo", "Ferradas", "Parque Boa Vista", "Góes Calmon",
      "São Pedro", "Centro"
    ],
    "Vitória da Conquista": [
      "Alto Maron", "Ayrton Senna", "Bateias", "Boa Vista", "Brasil",
      "Campinhos", "Candeias", "Centro", "Cruzeiro", "Distrito Industrial"
    ],
    "Ilhéus": [
      "Jardim Atlântico", "Hernane Sá", "Olivença",
      "Vila Olímpia", "São Francisco", "Nelson Costa", "Pontal"
    ],
    "Teixeira de Freitas": [
      "Centro", "São Lourenço", "Estância Biquine", "Nova Teixeira",
      "Jardim Liberdade", "Vila Vargas", "Urbis I", "Urbis II", "Urbis III",
      "Monte Castelo", "Redenção", "Tancredo Neves", "Colina Verde",
      "Santos Guimarães"
    ]
  };

  const comerciosPorBairro: Record<string, { nome: string; tipo: string }[]> = {
    "Centro": [
      { nome: "Casa do Construtor", tipo: "Materiais de construção" },
      { nome: "Elétrica Central", tipo: "Materiais elétricos" },
      { nome: "InfoTech Centro", tipo: "Loja de informática" }
    ],
    "Bairro de Fátima": [
      { nome: "Depósito Fátima", tipo: "Materiais de construção" }
    ],
    "Califórnia": [
      { nome: "Elétrica Califórnia", tipo: "Materiais elétricos" }
    ]
  };

  const detalhesComercio: Record<string, { descricao: string }> = {
    "Casa do Construtor": {
      descricao: "Loja especializada em materiais de construção."
    },
    "Elétrica Central": {
      descricao: "Tudo em materiais elétricos."
    },
    "InfoTech Centro": {
      descricao: "Loja de informática e manutenção."
    },
    "Depósito Fátima": {
      descricao: "Materiais para construção e reforma."
    }
  };

  const [cidade, setCidade] = useState("");
  const [busca, setBusca] = useState("");
  const [comercioSelecionado, setComercioSelecionado] = useState("");

  const bairros = cidade ? bairrosPorCidade[cidade] || [] : [];

  const bairrosFiltrados = bairros.filter((bairro) =>
    bairro.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-3xl mx-auto p-6">

        <h1 className="text-2xl font-bold mb-4">
          Localização
        </h1>

        {/* CIDADES */}
        <div className="mb-6 flex flex-wrap gap-2">
          {cidades.map((c, index) => (
            <button
              key={index}
              onClick={() => {
                setCidade(c);
                setBusca("");
                setComercioSelecionado("");
              }}
              className="px-4 py-1.5 rounded-full text-sm border"
            >
              {c}
            </button>
          ))}
        </div>

        {/* BUSCA */}
        {cidade && (
          <SearchBar
            placeholder="Buscar bairro..."
            onSearch={(q) => setBusca(q)}
          />
        )}

        {/* RESULTADOS */}
        {cidade && (
          <div className="mt-6">
            {bairrosFiltrados.map((bairro, index) => (
              <div key={index} className="mb-4 p-4 border rounded-lg">

                <h2 className="font-semibold mb-2">
                  {bairro}
                </h2>

                {comerciosPorBairro[bairro]?.map((item, i) => (
                  <div key={i}>

                    {/* CARD */}
                    <div
                      onClick={() =>
                        setComercioSelecionado(
                          comercioSelecionado === item.nome ? "" : item.nome
                        )
                      }
                      className="p-2 mb-2 border rounded cursor-pointer hover:shadow"
                    >
                      <p className="text-sm font-medium">
                        {item.nome}
                      </p>
                      <p className="text-xs opacity-70">{item.tipo}</p>
                    </div>

                    {/* DETALHE (SEM IMAGEM) */}
                    {comercioSelecionado === item.nome && (
                      <div className="p-3 mb-3 border rounded bg-gray-50">
                        <p className="text-sm">
                          {detalhesComercio[item.nome]?.descricao}
                        </p>
                      </div>
                    )}

                  </div>
                ))}

              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}