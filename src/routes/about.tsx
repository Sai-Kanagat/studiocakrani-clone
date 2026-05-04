import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/kujtim-cakrani.jpg";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kujtim Cakrani — Studio Ligjore Cakrani" },
      {
        name: "description",
        content:
          "Kujtim Cakrani — founder of Studio Ligjore Cakrani. Decades of experience in Albanian courts, SPAK matters and ECHR Strasbourg cases.",
      },
      { property: "og:title", content: "About Kujtim Cakrani — Studio Ligjore Cakrani" },
      {
        property: "og:description",
        content:
          "Founder and managing partner — committed to justice, integrity and results across Albania and before the European Court of Human Rights.",
      },
      { property: "og:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useT();
  return (
    <>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-serif text-sm uppercase tracking-[0.3em] text-accent">
            {t("about.role")}
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{t("about.title")}</h1>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:px-8">
          <div className="relative">
            <div className="absolute -inset-3 rounded-lg border border-accent/40" />
            <img
              src={portrait}
              alt="Kujtim Cakrani"
              className="relative w-full rounded-lg object-cover shadow-xl"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl">{t("about.title")}</h2>
            <p className="mt-2 text-sm uppercase tracking-widest text-accent">
              {t("about.role")}
            </p>
            <p className="mt-6 text-muted-foreground">{t("about.bio")}</p>

            <h3 className="mt-10 font-serif text-2xl">{t("about.firm.title")}</h3>
            <p className="mt-3 text-muted-foreground">{t("about.firm.desc")}</p>
          </div>
        </div>
      </section>
    </>
  );
}