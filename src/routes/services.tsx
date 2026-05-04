import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Scale,
  Gavel,
  Building2,
  Briefcase,
  Globe2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Studio Ligjore Cakrani | SPAK & ECHR Strasbourg" },
      {
        name: "description",
        content:
          "Civil, penal, administrative and corporate law representation in Albania, plus SPAK and ECHR Strasbourg expertise from Studio Ligjore Cakrani.",
      },
      { property: "og:title", content: "Services — Studio Ligjore Cakrani" },
      {
        property: "og:description",
        content:
          "Specialised legal representation across every branch of the law, with significant SPAK and Strasbourg ECHR experience.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useT();
  const items = [
    { icon: Scale, k: "civil" },
    { icon: Gavel, k: "penal" },
    { icon: Building2, k: "admin" },
    { icon: Briefcase, k: "corp" },
  ];
  return (
    <>
      <PageHeader title={t("services.title")} subtitle={t("services.subtitle")} />

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 sm:grid-cols-2 lg:px-8">
          {items.map(({ icon: Icon, k }) => (
            <article
              key={k}
              className="rounded-lg border border-border bg-card p-8 transition-colors hover:border-accent"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-2xl">{t(`services.${k}.title`)}</h2>
              </div>
              <p className="mt-4 text-muted-foreground">{t(`services.${k}.desc`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <Highlight icon={Globe2} title={t("echr.title")} desc={t("echr.desc")} tag="ECHR · Strasbourg" />
          <Highlight icon={ShieldCheck} title={t("spak.title")} desc={t("spak.desc")} tag="SPAK · Albania" />
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:px-8">
          <h2 className="font-serif text-2xl">{t("contact.subtitle")}</h2>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">
              {t("cta.contact")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl">{title}</h1>
        <div className="mx-auto mt-4 h-px w-16 bg-accent" />
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

function Highlight({
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
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <Icon className="h-12 w-12 shrink-0 text-primary" />
        <div>
          <h3 className="font-serif text-2xl">{title}</h3>
          <p className="mt-3 text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  );
}