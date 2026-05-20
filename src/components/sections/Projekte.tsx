import Reveal from "@/components/Reveal";
import dachbodenImg from "@/assets/projekt-dachboden.jpg";
import scheuneImg from "@/assets/projekt-scheune.jpg";
import wohnraumImg from "@/assets/projekt-wohnraum.jpg";

const PROJEKTE = [
  {
    title: "Ein ruhiger Wohnraum unter dem Dach",
    ort: "Belm",
    jahr: "2024",
    kategorie: "Dachgeschossausbau",
    text: "Vom ungenutzten Dachgeschoss zum hellen Wohnraum mit maßgefertigten Einbauten. Eichenboden, raumhohe Schränke und eine freigelegte Dachstruktur, die der Konstruktion ihre Ruhe lässt.",
    img: dachbodenImg,
    alt: "Ausgebauter heller Dachboden mit Einbaumöbeln aus Eiche und Dachfenster",
  },
  {
    title: "Eine Wand wird zur Bibliothek",
    ort: "Osnabrück",
    jahr: "2024",
    kategorie: "Einbaumöbel",
    text: "Eine raumhohe Eichenwand als stille Bibliothek im Altbau. Millimetergenau eingepasst zwischen zwei tragenden Wänden, in der eigenen Werkstatt vorgefertigt und vor Ort montiert.",
    img: wohnraumImg,
    alt: "Großzügiges Wohnzimmer mit raumhoher Wand aus Eichenregalen und warmem Tageslicht",
  },
  {
    title: "Scheune wird Wohnort",
    ort: "Osnabrücker Land",
    jahr: "2023",
    kategorie: "Innenausbau & Küche",
    text: "Behutsame Umnutzung einer alten Hofscheune zu einem Wohnhaus für eine Familie. Sichtbare Balken, eine ruhige Küche aus geölter Esche und neue Innentüren in der Sprache des Bestands.",
    img: scheuneImg,
    alt: "Innenraum einer zur Ferienwohnung umgebauten Scheune mit Holzbalken und Holzküche",
  },
];

const Projekte = () => {
  return (
    <section id="projekte" className="bg-secondary py-28 md:py-44">
      <div className="container-x">
        <Reveal>
          <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-32">
            <div className="max-w-xl">
              <p className="eyebrow mb-6">Ausgewählte Projekte</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]">
                Räume, die <span className="italic">bleiben.</span>
              </h2>
            </div>
            <a href="#kontakt" className="link-underline text-sm tracking-wide self-start md:self-auto">
              Projekt besprechen
            </a>
          </div>
        </Reveal>

        <div className="space-y-32 md:space-y-56">
          {PROJEKTE.map((p, i) => (
            <Reveal key={p.title}>
              <article
                className={`reveal grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end ${
                  i % 2 === 1 ? "md:[&>figure]:col-start-5 md:[&>div]:col-start-1 md:[&>div]:row-start-1" : ""
                }`}
              >
                <figure className="md:col-span-8 overflow-hidden bg-background">
                  <img
                    src={p.img}
                    alt={p.alt}
                    width={1920}
                    height={1200}
                    loading="lazy"
                    className="h-full w-full object-cover aspect-[16/10]"
                  />
                </figure>
                <div className="md:col-span-4">
                  <p className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-6">
                    {String(i + 1).padStart(2, "0")} · {p.kategorie}
                  </p>
                  <h3 className="font-serif text-3xl md:text-[34px] font-light mb-5 leading-[1.15]">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed mb-8 max-w-sm">
                    {p.text}
                  </p>
                  <div className="hairline mb-4 max-w-[180px]" />
                  <p className="text-[12px] tracking-[0.18em] uppercase text-foreground/60">
                    {p.ort} · {p.jahr}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projekte;
