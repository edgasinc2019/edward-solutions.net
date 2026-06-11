import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCheckCircle } from 'react-icons/fi';
import './Certifications.css';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      vendor: 'F5 Networks',
      certs: ['F5-CTS: ASM', 'F5-CTS: LTM', 'F5-CTS: DNS', 'F5-CTS: AFM', 'F5-CTS: APM'],
      color: '#00d4ff',
      icon: '🔷',
    },
    {
      vendor: 'Palo Alto Networks',
      certs: ['PCNSE', 'PSE'],
      color: '#7b2ff7',
      icon: '🟣',
    },
    {
      vendor: 'Cisco',
      certs: ['CCNP Security', 'CCNA'],
      color: '#00ff88',
      icon: '🟢',
    },
    {
      vendor: 'CheckPoint',
      certs: ['CCSA'],
      color: '#ff6b6b',
      icon: '🔴',
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Certificaciones</h2>

        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.vendor}
              className="cert-card glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                scale: 1.03,
                borderColor: cert.color,
              }}
            >
              <div className="cert-header">
                <span className="cert-icon">{cert.icon}</span>
                <FiAward className="cert-award-icon" style={{ color: cert.color }} />
              </div>

              <h3 className="cert-vendor" style={{ color: cert.color }}>
                {cert.vendor}
              </h3>

              <ul className="cert-list">
                {cert.certs.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  >
                    <FiCheckCircle style={{ color: cert.color }} />
                    <span>{c}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
