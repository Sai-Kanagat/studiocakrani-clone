import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Scale,
  Gavel,
  Building2,
  Briefcase,
  Globe2,
  ShieldCheck,
  Award,
  MapPinned,
  Lock,
  ArrowRight,
  Quote,
} from "lucide-react";
import portrait from "@/assets/kujtim-cakrani.jpg";
import { useT } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Ligjore Cakrani — Best Lawyer in Albania | SPAK & ECHR" },
      {
        name: "description",
        content:
          "Studio Ligjore Cakrani: leading Albanian law firm. SPAK legal representation, Strasbourg Human Rights lawyer, civil, penal, administrative & corporate law. Tirana, Vlorë, Fier.",
      },
      {
        property: "og:title",
        content: "Studio Ligjore Cakrani — Excellence in Legal Representation",
      },
      {
        property: "og:description",
        content:
          "Important cases all over Albania, with significant expertise at SPAK and the European Court of Human Rights in Strasbourg.",
      },
      { property: "og:image", content: portrait },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Studio Ligjore Cakrani",
          founder: { "@type": "Person", name: "Kujtim Cakrani" },
          telephone: "+355699413001",
          email: "studiocakrani@gmail.com",
          areaServed: "Albania",
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "Kompleksi Kika 2",
              addressLocality: "Tirana",
              addressCountry: "AL",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Rruga Sali Hali Kokonodi",
              addressLocality: "Vlorë",
              addressCountry: "AL",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Near Court of First Instance",
              addressLocality: "Fier",
              addressCountry: "AL",
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useT();

  const services = [
    { icon: Scale, key: "civil" },
    { icon: Gavel, key: "penal" },
    { icon: Building2, key: "admin" },
    { icon: Briefcase, key: "corp" },
  ];

  const pillars = [
    { icon: Award, k: "track" },
    { icon: MapPinned, k: "reach" },
    { icon: Globe2, k: "intl" },
    { icon: Lock, k: "discretion" },
  ];

  const testimonials = [
    {
      name: "A. Hoxha",
      role: "Klient privat",
      quote:
        "Profesionalizëm i jashtëzakonshëm dhe rezultate konkrete. Më ndjeva i mbrojtur në çdo hap.",
    },
    {
      name: "M. Beci",
      role: "Drejtues biznesi",
      quote:
        "Studio Cakrani na ofroi konsulencë të pazëvendësueshme në një çështje komplekse tregtare.",
    },
    {
      name: "E. Lleshi",
      role: "Klient ndërkombëtar",
      quote:
        "Përfaqësim i përsosur deri në Strasburg. Etikë, përkushtim dhe njohuri të thella ligjore.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
          <div>
            <p className="font-serif text-sm uppercase tracking-[0.3em] text-accent">
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <div className="mt-6 h-px w-24 bg-accent" />
            <p className="mt-6 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">{t("cta.contact")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/services">
                  {t("cta.services")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-10 text-xs uppercase tracking-widest text-primary-foreground/60">
              {t("hero.trust")}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-lg border border-accent/40" />
            <img
              src={portrait}
              alt="Kujtim Cakrani — Avokat dhe Themelues, Studio Ligjore Cakrani"
              className="relative h-[460px] w-full rounded-lg object-cover shadow-2xl sm:h-[560px]"
              loading="eager"
            />
            <div className="absolute -bottom-5 left-6 right-6 rounded-md bg-card px-5 py-3 text-card-foreground shadow-xl sm:left-10 sm:right-auto">
              <p className="font-serif text-lg">Kujtim Cakrani</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {t("about.role")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="01" title={t("services.title")} subtitle={t("services.subtitle")} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl">{t(`services.${key}.title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(`services.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECHR & SPAK */}
      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FeatureBlock
            icon={Globe2}
            title={t("echr.title")}
            desc={t("echr.desc")}
            tag="Strasbourg · ECHR"
          />
          <FeatureBlock
            icon={ShieldCheck}
            title={t("spak.title")}
            desc={t("spak.desc")}
            tag="SPAK · Albania"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="02" title={t("why.title")} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, k }) => (
              <div key={k} className="border-l-2 border-accent pl-5">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-3 font-serif text-lg">{t(`why.${k}`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(`why.${k}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl sm:text-4xl">
            {t("testimonials.title")}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((q) => (
              <figure
                key={q.name}
                className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-6"
              >
                <Quote className="h-6 w-6 text-accent" />
                <blockquote className="mt-4 font-serif text-lg leading-snug">
                  "{q.quote}"
                </blockquote>
                <figcaption className="mt-4 text-sm text-primary-foreground/70">
                  <span className="text-accent">{q.name}</span> — {q.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 text-accent-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl">
            {t("contact.subtitle")}
          </h2>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">
              {t("cta.contact")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-accent">— {eyebrow} —</p>
      )}
      <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

function FeatureBlock({
  icon: Icon,
  title,
  desc,
  tag,
}: {
  icon: typeof Globe2;
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <div className="relative rounded-lg border border-border bg-card p-8 shadow-sm">
      <div className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
        {tag}
      </div>
      <Icon className="h-10 w-10 text-primary" />
      <h3 className="mt-5 font-serif text-2xl">{title}</h3>
      <p className="mt-3 text-muted-foreground">{desc}</p>
    </div>
  );
}
