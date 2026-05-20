import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Prozess", href: "#prozess" },
  { label: "Werkstatt", href: "#ueber" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const onLight = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        onLight
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 text-foreground"
          : "bg-transparent text-background"
      }`}
    >
      <div className="container-x flex h-24 md:h-28 items-center justify-between">
        <a href="#top" className="flex flex-col leading-none" aria-label="Eichenwerk Innenausbau">
          <span className="font-serif text-2xl md:text-[28px] font-light tracking-tight">
            Eichenwerk
          </span>
          <span className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase opacity-70 mt-1">
            Innenausbau
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-light tracking-wide opacity-90 hover:opacity-100 transition-opacity duration-300"
            >
              {item.label}
            </a>
          ))}
          <span
            aria-hidden
            className={`h-5 w-px ${onLight ? "bg-border" : "bg-background/40"}`}
          />
          <a
            href="tel:+495418098450"
            aria-label="Anrufen"
            className="opacity-90 hover:opacity-100 transition-opacity duration-300"
          >
            <Phone className="h-[17px] w-[17px]" strokeWidth={1.5} />
          </a>
        </nav>

        <button
          className="md:hidden -mr-2 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </div>

      {!onLight && (
        <div className="container-x">
          <div className="h-px w-full bg-background/25" />
        </div>
      )}

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container-x py-10 flex flex-col gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl font-light"
            >
              {item.label}
            </a>
          ))}
          <div className="hairline mt-2" />
          <a href="tel:+495418098450" className="text-sm tracking-wide text-muted-foreground">
            0541 / 80 98 450
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
