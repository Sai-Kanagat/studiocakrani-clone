import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Scale } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 font-serif text-xl">
            <Scale className="h-5 w-5 text-accent" />
            Studio Ligjore <span className="text-accent">Cakrani</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/70">{t("footer.tag")}</p>
        </div>

        <div>
          <h4 className="font-serif text-accent">{t("nav.contact")}</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:+355699413001" className="hover:text-accent">
                +355 69 941 3001
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:studiocakrani@gmail.com" className="hover:text-accent">
                studiocakrani@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-accent">{t("contact.offices")}</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{t("office.tirane.addr")}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{t("office.vlore.addr")}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{t("office.fier.addr")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} Studio Ligjore Cakrani. {t("footer.rights")}
          </p>
          <div className="flex gap-4">
            <Link to="/services" className="hover:text-accent">
              {t("nav.services")}
            </Link>
            <Link to="/contact" className="hover:text-accent">
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}