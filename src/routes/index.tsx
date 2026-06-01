import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Layers,
  ListChecks,
  Clock,
  ShieldCheck,
  Smartphone,
  Check,
  ShoppingCart,
  KeyRound,
  PlayCircle,
  Sparkles,
  Users,
  Church,
  BookOpen,
  GraduationCap,
  Timer,
  Gift,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";
import { CTAButton } from "@/components/landing/CTAButton";
import { Placeholder } from "@/components/landing/Placeholder";
import { CHECKOUT, IMAGES } from "@/lib/landing-config";
import bonusPerguntas from "@/assets/bonus-perguntas.png";
import bonusRoteiro from "@/assets/bonus-roteiro.png";
import bonusCertificados from "@/assets/bonus-certificados.png";
import bonusPlaylist from "@/assets/bonus-playlist.png";
import bonusGratis from "@/assets/bonus-gratis.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`px-4 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <UrgencyBar />
      <NotificacoesCompra />
      <Hero />
      <VejaComoFunciona />
      <Beneficios />
      <DorSolucao />
      <ParaQuem />
      <OQueRecebe />
      <BonusExclusivos />
      <Planos />
      <Depoimentos />
      <Garantia />
      <ComoFunciona />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  );
}

/* ---------------- URGENCY BAR ---------------- */
function UrgencyBar() {
  const hoje = new Date().toLocaleDateString("pt-BR");
  return (
    <div className="sticky top-0 z-50 bg-red-600 text-white text-center text-sm sm:text-base font-bold px-4 py-2.5 shadow-md">
      <span className="inline-flex items-center justify-center gap-2">
        <Timer className="size-4 animate-pulse" />
        OFERTA ESPECIAL DISPONÍVEL APENAS HOJE {hoje}
      </span>
    </div>
  );
}

