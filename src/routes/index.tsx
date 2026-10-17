import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { FloatingWhatsApp, WhatsAppButton, btnBase } from "@/components/site/WhatsAppButton";
import { mapsUrl, navLinks, services, siteConfig } from "@/config/site";
import heroDog from "@/assets/hero-dog.jpg";
import aboutImg from "@/assets/about-grooming.jpg";
import catImg from "@/assets/gallery-cat.jpg";
import beagleImg from "@/assets/gallery-beagle.jpg";

const title = `${siteConfig.name} — Banho, tosa e cuidados para cães e gatos`;
const description =
  "Pet shop com atendimento acolhedor: banho, tosa e cuidados com a pelagem para cães e gatos. Agende pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-accent">{children}</p>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pb-28">
        <div className="lg:col-span-6 animate-fade-up">
          <Eyebrow>Banho · Tosa · Cuidados</Eyebrow>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Cuidado especial para quem faz parte da sua família.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Um espaço tranquilo para o banho, a tosa e os cuidados com a pelagem do seu cão ou gato
            — com tempo, paciência e carinho em cada detalhe.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton>Agendar pelo WhatsApp</WhatsAppButton>
            <a href="#servicos" className={`${btnBase} border border-foreground/20 hover:border-foreground/50 hover:bg-card`}>
              Conhecer nossos serviços <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="relative lg:col-span-6">
          <div className="absolute -left-6 -top-6 hidden h-40 w-40 rounded-full bg-primary/15 lg:block" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroDog}
              alt="Golden retriever bem cuidado sentado sobre uma toalha em um salão de banho e tosa"
              width={1280}
              height={1536}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-[30%_center]"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-card px-6 py-4 shadow-soft sm:left-auto sm:right-8">
            <p className="font-display text-lg">Cães e gatos</p>
            <p className="text-sm text-muted-foreground">Banho, tosa e pelagem</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>Serviços</Eyebrow>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Cuidados pensados para o bem-estar do seu pet
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="font-display text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                {!s.confirmed && (
                  <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Em breve</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <WhatsAppButton variant="outline" message="Olá! Gostaria de saber mais sobre os serviços e valores para meu pet.">
            Tirar dúvidas pelo WhatsApp
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <img
            src={aboutImg}
            alt="Imagem provisória: profissional escovando um cão de pelagem branca"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
          />
        </Reveal>
        <Reveal>
          <Eyebrow>Sobre nós</Eyebrow>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Um lugar onde seu pet é recebido com calma e respeito
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              [Espaço para a história do pet shop: como começou, quem está à frente e o que motiva o
              trabalho no dia a dia.]
            </p>
            <p>
              [Valores e forma de atendimento — por exemplo, como os animais são recebidos e o que
              a equipe considera essencial no cuidado.]
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {["História", "Valores", "Equipe"].map((t) => (
              <div key={t}>
                <p className="font-display text-xl">{t}</p>
                <p className="mt-1 text-xs text-muted-foreground">A preencher</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const galleryImages = [
  { src: heroDog, alt: "Golden retriever após o banho", w: 1280, h: 1536, cls: "row-span-2" },
  { src: catImg, alt: "Gato de pelagem longa descansando sobre uma manta", w: 1024, h: 1024, cls: "" },
  { src: beagleImg, alt: "Beagle enrolado em uma toalha após o banho", w: 1024, h: 1024, cls: "" },
  { src: aboutImg, alt: "Cão de pelagem branca sendo escovado", w: 1024, h: 1280, cls: "col-span-2 lg:col-span-1 lg:row-span-2" },
];

function Gallery() {
  return (
    <section aria-labelledby="galeria-titulo" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>Galeria</Eyebrow>
          <h2 id="galeria-titulo" className="font-display text-4xl leading-tight sm:text-5xl">
            Momentos de cuidado
          </h2>
        </Reveal>
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-3">
          {galleryImages.map((img) => (
            <figure key={img.alt} className={`group overflow-hidden rounded-2xl ${img.cls}`}>
              <img
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section aria-labelledby="depoimentos-titulo" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal>
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 id="depoimentos-titulo" className="font-display text-4xl leading-tight sm:text-5xl">
            O que dizem as famílias que atendemos
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Em breve, publicaremos aqui avaliações reais de nossos clientes, sempre com autorização.
          </p>
          <WhatsAppButton
            variant="outline"
            className="mt-10"
            message="Olá! Gostaria de deixar minha avaliação sobre o atendimento."
          >
            Já é cliente? Conte sua experiência
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const { address, phoneDisplay, email, openingHours } = siteConfig;
  return (
    <section id="contato" className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2rem] bg-primary text-primary-foreground lg:grid-cols-2">
            <div className="p-10 sm:p-14">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/70">
                Contato
              </p>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Vamos cuidar do seu pet juntos?
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-primary-foreground/80">
                Envie uma mensagem para conversar sobre o que seu pet precisa e combinar um horário.
              </p>
              <WhatsAppButton variant="light" className="mt-10">
                Agendar pelo WhatsApp
              </WhatsAppButton>
            </div>
            <dl className="grid gap-8 bg-foreground/10 p-10 sm:p-14">
              <div>
                <dt className="text-xs uppercase tracking-widest text-primary-foreground/70">Endereço</dt>
                <dd className="mt-2 font-display text-xl">
                  {address ? (
                    <a href={mapsUrl(address)} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 underline-offset-4 hover:underline">
                      <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                      {address}
                    </a>
                  ) : (
                    "Endereço a confirmar"
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-primary-foreground/70">Telefone</dt>
                <dd className="mt-2 font-display text-xl">{phoneDisplay || "A confirmar"}</dd>
              </div>
              {email && (
                <div>
                  <dt className="text-xs uppercase tracking-widest text-primary-foreground/70">E-mail</dt>
                  <dd className="mt-2 font-display text-xl">
                    <a href={`mailto:${email}`} className="hover:underline">{email}</a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-xs uppercase tracking-widest text-primary-foreground/70">Horário</dt>
                <dd className="mt-2 space-y-1 font-display text-xl">
                  {openingHours.length
                    ? openingHours.map((h) => <p key={h.days}>{h.days}: {h.hours}</p>)
                    : "Horário a confirmar"}
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const { name, social, phoneDisplay, email } = siteConfig;
  const socials = [
    { label: "Instagram", href: social.instagram },
    { label: "Facebook", href: social.facebook },
  ].filter((s) => s.href);
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-2xl">{name}</p>
          <p className="mt-3 text-sm text-muted-foreground">Banho, tosa e cuidados para cães e gatos.</p>
        </div>
        <nav aria-label="Rodapé">
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-foreground">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-2 text-sm text-muted-foreground">
          {phoneDisplay && <p>{phoneDisplay}</p>}
          {email && <p>{email}</p>}
          <WhatsAppButton variant="outline" className="px-5 py-2">Falar no WhatsApp</WhatsAppButton>
          {socials.length > 0 && (
            <ul className="flex gap-4 pt-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">{s.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <p className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
