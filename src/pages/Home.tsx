import React from "react";
import Hero from "@/sections/home/Hero";
import { Stats } from "@/sections/home/Stats";
import { Experience } from "@/sections/home/Experience";
import { CustomerJourney } from "@/sections/home/CustomerJourney";
import GroupCompanies from "@/sections/shared/GroupCompanies";
import { Portfolio } from "@/sections/home/Portfolio";
import { ValueContact } from "@/sections/home/ValueContact";
import { ContactForm } from "@/sections/home/ContactForm";
import { TextMarquee } from "@/sections/home/TextMarquee";

export const Home: React.FC = () => {
  return (
    <main className="w-full min-h-screen flex flex-col bg-surface">
      <Hero />
      <Stats />
      <Experience />
      <CustomerJourney />
      <GroupCompanies />
      <Portfolio />
      <ValueContact />
      <ContactForm />
      <TextMarquee />
    </main>
  );
};

export default Home;
