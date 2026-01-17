"use client";

import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import GlitchText from "@/components/GlitchText";
import NeonButton from "@/components/NeonButton";
import Card from "@/components/Card";
import SkillBadge from "@/components/SkillBadge";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "MyVinmec – Trợ lý sức khỏe",
    desc: "MyVinmec - a smart healthcare assistant for superior health.",
    tags: ["Mobile App", "Healthcare"],
    link: "https://play.google.com/store/apps/details?id=com.vinmec.onevinmec&hl=vi&pli=1",
    image: "/images/projects/vinmec.png"
  },
  {
    title: "Mytel mBCCS",
    desc: "mBCCS - a sales support mobile app for Viettel (Myanmar)",
    tags: ["Mobile App", "Sales", "Enterprise"],
    link: "https://play.google.com/store/apps/details?id=com.viettel.mbccs.bur2&hl=vi",
    image: "/images/projects/mbccs-bur2.png"
  },
  {
    title: "Unitel CustomerCarePro",
    desc: "CustomerCarePro - a CRM and sales management mobile app for Viettel (Laos).",
    tags: ["Mobile App", "CRM", "Enterprise"],
    link: "https://play.google.com/store/apps/details?id=com.viettel.mbccs.lao&hl=vi",
    image: "/images/projects/mbccs-lao.png"
  },
  {
    title: "PixArt - AI Photo Generator",
    desc: "PixArt AI - an AI-powered photo editor and beauty optimizer.",
    tags: ["AI", "Image Processing"],
    link: "https://play.google.com/store/apps/details?id=tera.aiartgenerator.aiphoto.aiphotoenhancer&hl=vi",
    image: "/images/projects/pixart.png"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-300 overflow-x-hidden selection:bg-neon-purple selection:text-white">
      <div className="fixed inset-0 cyber-grid z-0 pointer-events-none opacity-20" />

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neon-blue font-mono mb-4 tracking-widest"
          >
            QUAN_TA
          </motion.p>
          <div className="mb-6">
            <GlitchText
              text="TRAN_ANH_QUAN"
              as="h1"
              className="text-4xl md:text-7xl lg:text-9xl text-white tracking-tighter"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-3xl text-gray-400 font-light mb-10"
          >
            MOBILE_APP_DEVELOPER <span className="text-neon-purple mx-2">//</span> JETPACK COMPOSER
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <NeonButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </NeonButton>
            <NeonButton variant="purple" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </NeonButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-neon-blue to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <Section id="about" title="About_Me">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I am a Mobile App Developer passionate about building high-performance applications with <span className="text-neon-blue">Kotlin</span>, <span className="text-neon-purple">Jetpack Compose</span>, and <span className="text-neon-green">Kotlin Multiplatform</span>.
            </p>
            <p>
              My journey has taken me from startups to enterprise environments, architecting clean, scalable codebases at **Apero Technology Group**, **SMAC JSC**, and **Zen8Labs**. I specialize in Clean Architecture, MVVM/MVP patterns, and integrating complex APIs with seamless UI/UX.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple opacity-20 blur-3xl rounded-full" />
            <Card className="border-neon-blue/30 bg-black/80">
              <pre className="text-sm md:text-base text-neon-green overflow-x-auto">
                <code>
                  {`{
  "name": "Quan Anh Tran",
  "status": "Online",
  "location": "Ha Noi, Viet Nam",
  "hobbies": [
    "Coding",
    "Listen Music",
    "Play Game",
    "Traveling"
  ]
}`}
                </code>
              </pre>
            </Card>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience_Log">
        <div className="relative border-l border-gray-800 ml-4 md:ml-10 space-y-12">
          {[
            {
              role: "Junior Mobile App Developer",
              company: "Apero Technology Group",
              period: "July 2025 - Present",
              desc: "Developing mobile applications modern cross platform using Kotlin, Jetpack Compose, Kotlin Multiplatform."
            },
            {
              role: "Mobile App Developer",
              company: "SMAC JSC",
              period: "July 2025 - October 2025",
              desc: "Developing mobile applications using Java & Kotin, Clean Architecture, MVP, Busines App Architecture, API Gateway, JWT, Docker, Kubernetes, GitLab CI/CD."
            },
            {
              role: "Intern Mobile App Developer",
              company: "Zen8Labs",
              period: "January 2025 - July 2025",
              desc: "Developed mobile applications using Kotlin and XML, Clean Architecture, MVVM."
            },
            {
              role: "Software Engineer",
              company: "Hanoi Open University",
              period: "2022 - 2026",
              desc: "Graduated with Good Degree (GPA 3.2/4.0). Specialized in Software Engineering and Mobile Development."
            }
          ].map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neon-purple shadow-[0_0_10px_#bc13fe]" />
              <h3 className="text-2xl font-bold text-white">{job.role}</h3>
              <p className="text-neon-blue mb-2 font-mono text-sm">{job.company} | {job.period}</p>
              <p className="text-gray-400">{job.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <Card key={index} delay={index * 0.1} className="h-full flex flex-col justify-between hover:border-neon-purple transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-gray-800 group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex gap-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-neon-blue">{tag}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skill_Matrix">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            "Java", "Kotlin", "Jetpack Compose", "Flutter", "Dart", "C#", ".Net6+",
            "Node.js", "TypeScript", "HTML", "CSS",
            "React", "Next.js", "SQL Server", "MySQL", "PostgreSQL", "MongoDB", "SQLite",
            "Docker", "AWS", "Firebase",
            "Git", "CI/CD", "Agile", "UI/UX Design", "Figma", "Codex", "ChatGPT", "Gemini"
          ].map((skill, i) => (
            <SkillBadge key={skill} name={skill} delay={i * 0.05} />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Establish_Link">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-8">
            Currently available for freelance contracts and secret missions.
            If you have a project that needs a cyberpunk touch, initiate the protocol.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:anhquanste@gmail.com" className="group flex items-center gap-2 text-white hover:text-neon-blue transition-colors">
              <div className="p-3 border border-gray-700 rounded-full group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <span className="hidden md:inline">anhquanste@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/anh-quan-tran-2356a134b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-white hover:text-neon-blue transition-colors">
              <div className="p-3 border border-gray-700 rounded-full group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="hidden md:inline">LinkedIn</span>
            </a>
            <a href="https://github.com/kedokato-dev" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-white hover:text-neon-blue transition-colors">
              <div className="p-3 border border-gray-700 rounded-full group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all">
                <Github className="w-6 h-6" />
              </div>
              <span className="hidden md:inline">GitHub</span>
            </a>
          </div>
        </div>
      </Section>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900">
        <p>© 2026 QUAN_TA. ALL SYSTEMS NORMAL.</p>
      </footer>
    </main>
  );
}
