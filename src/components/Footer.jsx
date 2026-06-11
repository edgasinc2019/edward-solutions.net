import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiHeart, FiShield } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          className="footer-logo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FiShield className="footer-icon" />
          <span>Edward Gastón Sinche Cruz</span>
        </motion.div>

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <a href="#hero">Inicio</a>
          <a href="#about">Sobre Mí</a>
          <a href="#experience">Experiencia</a>
          <a href="#education">Educación</a>
          <a href="#skills">Habilidades</a>
          <a href="#certifications">Certificaciones</a>
          <a href="#contact">Contacto</a>
        </motion.div>

        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/edward-gast%C3%B3n-sinche-cruz-49106074"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, color: '#0077b5' }}
          >
            <FiLinkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:esinche@edward-solutions.net"
            whileHover={{ y: -3, color: '#ea4335' }}
          >
            <FiMail size={20} />
          </motion.a>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>
            © {currentYear} Edward Gastón Sinche Cruz. Todos los derechos reservados.
          </p>
          <p className="made-with">
            Hecho con <FiHeart className="heart-icon" /> y React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
