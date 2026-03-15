"use client"; // necessário para usar useRouter no App Router

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="w-[360px] rounded-xl border border-gray-200 bg-background p-8 shadow-lg">
        <h1 className="mb-1 text-center text-2xl font-bold">
          Conecta Bairro
        </h1>

        <p className="mb-6 text-center text-gray-500 dark:text-gray-400">
          Entre na sua conta
        </p>

        <form className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="mb-4 rounded-md border border-gray-300 bg-white text-black p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />

          <input
            type="password"
            placeholder="Senha"
            className="mb-5 rounded-md border border-gray-300 bg-white text-black p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />

          <button
            type="button"
            className="rounded-md bg-foreground text-background py-3 transition hover:opacity-90"
            onClick={() => router.push("/home")}
          >
            Entrar
          </button>
        </form>

        <p className="mt-5 text-center text-sm">
          Não tem conta?{" "}
          <a href="/cadastro" className="font-semibold underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
