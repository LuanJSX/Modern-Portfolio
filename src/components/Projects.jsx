import React from "react";
import { motion } from "framer-motion";

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

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={{ fadeInUp }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Meus Projetos
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-video"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <video
              src="/projects/Pc_landing.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <h3>🌐 AI SaaS Platform</h3>
            <p>
              Uma landing page moderna para SaaS feita com Next.js, Tailwind CSS
              e animações com Framer Motion. Design responsivo, carregamento
              rápido e visual profissional para apresentar produtos.
            </p>
            <div className="project-tech">
              <span>Next.js</span>
              <span>React</span>
              <span>TailwindCss</span> 
              <span>Framer Motion</span>      
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-video"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <video src="/projects/movie.mp4" autoPlay loop muted playsInline />
            <h3>🎬 React‑movie </h3>
            <p>
              App de busca de filmes em tempo real usando React e chamada à API
              OMDB. Inclui rolagem horizontal tipo “Netflix”, favoritos salvos
              localmente e busca dinâmica enquanto você digita.
            </p>
            <div className="project-tech">
              <span>Next.js</span>
              <span>JS</span>
              <span>OMDB API</span>
              <span>localStorage </span>
              
            
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-video"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <video
              src="/projects/videoquiz.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <h3>🎯 Quiz-app-react </h3>
            <p>
              Um app de quiz moderno criado com React, trazendo perguntas
              interativas, temporizador e pontuação instantânea. Ótimo para
              treinar lógica e hooks, com interface limpa e responsiva.
            </p>
            <div className="project-tech">
              <span>Next.js</span>
              <span>DaisyUI</span>
              <span>TailwindCss</span>
              <span>Netlify </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Projects;
