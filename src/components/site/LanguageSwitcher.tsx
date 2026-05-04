import { LANGS, type Lang } from "@/i18n/dictionaries";
import { useT } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { lang, setLang } = useT();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-primary-foreground/20 p-0.5">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code as Lang)}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
            lang === l.code
              ? "bg-accent text-accent-foreground"
              : "text-primary-foreground/70 hover:text-accent",
          )}
          aria-label={`Switch to ${l.label}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}