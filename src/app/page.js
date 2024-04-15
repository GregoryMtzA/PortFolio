import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import ArchievementSection from "@/app/components/ArchievementSection";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import EmailSection from "@/app/components/EmailSection";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212] overflow-x-hidden">
        <Navbar />
        <div className="mx-auto px-12 lg:py-4 py-20 container">
          <HeroSection></HeroSection>
          <ArchievementSection></ArchievementSection>
          <AboutSection></AboutSection>
          <ProjectsSection></ProjectsSection>
          <EmailSection></EmailSection>
        </div>
        <Footer />
    </main>
  );
}
