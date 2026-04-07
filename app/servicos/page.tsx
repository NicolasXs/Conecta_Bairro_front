"use client";

import { useState } from "react";
import Navbar from "../componentes/Navbar";
import SearchBar from "../componentes/SearchBar";

export default function Page() {

  const categorias = [
    "Construção",
    "Manutenção",
    "Limpeza",
    "Tecnologia",
    "Jardinagem",
    "Transporte",
    "Reparos domésticos"
  ];

  const servicosPorCategoria: Record<string, string[]> = {
    "Construção": ["Pedreiro", "Marceneiro"],
    "Manutenção": ["Eletricista", "Encanador"],
    "Limpeza": ["Diarista", "Faxineira"],
    "Tecnologia": ["Técnico em informática"],
    "Jardinagem": ["Jardineiro"],
    "Transporte": ["Motorista", "Frete"],
    "Reparos domésticos": ["Encanador", "Detetização"]
  };

  const detalhesServico: Record<string, { descricao: string; imagem?: string }> = {
    "Pedreiro": { descricao: "Construção e reforma de estruturas.", imagem: "/imgs/pedreiro.jpg" },
    "Marceneiro": { descricao: "Móveis planejados e sob medida.", imagem: "/imgs/marceneiro.jpg" },
    "Eletricista": { descricao: "Instalações e manutenção elétrica.", imagem: "/imgs/eletricista.jpg" },
    "Encanador": { descricao: "Serviços hidráulicos em geral.", imagem: "/imgs/encanador.jpg" },
    "Diarista": { descricao: "Limpeza residencial e organização.", imagem: "/imgs/diarista.jpg" },
    "Faxineira": { descricao: "Serviços de limpeza doméstica.", imagem: "/imgs/faxineira.jpg" },
    "Técnico em informática": { descricao: "Manutenção de computadores.", imagem: "/imgs/tecnico.jpg" },
    "Jardineiro": { descricao: "Cuidados com jardins e plantas.", imagem: "/imgs/jardineiro.jpg" },
    "Motorista": { descricao: "Transporte particular.", imagem: "/imgs/motorista.jpg" },
    "Frete": { descricao: "Mudanças e transporte de cargas.", imagem: "/imgs/frete.jpg" },
    "Detetização": { descricao: "Serviços de controle de pragas e dedetização residencial.", imagem: "/imgs/dedetizacao.jpg" }
  };

  const [categoria, setCategoria] = useState("");
  const [busca, setBusca] = useState("");
  const [servicoSelecionado, setServicoSelecionado] = useState("");

  const servicos = categoria ? servicosPorCategoria[categoria] || [] : [];

  const servicosFiltrados = servicos.filter((servico) =>
    servico.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <main className="max-w-5xl mx-auto p-6">

        <h1 className="text-2xl font-bold mb-4">
          Serviços
        </h1>

        {/* CATEGORIAS */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categorias.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setCategoria(cat);
                setBusca("");
                setServicoSelecionado("");
              }}
              className="px-4 py-1.5 rounded-full text-sm border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BUSCA */}
        {categoria && (
          <SearchBar
            placeholder="Buscar serviço..."
            onSearch={(q) => setBusca(q)}
          />
        )}

        {/* RESULTADOS */}
        {categoria && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

            {servicosFiltrados.map((servico, index) => (
              <div
                key={index}
                onClick={() =>
                  setServicoSelecionado(
                    servicoSelecionado === servico ? "" : servico
                  )
                }
                className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition bg-[var(--background)]"
              >

                {/* IMAGEM */}
                <div className="h-40 bg-gray-300 dark:bg-gray-700">
                  {detalhesServico[servico]?.imagem && (
                    <img
                      src={detalhesServico[servico].imagem}
                      alt={servico}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* TEXTO */}
                <div className="p-3">
                  <h2 className="font-semibold text-base">
                    {servico}
                  </h2>
                </div>

                {/* DETALHE */}
                {servicoSelecionado === servico && (
                  <div className="p-3 border-t border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800">
                    <p className="text-sm">
                      {detalhesServico[servico]?.descricao}
                    </p>
                  </div>
                )}

              </div>
            ))}

          </div>
        )}

      </main>
    </div>
  );
}