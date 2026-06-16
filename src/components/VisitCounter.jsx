import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';
import './VisitCounter.css';

const API_URL = '/api/visits';

const VisitCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchAndIncrement = async () => {
      try {
        const postRes = await fetch(API_URL, { method: 'POST' });
        const postData = await postRes.json();
        setCount(postData.count);
      } catch {
        try {
          const getRes = await fetch(API_URL);
          const getData = await getRes.json();
          setCount(getData.count);
        } catch {
          setCount(0);
        }
      }
    };

    fetchAndIncrement();
  }, []);

  if (count === null) return null;

  return (
    <motion.div
      className="visit-counter"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <FiEye className="visit-counter-icon" />
      <span className="visit-counter-label">Visitas:</span>
      <span className="visit-counter-value">{count.toLocaleString()}</span>
    </motion.div>
  );
};

export default VisitCounter;
