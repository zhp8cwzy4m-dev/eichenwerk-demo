import Reveal from "@/components/Reveal";

const STIMMEN = [
  {
    quote: "Ruhig, präzise und auf jedes Detail bedacht. Unser Wohnraum wirkt jetzt wie aus einem Guss.",
    context: "Familie K. · Osnabrück",
  },
  {
    quote: "Die Beratung war ehrlich, die Planung klar, die Montage termingenau. Alles aus einer Hand.",
    context: "Bauherr · Bissendorf",
  },
  {
    quote: "Eine Küche, die nicht nach Möbelhaus aussieht, sondern nach unserem Haus. Genau richtig.",
    context: "Privatkundin · Belm",
  },
];

const Stimmen = () => {
  return (
    <section className="bg-background py-28 md:py-40">
      <div className="container-x">
        <Reveal>
          <div className="reveal max-w-xl mb-20 md:mb-24">
            <p className="eyebrow mb-6">Stimmen</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1]">
              Was Bauherren
              <br />
              <span className="italic text-muted-foreground">und Familien sagen.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-x-10 lg:gap-x-16 gap-y-16">
            {STIMMEN.map((s, i) => (
              <figure key={i} className="flex flex-col">
                <div className="hairline mb-8" />
                <blockquote className="font-serif text-[22px] md:text-[24px] font-light leading-[1.35] text-foreground/90">
                  „{s.quote}"
                </blockquote>
                <figcaption className="mt-8 text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.context}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="reveal mt-20 md:mt-24 text-[12px] tracking-[0.22em] uppercase text-muted-foreground text-center">
            Auszüge aus Kundenstimmen
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Stimmen;
