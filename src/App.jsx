import React from "react";

export default function App() {
  const cards = [
    {
      tag: "Saúde",
      title: "Site voltado pra saúde",
      desc: "Soluções digitais para clínicas e laboratórios com foco em performance, credibilidade e SEO médico.",
      image: "/images/lab.png", // imagem local do Laboratório Mais Você
      href: "#",
    },
    {
      tag: "Ativo Digital",
      title: "Compra e venda de domínios premium",
      desc: "Intermediação e gestão de ativos digitais de alto valor — exemplo: BAR.com.br.",
      image: "/images/bar.png", // imagem local do BAR.com.br
      href: "#",
    },
    {
      tag: "Aplicação Web",
      title: "App de Restaurante",
      desc: "Pedidos online e cardápio digital integrados.",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      href: "#",
    },
    {
      tag: "Painel Administrativo",
      title: "Dashboard Financeiro",
      desc: "Análises e relatórios financeiros interativos em tempo real.",
      gradient: "from-emerald-400 to-teal-500",
      href: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Projetos <span className="text-sky-400">Destacados</span>
        </h2>
        <p className="mt-2 text-slate-300">
          Alguns dos principais projetos desenvolvidos pela Global Domain Ventures
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="group relative block overflow-hidden rounded-2xl border border-white/5 bg-slate-900 shadow-lg transition hover:scale-[1.01] hover:shadow-xl"
            >
              {/* Imagem ou gradiente */}
              <div
                className={
                  "h-52 sm:h-64 md:h-72 w-full " +
                  (!card.image && card.gradient ? `bg-gradient-to-br ${card.gradient}` : "")
                }
                style={
                  card.image
                    ? {
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : undefined
                }
              />
              {/* Sombra escura sobreposta */}
              <div className="pointer-events-none absolute inset-0 bg-slate-950/40" />

              {/* Conteúdo do card */}
              <div className="relative -mt-16 rounded-t-2xl bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 px-6 py-5">
                <p className="text-xs font-medium text-slate-300">{card.tag}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-300/90">
                  {card.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-300 group-hover:translate-x-0.5 transition">
                  Ver Portfólio <span aria-hidden>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
