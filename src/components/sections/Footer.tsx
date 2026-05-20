const ORTE = [
  "Osnabrück",
  "Belm",
  "Bissendorf",
  "Ostercappeln",
  "Bad Essen",
  "Wallenhorst",
  "Bohmte",
  "Georgsmarienhütte",
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl">Eichenwerk</p>
            <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mt-1">
              Innenausbau
            </p>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm">
              Meistertischlerei für maßgefertigten Innenausbau, Möbel, Küchen und Treppen
              im Raum Osnabrück.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Einsatzgebiet</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{ORTE.join(" · ")}</p>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Kontakt</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+495418098450" className="link-underline text-foreground">
                  0541 80 98 450
                </a>
              </li>
              <li>
                <a href="mailto:mail@eichenwerk.de" className="link-underline text-foreground">
                  mail@eichenwerk.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-16 mb-6" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Eichenwerk Innenausbau · Osnabrücker Land</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
            <a href="#" className="hover:text-foreground transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
