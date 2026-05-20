import Reveal from "@/components/Reveal";
import portrait from "@/assets/portrait-martin.jpg";

const Ueber = () => {
  return (
    <section id="ueber" className="bg-background py-24 md:py-40">
      <div className="container-x">
        <Reveal>
          <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5">
              <div className="overflow-hidden bg-secondary aspect-[4/5] max-w-md">
                <img
                  src={portrait}
                  alt="Porträt eines Tischlermeisters aus dem Osnabrücker Land"
                  width={1080}
                  height={1350}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7 md:pl-8">
              <p className="eyebrow mb-6">Werkstatt</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]">
                Eine Werkstatt.
                <br />
                <span className="italic text-muted-foreground">Ein Anspruch.</span>
              </h2>

              <div className="mt-10 space-y-6 text-foreground/80 text-[16px] leading-relaxed max-w-xl">
                <p>
                  Eichenwerk ist eine Meistertischlerei im Osnabrücker Land. In einem kleinen Team
                  planen und fertigen wir Innenausbau, Einbaumöbel, Küchen und Treppen — für
                  Bauherren, Architekten und Familien, die Wert auf ruhige, dauerhafte Räume legen.
                </p>
                <p>
                  Wir arbeiten überwiegend mit massiver europäischer Eiche, Esche und Nussbaum.
                  Oberflächen werden geölt, Verbindungen sichtbar gemacht. Es soll halten,
                  wenn andere Möbel längst ersetzt werden.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="hairline mb-3" />
                  <p className="font-serif text-3xl font-light">1978</p>
                  <p className="text-xs text-muted-foreground tracking-wide mt-1">Gegründet</p>
                </div>
                <div>
                  <div className="hairline mb-3" />
                  <p className="font-serif text-3xl font-light">Meister</p>
                  <p className="text-xs text-muted-foreground tracking-wide mt-1">Geführter Betrieb</p>
                </div>
                <div>
                  <div className="hairline mb-3" />
                  <p className="font-serif text-3xl font-light">OS</p>
                  <p className="text-xs text-muted-foreground tracking-wide mt-1">Raum Osnabrück</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Ueber;
