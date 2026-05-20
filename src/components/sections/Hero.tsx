import heroImg from "@/assets/hero-werkstatt.jpg";

const TRUST = [
  "Meisterbetrieb",
  "Maßanfertigung",
  "Region Osnabrück",
  "Persönliche Betreuung",
  "Hochwertige Materialien",
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-secondary"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Tischler in der Werkstatt zeichnet auf einem Holzbrett"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-fade-in"
          loading="eager"
          fetchpriority="high"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-[hsl(24_15%_8%/0.45)] via-[hsl(24_15%_8%/0.12)] to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[hsl(38_28%_94%/0.65)] via-[hsl(38_28%_94%/0.2)] to-transparent md:via-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent via-background/70 to-background"
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="container-x flex-1 flex items-center pt-32 md:pt-40">
          <div className="max-w-3xl">
            <p
              className="text-[11px] uppercase tracking-[0.36em] font-medium text-foreground/70 mb-10 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Tischlerei · Innenausbau · seit 1978
            </p>

            <h1
              className="font-serif font-light leading-[1.02] tracking-[-0.02em] text-foreground animate-fade-up text-[44px] sm:text-6xl md:text-7xl lg:text-[96px]"
              style={{ animationDelay: "350ms" }}
            >
              Maßgefertigter
              <br />
              Innenausbau mit
              <br />
              <span className="italic">Ruhe und Präzision.</span>
            </h1>

            <p
              className="mt-8 max-w-xl text-[15px] md:text-[17px] leading-relaxed text-foreground/80 animate-fade-up"
              style={{ animationDelay: "550ms" }}
            >
              Eichenwerk plant und fertigt Einbaumöbel, Küchen, Treppen
              und ganze Innenräume — entworfen für Ihren Raum, gefertigt
              in der eigenen Werkstatt im Osnabrücker Land.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 animate-fade-up"
              style={{ animationDelay: "750ms" }}
            >
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center bg-foreground text-background px-8 py-[16px] text-[14px] tracking-[0.06em] hover:bg-foreground/90 transition-colors duration-500"
              >
                <span>Projekt besprechen</span>
                <span className="ml-3 inline-block transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#projekte"
                className="group inline-flex items-center text-[14px] tracking-[0.06em] text-foreground self-start sm:self-auto"
              >
                <span className="relative pb-1">
                  Arbeiten ansehen
                  <span className="absolute left-0 bottom-0 h-px w-full bg-foreground/60 transition-all duration-500 group-hover:bg-foreground" />
                </span>
              </a>
            </div>

            <ul
              className="mt-14 md:mt-20 flex flex-wrap gap-x-6 gap-y-3 max-w-2xl animate-fade-up"
              style={{ animationDelay: "950ms" }}
            >
              {TRUST.map((t, i) => (
                <li
                  key={t}
                  className="flex items-center gap-3 text-[11px] md:text-[12px] tracking-[0.18em] uppercase text-foreground/70"
                >
                  {i > 0 && <span aria-hidden className="h-px w-4 bg-foreground/30" />}
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
