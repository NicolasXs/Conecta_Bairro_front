export default function Cadastro() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground font-sans">
      <div className="w-[360px] rounded-xl border border-gray-200 bg-background p-8 shadow-lg">
        <h1 className="mb-1 text-center text-2xl font-bold">
          Cadastre-se
        </h1>

        <p className="mb-6 text-center text-gray-500 dark:text-gray-400">
          Crie sua conta no Conecta Bairro
        </p>

        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Nome completo"
            className="mb-4 rounded-md border border-gray-300 bg-white text-black p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />

          <input
            type="text"
            placeholder="CPF / CNPJ"
            className="mb-4 rounded-md border border-gray-300 bg-white text-black p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />

          <input
            type="tel"
            placeholder="Telefone"
            className="mb-4 rounded-md border border-gray-300 bg-white text-black p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />

          <input
            type="text"
            placeholder="Bairro"
            className="mb-4 rounded-md border border-gray-300 bg-white text-black p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />

          <input
            type="text"
            placeholder="Cidade"
            className="mb-4 rounded-md border border-gray-300 bg-white text-black p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />

          <select
            className="mb-5 rounded-md border border-gray-300 bg-white text-black p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            defaultValue=""
          >
            <option value="" disabled>
              Tipo de usuário
            </option>
            <option value="trabalhador">Trabalhador</option>
            <option value="cliente">Cliente</option>
            <option value="comercio">Comércio</option>
          </select>

          <button
            type="submit"
            className="rounded-md bg-foreground text-background py-3 transition hover:opacity-90"
          >
            Cadastrar
          </button>
        </form>

        <p className="mt-5 text-center text-sm">
          Já tem conta?{" "}
          <a href="/login" className="font-semibold underline">
            Entre aqui
          </a>
        </p>
      </div>
    </div>
  );
}
