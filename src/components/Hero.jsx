import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-dot"></span>
          Disponible para nuevos retos
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hola, soy{' '}
          <span className="gradient-text">Edward Gastón</span>
          <br />
          Sinche Cruz
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="typing-text">Experto en Seguridad y Redes</span>
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Más de 13 años de experiencia en tecnología, especializado en
          telecomunicaciones, seguridad informática y arquitectura de infraestructura.
          Certificado en F5 Networks, Palo Alto, Cisco y CheckPoint.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctame
          </motion.a>
          <motion.a
            href="#about"
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conoce más
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/edward-gast%C3%B3n-sinche-cruz-49106074"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#0077b5' }}
          >
            <FiLinkedin size={22} />
          </motion.a>
          <motion.a
            href="mailto:esinche@edward-solutions.net"
            whileHover={{ y: -5, color: '#ea4335' }}
          >
            <FiMail size={22} />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="hero-shape">
          <div className="shape-ring"></div>
          <div className="shape-ring"></div>
          <div className="shape-ring"></div>
          <div className="profile-photo-container">
            <img
              src="/imagenes/edward.PNG"
              alt="Edward Gastón Sinche Cruz"
              className="profile-photo"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
