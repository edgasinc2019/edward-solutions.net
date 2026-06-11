import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiCode, FiShield, FiServer } from 'react-icons/fi';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <FiUser />, number: '13+', label: 'Años de Experiencia' },
    { icon: <FiShield />, number: '6+', label: 'Certificaciones' },
    { icon: <FiCode />, number: '50+', label: 'Proyectos Completados' },
    { icon: <FiServer />, number: '100%', label: 'Clientes Satisfechos' },
  ];

  return (
    <section id="about" className="about">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Sobre Mí</h2>

        <div className="about-content">
          <div className="about-text">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Soy un dedicado profesional autodidacta, que logra cumplir los objetivos
              propuestos en los tiempos planificados en cada proyecto asignado. Todos los
              clientes que administro a nivel de soporte siempre quedan satisfechos, porque
              logro diagnosticar y resolver los problemas de inmediato.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Especialista en telecomunicaciones y seguridad con más de 13 años de
              experiencia en tecnología Cisco, F5 Network, Imperva, CheckPoint, Sophos,
              Palo Alto, Fortinet, Netskope, además de telefonía IP con Asterisk y Elastic,
              arquitectura de servidores Windows y Linux, y programación en Python,
              PowerShell, HTML, CSS y JavaScript.
            </motion.p>

            <motion.div
              className="about-highlights"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span>Diagnóstico rápido de problemas</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <span>Implementación de pruebas de concepto</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔒</span>
                <span>Seguridad informática avanzada</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🌐</span>
                <span>Arquitectura de infraestructura</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number gradient-text">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
