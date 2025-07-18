import Avatar from "@/components/home/Avatar";
import AboutSection from "@/components/common/AboutSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import EducationSection from "@/components/education/EducationSection";
import ContactSection from "@/components/common/ContactSection";
import NavBar from "@/components/common/NavBar";

export default function HomePage() {
  return (
    <main>
      <section id="home" className="min-h-screen flex flex-col items-center justify-center">
        <NavBar />
        <Avatar />
      </section>
      <section id="about"><AboutSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="skills"><SkillsSection /></section>
      <section id="experience"><ExperienceSection /></section>
      <section id="education"><EducationSection /></section>
      <section id="contact"><ContactSection /></section>
    </main>
  );
}