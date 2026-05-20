import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Leistungen from "@/components/sections/Leistungen";
import Projekte from "@/components/sections/Projekte";
import Prozess from "@/components/sections/Prozess";
import Restaurierung from "@/components/sections/Restaurierung";
import Stimmen from "@/components/sections/Stimmen";
import Ueber from "@/components/sections/Ueber";
import Kontakt from "@/components/sections/Kontakt";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Leistungen />
      <Projekte />
      <Prozess />
      <Restaurierung />
      <Stimmen />
      <Ueber />
      <Kontakt />
      <Footer />
    </main>
  );
};

export default Index;
