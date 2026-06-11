import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Experto SOC',
      company: 'Movistar (Telefónica Hispam)',
      period: 'Nov 2022 - Presente',
      location: 'Guayaquil, Ecuador',
      description: [
        'Ingeniero Especialista F5 Networks',
        'Ingeniero Especialista Palo Alto Networks',
        'Ingeniero Especialista Cisco',
        'Gestión y monitoreo de seguridad en centro de operaciones SOC',
      ],
      current: true,
    },
    {
      title: 'Ingeniero de Implementación',
      company: 'Secure Soft Corporation',
      period: 'Dic 2020 - Nov 2022',
      location: 'Guayaquil, Ecuador',
      description: [
        'Ingeniero Especialista CheckPoint',
        'Ingeniero Especialista Palo Alto Networks',
        'Ingeniero Especialista Cisco',
      ],
      current: false,
    },
    {
      title: 'Ingeniero Especialista F5 Networks',
      company: 'Compuequip DOS',
      period: 'Abr 2014 - Dic 2020',
      location: 'Guayaquil, Ecuador',
      description: [
        'Ingeniero especialista de redes nivel 2 (Cisco)',
        'Ingeniero especialista en seguridad (Cisco, McAfee, BlueCoat, SolarWinds)',
        'Ingeniero especialista de redes inalámbricas (WLC Cisco, Meraki)',
        'Ingeniero especialista F5 Networks BIG-IP',
      ],
      current: false,
    },
    {
      title: 'Consultor Técnico en Seguridad Informática y Jefe de Sistemas',
      company: 'Tecnología Avanzada TECNOAV',
      period: '2008 - 2014',
      location: 'Guayaquil, Ecuador',
      description: [
        'Jefe del Departamento de Sistemas',
        'Consultor Técnico de Firewall y seguridad perimetral',
        'Administrador de Central VoIP Asterisk/Elastic',
        'Consultor Técnico CA Technologies (Spectrum Infrastructure Manager, NetQoS)',
        'Arquitecto Splunk',
        'Consultor Técnico de Servidor de Antivirus Sophos',
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="experience">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Experiencia Profesional</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${exp.current ? 'current' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot">
                {exp.current && <span className="pulse-ring"></span>}
              </div>

              <div className="timeline-content glass-card">
                {exp.current && (
                  <span className="current-badge">Actual</span>
                )}

                <h3 className="exp-title">{exp.title}</h3>

                <div className="exp-company">
                  <FiBriefcase />
                  <span>{exp.company}</span>
                </div>

                <div className="exp-meta">
                  <div className="exp-period">
                    <FiCalendar />
                    <span>{exp.period}</span>
                  </div>
                  <div className="exp-location">
                    <FiMapPin />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="exp-description">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