/* ---------------- NOTIFICAÇÕES COMPRA ---------------- */
function NotificacoesCompra() {
  const compradores = [
    { nome: "Pastor André", local: "São Paulo, SP", tempo: "1 minuto atrás" },
    { nome: "Líder Mariana", local: "Rio de Janeiro, RJ", tempo: "3 minutos atrás" },
    { nome: "Pastora Cláudia", local: "Belo Horizonte, MG", tempo: "5 minutos atrás" },
    { nome: "Diácono João", local: "Curitiba, PR", tempo: "7 minutos atrás" },
    { nome: "Ministra Fernanda", local: "Salvador, BA", tempo: "9 minutos atrás" },
    { nome: "Pastor Pedro", local: "Fortaleza, CE", tempo: "12 minutos atrás" },
    { nome: "Líder Juliana", local: "Brasília, DF", tempo: "15 minutos atrás" },
    { nome: "Diácono Lucas", local: "Porto Alegre, RS", tempo: "18 minutos atrás" },
    { nome: "Pastora Camila", local: "Recife, PE", tempo: "21 minutos atrás" },
    { nome: "Líder Rafael", local: "Manaus, AM", tempo: "24 minutos atrás" },
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => {
      setVisible(true);
      setIndex((prev) => (prev + 1) % compradores.length);
      setTimeout(() => setVisible(false), 4000);
    };

    const delay = Math.random() * 3000 + 2000;
    const timeout = setTimeout(show, delay);

    const interval = setInterval(() => {
      show();
    }, 8000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const atual = compradores[index];

  return (
    <div
      className={`fixed top-12 right-3 z-[60] transition-all duration-500 ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
    >
      <div className="flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg border border-border/60 px-4 py-3 max-w-[280px]">
        <div className="shrink-0 grid place-items-center size-9 rounded-full bg-green-100 text-green-600">
          <ShoppingCart className="size-4" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-foreground truncate">
            {atual.nome} — {atual.local}
          </p>
          <p className="text-[10px] text-muted-foreground">
            Comprou as 100 Dinâmicas · {atual.tempo}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 -left-20 size-72 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-96 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-4  opacity-20 blur-2xl rounded-3xl" />
          <div className="relative">
            <Placeholder
              label="mockup_principal"
              src={IMAGES.heroMockup}
              srcMobile={IMAGES.heroMockupMobile}
              aspect="aspect-[4/5]"
              priority
              width={1024}
              height={1280}
            />
          </div>
        </div>

        <div className="animate-fade-up order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft">
            <Church className="size-4" /> Material exclusivo para igrejas e líderes
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
            <span className="text-primary">100</span> Dinâmicas para{" "}
            <span className="text-primary">Encontro de Casais</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Organize um encontro inesquecível na sua igreja, sem perder semanas pesquisando ideias
            na internet.
          </p>

          <ul className="mt-6 space-y-2.5">
            {[
              "100 dinâmicas prontas para aplicar",
              "Acesso imediato e vitalício",
              "Funciona no celular, tablet e PC",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-foreground/90">
                <span className="grid place-items-center size-5 rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <CTAButton href="#planos" size="xl">
              Quero Acesso Imediato
            </CTAButton>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" /> Garantia de 7 dias
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="size-4 text-primary" /> Acesso imediato
            </span>
            <span className="flex items-center gap-1.5">
              <Smartphone className="size-4 text-primary" /> 100% responsivo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- VEJA COMO FUNCIONA ---------------- */
function VejaComoFunciona() {
  return (
    <Section id="como-funciona">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Veja por dentro</h2>
        <p className="mt-3 text-muted-foreground">
          Dinâmicas prontas, explicadas passo a passo, com propósito espiritual e leve.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {IMAGES.flashcards.map((src, i) => (
          <div
            key={i}
            className="group overflow-hidden rounded-2xl shadow-soft bg-white transition-all duration-300 hover:shadow-card hover:-translate-y-1"
          >
            <div className="overflow-hidden">
              <div className="transition-transform duration-500 group-hover:scale-110">
                <Placeholder label={`pagina_dinamica_${i + 1}`} src={src} aspect="aspect-square" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- BENEFICIOS ---------------- */
function Beneficios() {
  const items = [
    {
      icon: Timer,
      t: "Mais rapidez na organização",
      d: "Pare de pesquisar dinâmicas soltas no Google.",
    },
    { icon: Layers, t: "Mais variedade no encontro", d: "100 dinâmicas para todos os momentos." },
    {
      icon: ListChecks,
      t: "Tudo organizado",
      d: "Por tema: quebra-gelo, oração, perdão, intimidade.",
    },
    { icon: Clock, t: "Menos tempo planejando", d: "Encontro completo montado em poucas horas." },
    { icon: Heart, t: "Casais transformados", d: "Dinâmicas que tocam o coração de verdade." },
    { icon: Smartphone, t: "Fácil de usar", d: "No seu celular, tablet ou impresso." },
  ];
  return (
    <Section className="bg-muted/40">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Tudo o que você ganha</h2>
        <p className="mt-3 text-muted-foreground">
          Pensado para líderes que querem um encontro inesquecível.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ icon: Icon, t, d }) => (
          <div
            key={t}
            className="group rounded-2xl bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1 border border-border/50"
          >
            <div className="size-12 rounded-xl bg-gradient-accent grid place-items-center text-accent-foreground transition-transform group-hover:scale-110">
              <Icon className="size-6" />
            </div>
            <h3 className="mt-4 font-bold text-lg">{t}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- DOR / SOLUCAO ---------------- */
function DorSolucao() {
  return (
    <Section>
      <div className="rounded-3xl overflow-hidden shadow-card bg-gradient-primary text-primary-foreground p-8 sm:p-14 text-center">
        <p className="text-xl sm:text-2xl font-semibold opacity-90">
          Quantas noites você ainda vai passar caçando dinâmicas soltas, copiando ideias repetidas
          da internet?
        </p>
        <div className="my-6 h-px bg-primary-foreground/20" />
        <p className="text-2xl sm:text-3xl font-bold">
          Com as 100 Dinâmicas para Encontro de Casais, você tem tudo pronto para abençoar os casais
          da sua igreja.
        </p>
        <div className="mt-8">
          <CTAButton href="#planos" size="lg" variant="outline" className="bg-white">
            Quero Acesso Agora
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- PARA QUEM ---------------- */
function ParaQuem() {
  const items = [
    { icon: Church, t: "Pastores e pastoras" },
    { icon: Users, t: "Líderes de casais" },
    { icon: GraduationCap, t: "Ministério de família" },
    { icon: BookOpen, t: "Conselheiros cristãos" },
    { icon: Sparkles, t: "Quem vai organizar pela 1ª vez" },
  ];
  return (
    <Section className="bg-muted/40">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Para quem é</h2>
        <p className="mt-3 text-muted-foreground">
          Feito para quem deseja realizar encontros que marcam vidas.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map(({ icon: Icon, t }) => (
          <div
            key={t}
            className="rounded-2xl bg-card p-5 text-center shadow-soft border border-border/50 hover:shadow-card transition-all"
          >
            <Icon className="size-8 text-primary mx-auto" />
            <p className="mt-3 font-semibold text-sm">{t}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- O QUE RECEBE ---------------- */
function OQueRecebe() {
  const itens = [
    "100 dinâmicas para encontro de casais",
    "Organizadas por momento do retiro",
    "Material 100% digital",
    "Acesso imediato após a compra",
    "Atualizações futuras inclusas",
    "Compatível com celular, tablet e PC",
  ];
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">O que você vai receber</h2>
          <p className="mt-3 text-muted-foreground">
            Um kit completo para você liderar um encontro inesquecível.
          </p>
          <ul className="mt-6 space-y-3">
            {itens.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-0.5 grid place-items-center size-6 rounded-full bg-gradient-primary text-primary-foreground shrink-0">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="font-medium">{it}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CTAButton href="#planos">Garantir o meu acesso</CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- BÔNUS EXCLUSIVOS ---------------- */
function BonusExclusivos() {
  const bonus = [
    {
      img: bonusPerguntas,
      tag: "Bônus #1",
      titulo: "100 Perguntas Profundas para Casais",
      desc: "Perguntas que abrem o coração e geram conversas que casais nunca tiveram antes.",
      itens: [] as string[],
    },
    {
      img: bonusRoteiro,
      tag: "Bônus #2",
      titulo: "Roteiro Completo para Encontro de Casais",
      desc: "Cronograma pronto da sexta à noite ao domingo, momento a momento — você só executa.",
      itens: [] as string[],
    },
    {
      img: bonusCertificados,
      tag: "Bônus #3",
      titulo: "Certificados para Casais",
      desc: "Modelos editáveis e prontos para impressão, para entregar ao final do encontro.",
      itens: [] as string[],
    },
    {
      img: bonusGratis,
      tag: "Bônus #5",
      titulo: "25 Dinâmicas Sem Precisar Comprar Nada",
      desc: "Dinâmicas extras que funcionam só com papel, caneta e o que já existe na igreja.",
      itens: [],
    },
  ];

  return (
    <Section id="bonus" className="bg-gradient-to-b from-accent/5 via-background to-background">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
          <Gift className="size-4" /> Bônus exclusivos do Premium
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
          Leve <span className="text-accent">5 bônus</span> que valem mais que o próprio material
        </h2>
        <p className="mt-3 text-muted-foreground">
          Inclusos automaticamente ao escolher o Plano Premium.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {bonus.map((b) => (
          <div
            key={b.titulo}
            className="group relative rounded-3xl bg-card border border-border shadow-card overflow-hidden hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
          >
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 shadow-soft">
                <Gift className="size-3.5" /> {b.tag}
              </span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/10 overflow-hidden">
              <img
                src={b.img}
                alt={b.titulo}
                loading="lazy"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold leading-tight">{b.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              {b.itens.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {b.itens.map((it) => (
                    <li
                      key={it}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <CTAButton href={CHECKOUT.premium}>Quero o Premium com os 5 bônus</CTAButton>
        <p className="mt-3 text-xs text-muted-foreground">Acesso imediato · Garantia de 7 dias</p>
      </div>
    </Section>
  );
}

/* ---------------- PLANOS ---------------- */
function Planos() {
  return (
    <Section id="planos" className="bg-gradient-hero">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Escolha seu acesso</h2>
        <p className="mt-3 text-muted-foreground">Oferta por tempo limitado.</p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <PlanoCard
          titulo="Plano Básico"
          preco="R$ 17,90"
          beneficios={[
            "100 dinâmicas para encontro de casais",
            "Acesso imediato",
            "Compatível com celular",
            "Garantia de 7 dias",
          ]}
          href={CHECKOUT.basico}
          cta="Quero o Básico"
        />
        <PlanoCard
          titulo="Plano Premium"
          preco="R$ 27,90"
          beneficios={[
            "Tudo do plano básico",
            "100 Perguntas Profundas para Casais",
            "Roteiro Completo para Encontro de Casais",
            "Certificados para Casais",
            "25 Dinâmicas sem precisar comprar nada",
            "Atualizações futuras",
            "Suporte prioritário",
          ]}
          href={CHECKOUT.premium}
          cta="Quero o Premium"
          destaque
        />
      </div>
    </Section>
  );
}

function PlanoCard({
  titulo,
  preco,
  beneficios,
  href,
  cta,
  destaque,
}: {
  titulo: string;
  preco: string;
  beneficios: string[];
  href: string;
  cta: string;
  destaque?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
        destaque
          ? "bg-gradient-primary text-primary-foreground shadow-glow scale-100 md:scale-105 border-2 border-primary"
          : "bg-card shadow-card border border-border"
      }`}
    >
      {destaque && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-soft">
          ⭐ MAIS ESCOLHIDO
        </span>
      )}
      <h3 className="text-xl font-bold">{titulo}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-5xl font-extrabold">{preco}</span>
        <span className={destaque ? "text-primary-foreground/70" : "text-muted-foreground"}>
          à vista
        </span>
      </div>
      <ul className="mt-6 space-y-2.5">
        {beneficios.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <Check
              className={`size-5 mt-0.5 shrink-0 ${destaque ? "text-accent" : "text-primary"}`}
              strokeWidth={3}
            />
            <span className="text-sm font-medium">{b}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] ${
          destaque
            ? "bg-white text-primary shadow-soft hover:shadow-card"
            : "bg-gradient-primary text-primary-foreground shadow-soft"
        }`}
      >
        <ShoppingCart className="size-5" />
        {cta}
      </a>
    </div>
  );
}

/* ---------------- DEPOIMENTOS ---------------- */
const DEPOIMENTOS = [
  {
    nome: "Mariana Santos",
    cargo: "Líder de Células",
    cidade: "São Paulo, SP",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
    texto:
      "Esse material transformou completamente minha forma de liderar. Os flashcards são objetivos e fáceis de aplicar na prática. Meu grupo cresceu muito depois que comecei a usar!",
  },
  {
    nome: "Cláudia Ferreira",
    cargo: "Pastora",
    cidade: "Belo Horizonte, MG",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
    texto:
      "Nunca vi um conteúdo tão completo e acessível para líderes. Consegui aplicar as lições já na primeira semana. Recomendo para todo líder que quer crescer!",
  },
  {
    nome: "Fernanda Lima",
    cargo: "Diácona e Ministra",
    cidade: "Rio de Janeiro, RJ",
    foto: "https://randomuser.me/api/portraits/women/22.jpg",
    texto:
      "Comprei com um pouco de dúvida, mas me surpreendi demais. O conteúdo é rico, prático e muito bem organizado. Valeu cada centavo investido.",
  },
  {
    nome: "Juliana Oliveira",
    cargo: "Líder de Jovens",
    cidade: "Curitiba, PR",
    foto: "https://randomuser.me/api/portraits/women/57.jpg",
    texto:
      "Indicou para toda a equipe da minha igreja! Os estudos são incríveis, muito bem fundamentados. Os bônus então são de outro nível. Sensacional!",
  },
  {
    nome: "Camila Rodrigues",
    cargo: "Coordenadora de Ministério",
    cidade: "Salvador, BA",
    foto: "https://randomuser.me/api/portraits/women/33.jpg",
    texto:
      "Finalmente um material que respeita o tempo do líder. Fácil de estudar, fácil de ensinar. Minha equipe ficou muito mais engajada e preparada.",
  },
];

function Depoimentos() {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Líderes aprovam</h2>
        <p className="mt-3 text-muted-foreground">Veja o que estão dizendo.</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {DEPOIMENTOS.map((d, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-2xl bg-card border border-border/50 shadow-soft p-6"
          >
            <div className="flex items-center gap-3">
              <img
                src={d.foto}
                alt={d.nome}
                className="size-14 rounded-full object-cover border-2 border-primary/30"
              />
              <div>
                <p className="font-semibold leading-tight">{d.nome}</p>
                <p className="text-xs text-muted-foreground">{d.cargo}</p>
                <p className="text-xs text-muted-foreground">{d.cidade}</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{d.texto}"</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- GARANTIA ---------------- */
function Garantia() {
  return (
    <Section className="bg-muted/40">
      <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center max-w-3xl mx-auto bg-card rounded-3xl p-8 sm:p-12 shadow-card border border-border/50">
        <div className="mx-auto md:mx-0">
          <div className="size-32 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow">
            <div className="text-center">
              <div className="text-3xl font-extrabold leading-none">7</div>
              <div className="text-[10px] uppercase tracking-wider">dias</div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">Garantia incondicional de 7 dias</h2>
          <p className="mt-3 text-muted-foreground">
            Se em até 7 dias você não estiver satisfeito, devolvemos 100% do seu investimento. Sem
            perguntas, sem burocracia. O risco é todo nosso.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- COMO FUNCIONA ACESSO ---------------- */
function ComoFunciona() {
  const steps = [
    { icon: ShoppingCart, t: "Compra", d: "Pagamento 100% seguro." },
    { icon: KeyRound, t: "Recebe Acesso", d: "Liberação imediata por e-mail." },
    { icon: PlayCircle, t: "Comece a Usar", d: "Organize seu encontro hoje mesmo." },
  ];
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Como funciona o acesso</h2>
        <p className="mt-3 text-muted-foreground">Em 3 passos simples.</p>
      </div>
      <div className="mt-12 relative grid sm:grid-cols-3 gap-8">
        <div className="hidden sm:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/30 via-accent to-primary/30" />
        {steps.map(({ icon: Icon, t, d }, i) => (
          <div key={t} className="relative text-center">
            <div className="mx-auto size-20 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow relative z-10">
              <Icon className="size-8" />
            </div>
            <div className="mt-2 text-xs font-bold text-primary">PASSO {i + 1}</div>
            <h3 className="mt-1 font-bold text-lg">{t}</h3>
            <p className="text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const itens = [
    {
      q: "Como recebo o acesso?",
      a: "Logo após a confirmação do pagamento você recebe o acesso por e-mail.",
    },
    {
      q: "Funciona no celular?",
      a: "Sim. O material é compatível com celular, tablet e computador.",
    },
    {
      q: "O acesso é vitalício?",
      a: "Sim. Você compra uma vez e tem acesso permanente ao material.",
    },
    {
      q: "Posso usar em mais de um encontro?",
      a: "Sim. Use quantas vezes quiser, em quantos encontros precisar.",
    },
    {
      q: "Serve para igrejas de qualquer denominação?",
      a: "Sim. O conteúdo é cristão, baseado em princípios bíblicos universais.",
    },
    {
      q: "Posso imprimir as dinâmicas?",
      a: "Sim. O material foi pensado para uso digital e impresso.",
    },
    {
      q: "Como funciona a garantia?",
      a: "Você tem 7 dias para testar. Se não gostar, devolvemos 100% do valor.",
    },
  ];
  return (
    <Section className="bg-muted/40">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Perguntas frequentes</h2>
      </div>
      <div className="mt-10 max-w-3xl mx-auto space-y-3">
        {itens.map((item, i) => (
          <FAQItem key={i} {...item} />
        ))}
      </div>
    </Section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left p-5 font-semibold hover:bg-muted/30 transition-colors"
      >
        <span>{q}</span>
        <span
          className={`shrink-0 size-7 rounded-full bg-primary text-primary-foreground grid place-items-center transition-transform ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- CTA FINAL ---------------- */
function CTAFinal() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-primary text-primary-foreground p-10 sm:p-16 text-center shadow-glow">
        <div className="absolute top-0 right-0 size-64 bg-accent/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 size-64 bg-white/10 blur-3xl rounded-full" />
        <div className="relative">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
            Realize hoje o encontro de casais que vai marcar a história da sua igreja.
          </h2>
          <div className="mt-8">
            <CTAButton href={CHECKOUT.premium} size="xl" variant="outline" className="bg-white">
              Quero Acesso Agora
            </CTAButton>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/90">
            <span className="flex items-center gap-1.5">
              <Heart className="size-4" /> Acesso imediato
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4" /> Garantia 7 dias
            </span>
            <span className="flex items-center gap-1.5">
              <ShoppingCart className="size-4" /> Pagamento seguro
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
      <div className="mx-auto max-w-6xl px-4">
        © {new Date().getFullYear()} 100 Dinâmicas para Encontro de Casais — Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
