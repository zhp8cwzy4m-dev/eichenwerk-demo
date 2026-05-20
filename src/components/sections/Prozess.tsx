import Reveal from "@/components/Reveal";

const SCHRITTE = [
  {
    nr: "01",
    title: "Beratung",
    text: "Ein ruhiges Gespräch vor Ort. Wir hören zu, sehen den Raum und verstehen, wie Sie ihn nutzen möchten.",
  },
  {
    nr: "02",
    title: "Planung",
    text: "Wir entwickeln den Entwurf — Material, Konstruktion, Detail. Sie erhalten ein klares Konzept und einen festen Preis.",
  },
  {
    nr: "03",
    title: "Fertigung",
    text: "Alles entsteht in unserer Werkstatt im Osnabrücker Land. Massivholz, präzise Verbindungen, geölte Oberflächen.",
  },
  {
    nr: "04",
    title: "Montage",
    text: "Wir bringen das Stück in Ihren Raum — sauber, termintreu und mit dem letzten Blick aufs Detail.",
  },
];

const Prozess = () => {
  return (
    <section id="prozess" className="bg-background py-28 md:py-40">
      <div className="container-x">
        <Reveal>
          <div className="reveal max-w-2xl mb-20 md:mb-28">
            <p className="eyebrow mb-6">Vorgehen</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]">
              Vier Schritte.
              <br />
              <span className="italic text-muted-foreground">Klar und persönlich.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <ol className="reveal grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
            {SCHRITTE.map((s) => (
              <li key={s.nr} className="flex flex-col">
                <div className="hairline mb-6" />
                <span className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-4">
                  {s.nr}
                </span>
                <h3 className="font-serif text-2xl md:text-[26px] font-light mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground max-w-xs">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};

export default Prozess;
