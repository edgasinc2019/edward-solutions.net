import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Seguridad & Firewalls',
      color: '#00d4ff',
      skills: [
        { name: 'F5 Networks', level: 95, image: '/imagenes/f5.png' },
        { name: 'Palo Alto', level: 90, image: '/imagenes/paloalto.png' },
        { name: 'Cisco ASA', level: 88, image: '/imagenes/cisco.png' },
        { name: 'CheckPoint', level: 85, image: null },
        { name: 'Fortinet', level: 82, image: '/imagenes/fortinet.png' },
        { name: 'Sophos', level: 80, image: null },
      ],
    },
    {
      title: 'Redes & Telecomunicaciones',
      color: '#7b2ff7',
      skills: [
        { name: 'Cisco', level: 92, image: '/imagenes/cisco.png' },
        { name: 'Cloudflare', level: 85, image: '/imagenes/cloudflare.png' },
        { name: 'Meraki', level: 88, image: '/imagenes/cisco.png' },
        { name: 'VoIP/Asterisk', level: 85, image: null },
        { name: 'Netskope', level: 80, image: null },
      ],
    },
    {
      title: 'Sistemas & Programación',
      color: '#00ff88',
      skills: [
        { name: 'Windows Server', level: 88, image: null },
        { name: 'Linux', level: 85, image: null },
        { name: 'Python', level: 75, image: null },
        { name: 'PowerShell', level: 78, image: null },
        { name: 'HTML/CSS', level: 70, image: null },
        { name: 'JavaScript', level: 68, image: null },
      ],
    },
    {
      title: 'Monitoreo & Análisis',
      color: '#ff6b6b',
      skills: [
        { name: 'Splunk', level: 85, image: null },
        { name: 'SolarWinds', level: 82, image: null },
        { name: 'CA Technologies', level: 80, image: null },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Habilidades Técnicas</h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
            >
              <h3
                className="category-title"
                style={{ color: category.color }}
              >
                {category.title}
              </h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="skill-header">
                      <div className="skill-name-wrapper">
                        {skill.image && (
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="skill-icon"
                          />
                        )}
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
