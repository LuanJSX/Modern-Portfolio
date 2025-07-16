import React from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>👋Olá, sou o</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Luan
          </motion.h1>
          <motion.h2 className="hero-subtitle" values={fadeInUp}>
            {""}
            Desenvolvedor e Designer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Conecto design e funcionalidade para criar experiências digitais
            impactantes. Meu foco está em aplicações web modernas com interfaces
            fluidas e interativas.
          </motion.p>
          <motion.div className="cta-buttons" values={staggerContainer}>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-primary"
            >
              Projetos
            </motion.a>

            <motion.a
              href="#contacts"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-secondary"
            >
              Contato
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/LuanJSX" target="_blank">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/luan-batista-9223a41a1/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter language="typescript" customStyle={{margin: 0, panding: "2rem", height: "100%", borderRadius: "20px", marginBottom:50 }} style={vscDarkPlus}>
                {`const aboutMe: DeveloperProfile = {
  codename: "Luan",
  origin: "☕ Café e Commits",
  role: "Desenvolvedor Fullstack Web",
  education: {
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Unopar",
    graduationYear: 2020,
    postGraduation: {
      course: "Pós-Graduação em Engenharia de Software",
      institution: "Unopar",
      graduationYear: 2023,
    },
  },
  experience: [
    {
      role: "Desenvolvedor Full Stack",
      company: "FACULDADE PETRA LTDA",
      type: "Estágio",
      duration: "ago de 2024 - jan de 2025 (6 meses)",
      location: "Juiz de Fora, MG · Híbrido",
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "RARUS - Escola de Psicanálise",
      type: "Estágio",
      duration: "mar de 2024 - ago de 2024 (6 meses)",
      location: "Juiz de Fora, MG · Híbrido",
    },
  ],
  stack: {
    languages: ["JavaScript", "TypeScript", "SQL"],
    frameworks: ["React", "Next.js", "TailwindCSS"],
  }`}
            </SyntaxHighlighter>
          </div>
          <motion.div className="floating-card" animate={{y:[0, -10, 0], rotate: [0,2,0]}} transition={{duration: 4, repeat: Infinity,ease: "easeInOut"}}>
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">Me contrata e deixa que eu cuido do front!</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
