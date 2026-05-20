import Reveal from "@/components/Reveal";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Kontakt = () => {
  return (
    <section id="kontakt" className="bg-accent text-accent-foreground py-24 md:py-40">
      <div className="container-x">
        <Reveal>
          <div className="reveal max-w-3xl">
            <p className="eyebrow mb-6 text-accent-foreground/60">Kontakt</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-accent-foreground">
              Lassen Sie uns
              <br />
              <span className="italic">in Ruhe sprechen.</span>
            </h2>
            <p className="mt-8 text-accent-foreground/70 text-base md:text-lg max-w-xl">
              Erzählen Sie uns von Ihrem Vorhaben — kurz per Telefon, E-Mail oder Nachricht.
              Wir melden uns persönlich zurück und vereinbaren einen Termin vor Ort.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="reveal mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-accent-foreground/15">
            <a
              href="tel:+495418098450"
              className="group bg-accent p-8 md:p-10 flex flex-col gap-4 transition-colors duration-500 hover:bg-accent-foreground/5"
            >
              <Phone className="h-5 w-5 text-accent-foreground/70" strokeWidth={1.25} />
              <p className="text-xs uppercase tracking-[0.2em] text-accent-foreground/60">Telefon</p>
              <p className="font-serif text-2xl md:text-3xl font-light">0541 80 98 450</p>
            </a>
            <a
              href="https://wa.me/495418098450"
              target="_blank"
              rel="noreferrer"
              className="group bg-accent p-8 md:p-10 flex flex-col gap-4 transition-colors duration-500 hover:bg-accent-foreground/5"
            >
              <MessageCircle className="h-5 w-5 text-accent-foreground/70" strokeWidth={1.25} />
              <p className="text-xs uppercase tracking-[0.2em] text-accent-foreground/60">WhatsApp</p>
              <p className="font-serif text-2xl md:text-3xl font-light">Nachricht senden</p>
            </a>
            <a
              href="mailto:mail@eichenwerk.de"
              className="group bg-accent p-8 md:p-10 flex flex-col gap-4 transition-colors duration-500 hover:bg-accent-foreground/5"
            >
              <Mail className="h-5 w-5 text-accent-foreground/70" strokeWidth={1.25} />
              <p className="text-xs uppercase tracking-[0.2em] text-accent-foreground/60">E-Mail</p>
              <p className="font-serif text-2xl md:text-3xl font-light break-all">mail@eichenwerk.de</p>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Kontakt;
