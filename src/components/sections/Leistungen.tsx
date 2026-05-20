import Reveal from "@/components/Reveal";
import moebelImg from "@/assets/leistung-moebel.png";
import innenausbauImg from "@/assets/leistung-innenausbau.jpg";
import restaurierungImg from "@/assets/leistung-restaurierung.png";

const LEISTUNGEN = [
  {
    nr: "01",
    title: "Innenausbau",
    text: "Wand, Boden, Decke, Einbauten — ein durchdachter Raum aus einer Hand. Vom Dachgeschoss bis zur Wandverkleidung.",
    img: innenausbauImg,
    alt: "Heller Innenausbau mit Eichenboden und freigelegten Holzbalken",
    items: ["Räume & Renovierungen", "Wand- und Deckenverkleidungen", "Türen & Zargen", "Dachgeschossausbau"],
  },
  {
    nr: "02",
    title: "Möbel & Küchen",
    text: "Einbaumöbel, Schränke, Tische und Küchen — entworfen für Ihren Raum, gefertigt in massiver Eiche, Esche oder Nussbaum.",
    img: moebelImg,
    alt: "Maßgefertigter Einbauschrank aus Eiche in einem ruhigen Wohnraum",
    items: ["Einbauschränke", "Maßgefertigte Küchen", "Tische & Sideboards", "Ankleiden & Garderoben"],
  },
  {
    nr: "03",
    title: "Treppen & Restaurierung",
    text: "Massivholztreppen mit ruhiger Linie. Alte Möbel und Türen behutsam aufgearbeitet — Material und Patina respektiert.",
    img: restaurierungImg,
    alt: "Detail einer restaurierten alten Holztür mit Messingbeschlag",
    items: ["Massivholztreppen", "Geländer & Handläufe", "Möbelrestaurierung", "Historische Türen"],
  },
];

const Leistungen = () => {
  return (
    <section id="leistungen" className="bg-background py-28 md:py-44">
      <div className="container-x">
        <Reveal>
          <div className="reveal max-w-2xl mb-20 md:mb-28">
            <p className="eyebrow mb-6">Leistungen</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]">
              Drei Bereiche.
              <br />
              <span className="italic text-muted-foreground">Eine Handschrift.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-20 md:gap-y-0">
            {LEISTUNGEN.map((l) => (
              <article key={l.nr} className="reveal group">
                <div className="overflow-hidden bg-secondary aspect-[3/4] mb-8">
                  <img
                    src={l.img}
                    alt={l.alt}
                    width={1080}
                    height={1440}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform [transition-duration:1400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[11px] text-muted-foreground tracking-[0.24em]">{l.nr}</span>
                  <div className="hairline flex-1" />
                </div>
                <h3 className="font-serif text-2xl md:text-[28px] font-light mb-4 leading-tight">{l.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed max-w-md mb-6">{l.text}</p>
                <ul className="space-y-1.5">
                  {l.items.map((it) => (
                    <li key={it} className="text-[13px] tracking-wide text-foreground/70">
                      — {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Leistungen;
