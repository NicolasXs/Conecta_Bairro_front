"use client";

import Navbar from "../componentes/Navbar";

export default function User1() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen font-sans">
      <Navbar />

      <main className="p-6 max-w-5xl mx-auto flex flex-col gap-10">

        <section className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/imgs/user1.jpg"
            alt="João da Silva"
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">João da Silva</h1>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Serviço: Pedreiro
            </p>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Bairro: Centro
            </p>

            <a
              href="https://wa.me/11111111111"
              target="_blank"
              className="underline text-blue-500 hover:text-blue-400 transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Portfólio</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
            <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
            <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Serviços Oferecidos</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <h3 className="font-semibold text-lg">Pedreiro</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Construção e reformas em geral.
              </p>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <h3 className="font-semibold text-lg">Acabamento</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Pisos, revestimentos e finalização de obra.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Avaliações</h2>

          <div className="flex flex-col gap-3">

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <p className="font-semibold">
                Mariazinha - ⭐⭐⭐⭐⭐
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Trabalho rápido e confiável! Recomendo muito.
              </p>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <p className="font-semibold">
                João - ⭐⭐⭐⭐☆
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Excelente serviço.
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}