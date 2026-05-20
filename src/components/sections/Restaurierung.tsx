import Reveal from "@/components/Reveal";
import detailImg from "@/assets/restaurierung-detail.png";

const WERTE = [
  { k: "Vor Ort gefertigt", v: "Eigene Werkstatt im Osnabrücker Land — kurze Wege, direkte Absprache." },
  { k: "Direkte Kommunikation", v: "Ein Ansprechpartner vom Entwurf bis zur Montage. Keine Zwischenstellen." },
  { k: "Langlebige Materialien", v: "Massive europäische Hölzer, geölte Oberflächen, schadstoffarme Verarbeitung." },
  { k: "Präzise Ausführung", v: "Konstruktion, Detail und Fuge — sichtbar gemacht durch Sorgfalt im Maß." },
];

const Restaurierung = () => {
  return (
    <section id="werkstatt" className="bg-secondary py-28 md:py-44">
      <div className="container-x">
        <Reveal>
          <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <div className="overflow-hidden bg-background">
                <img
                  src={detailImg}
                  alt="Restaurierter antiker Holzschrank mit Messingbeschlägen, warmes Tageslicht"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>

            <div className="md:col-span-5 order-1 md:order-2">
              <p className="eyebrow mb-6">Haltung</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-light leading-[1.05]">
                Handwerk
                <br />
                <span className="italic text-muted-foreground">aus dieser Region.</span>
              </h2>
              <p className="mt-8 text-foreground/75 text-[16px] leading-relaxed max-w-md">
                Eichenwerk ist eine kleine Tischlerei. Alles, was hier entsteht,
                wird in der eigenen Werkstatt gefertigt — von Hand, mit Maß und Zeit.
              </p>

              <div className="hairline my-10 max-w-md" />

              <ul className="space-y-6 max-w-md">
                {WERTE.map((w) => (
                  <li key={w.k}>
                    <p className="text-[12px] tracking-[0.2em] uppercase text-foreground/70 mb-2">
                      {w.k}
                    </p>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">{w.v}</p>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="mt-10 inline-flex items-center text-[14px] tracking-[0.06em] link-underline"
              >
                Beratung vereinbaren →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Restaurierung;
