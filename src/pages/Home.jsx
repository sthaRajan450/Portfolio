import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "@/components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;
