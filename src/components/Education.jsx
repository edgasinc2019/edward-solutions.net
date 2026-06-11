import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Maestría en Ciberseguridad',
      field: 'Computer and Information Systems Security',
      institution: 'Universidad Internacional del Ecuador',
      period: '2022 - 2023',
      location: 'Quito, Pichincha, Ecuador',
      description: 'Especialización en seguridad de la información, gestión de riesgos y protección de infraestructuras críticas.',
      icon: '🎓',
    },
    {
      degree: 'Licenciatura en Redes y Sistemas Operativos',
      field: 'Networking and Computer Security',
      institution: 'Escuela Superior Politécnica del Litoral',
      period: '2005 - 2011',
      location: 'Guayaquil, Guayas, Ecuador',
      description: 'Formación en arquitectura de redes, administración de sistemas operativos y seguridad informática.',
      icon: '📚',
    },
  ];

  return (
    <section id="education" className="education">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Educación</h2>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="education-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="edu-icon">{edu.icon}</div>

              <div className="edu-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-field">{edu.field}</p>

                <div className="edu-institution">
                  <FiBookOpen />
                  <span>{edu.institution}</span>
                </div>

                <div className="edu-meta">
                  <div className="edu-period">
                    <FiCalendar />
                    <span>{edu.period}</span>
                  </div>
                  <div className="edu-location">
                    <FiMapPin />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="edu-description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
